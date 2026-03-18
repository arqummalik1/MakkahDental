import { NextResponse } from "next/server";
import { z } from "zod";
import { demoUsers } from "@/mocks/users";
import { accessTokenCookieName, accessTokenCookieOptions } from "@/server/auth/cookies";
import { signAccessToken } from "@/server/auth/jwt";

const bodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

function safeNextPath(nextPath: string | null, fallback: string) {
  if (!nextPath) return fallback;
  if (!nextPath.startsWith("/")) return fallback;
  return nextPath;
}

export async function POST(req: Request) {
  const url = new URL(req.url);
  const role = url.searchParams.get("role");
  const fallbackNext = role === "admin" ? "/admin/dashboard" : "/patient/dashboard";
  const nextPath = safeNextPath(url.searchParams.get("next"), fallbackNext);
  const wantsHtml = !(req.headers.get("accept") ?? "").includes("application/json");

  const contentType = req.headers.get("content-type") ?? "";
  const body =
    contentType.includes("application/json")
      ? await req.json().catch(() => null)
      : contentType.includes("application/x-www-form-urlencoded")
        ? await req
            .text()
            .then((t) => {
              const params = new URLSearchParams(t);
              return {
                email: params.get("email"),
                password: params.get("password"),
              };
            })
            .catch(() => null)
      : await req
          .formData()
          .then((fd) => ({
            email: fd.get("email"),
            password: fd.get("password"),
          }))
          .catch(() => null);

  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    if (wantsHtml) {
      const backTo = role === "admin" ? "/admin/login" : "/patient/login";
      return NextResponse.redirect(
        new URL(`${backTo}?error=1&next=${encodeURIComponent(nextPath)}`, req.url),
        { status: 303 },
      );
    }
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const user = demoUsers.find(
    (u) =>
      (!role || u.role === role) &&
      u.email.toLowerCase() === parsed.data.email.toLowerCase() &&
      u.password === parsed.data.password,
  );

  if (!user) {
    if (wantsHtml) {
      const backTo = role === "admin" ? "/admin/login" : "/patient/login";
      return NextResponse.redirect(
        new URL(`${backTo}?error=1&next=${encodeURIComponent(nextPath)}`, req.url),
        { status: 303 },
      );
    }
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const accessToken = await signAccessToken({
    user,
    expiresInSeconds: 60 * 60 * 8,
  });
  const expiresAt = Date.now() + 1000 * 60 * 60 * 8;

  if (wantsHtml) {
    const res = NextResponse.redirect(new URL(nextPath, req.url), { status: 303 });
    res.cookies.set(accessTokenCookieName, accessToken, accessTokenCookieOptions(expiresAt));
    return res;
  }

  const res = NextResponse.json({
    user: {
      id: user.id,
      role: user.role,
      name: user.name,
      email: user.email,
    },
  });
  res.cookies.set(accessTokenCookieName, accessToken, accessTokenCookieOptions(expiresAt));
  return res;
}
