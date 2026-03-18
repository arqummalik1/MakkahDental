"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import type { UserRole } from "@/core/auth/types";
import { demoUsers } from "@/mocks/users";
import { setAccessTokenCookie } from "@/server/auth/cookies";
import { signAccessToken } from "@/server/auth/jwt";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

function safeNextPath(nextPath: string | undefined, fallback: string) {
  if (!nextPath) return fallback;
  if (!nextPath.startsWith("/")) return fallback;
  return nextPath;
}

export async function loginWithRoleAction(
  role: UserRole,
  nextPath: string | undefined,
  formData: FormData,
) {
  const parsed = schema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  const fallback = role === "admin" ? "/admin/dashboard" : "/patient/dashboard";
  const target = safeNextPath(nextPath, fallback);

  if (!parsed.success) {
    redirect(`${role === "admin" ? "/admin/login" : "/patient/login"}?error=1&next=${encodeURIComponent(target)}`);
  }

  const user = demoUsers.find(
    (u) =>
      u.role === role &&
      u.email.toLowerCase() === parsed.data.email.toLowerCase() &&
      u.password === parsed.data.password,
  );

  if (!user) {
    redirect(`${role === "admin" ? "/admin/login" : "/patient/login"}?error=1&next=${encodeURIComponent(target)}`);
  }

  const accessToken = await signAccessToken({
    user,
    expiresInSeconds: 60 * 60 * 8,
  });
  const expiresAt = Date.now() + 1000 * 60 * 60 * 8;
  await setAccessTokenCookie({ token: accessToken, expiresAt });

  redirect(target);
}
