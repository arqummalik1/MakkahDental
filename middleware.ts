import { NextResponse, type NextRequest } from "next/server";
import { jwtVerify } from "jose";

const cookieName = "mdc_access_token";
const issuer = "makkah-dental";
const audience = "makkah-dental-web";

function secretKey() {
  const secret =
    process.env.AUTH_JWT_SECRET ??
    (process.env.NODE_ENV === "production"
      ? ""
      : "dev-only-change-me-dev-only-change-me");
  return new TextEncoder().encode(secret);
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isPatient = pathname.startsWith("/patient");
  const isAdmin = pathname.startsWith("/admin");

  if (!isPatient && !isAdmin) return NextResponse.next();
  if (pathname === "/patient/login" || pathname === "/admin/login") {
    return NextResponse.next();
  }

  const token = req.cookies.get(cookieName)?.value;
  if (!token) return redirectToLogin(req, isAdmin);

  try {
    const { payload } = await jwtVerify(token, secretKey(), { issuer, audience });
    const role = payload.role;
    if (isAdmin && role !== "admin") return redirectToLogin(req, true);
    if (isPatient && role !== "patient") return redirectToLogin(req, false);
    return NextResponse.next();
  } catch {
    return redirectToLogin(req, isAdmin);
  }
}

export const config = {
  matcher: ["/patient/:path*", "/admin/:path*"],
};

function redirectToLogin(req: NextRequest, isAdmin: boolean) {
  const url = req.nextUrl.clone();
  url.pathname = isAdmin ? "/admin/login" : "/patient/login";
  url.searchParams.set("next", req.nextUrl.pathname);
  return NextResponse.redirect(url);
}
