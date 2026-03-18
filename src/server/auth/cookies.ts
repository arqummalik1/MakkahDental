import { cookies } from "next/headers";

export const accessTokenCookieName = "mdc_access_token";

export function accessTokenCookieOptions(expiresAt: number) {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: new Date(expiresAt),
  };
}

export function clearedAccessTokenCookieOptions() {
  return accessTokenCookieOptions(0);
}

export async function getAccessTokenCookie() {
  const jar = await cookies();
  return jar.get(accessTokenCookieName)?.value ?? null;
}

export async function setAccessTokenCookie(args: {
  token: string;
  expiresAt: number;
}) {
  const jar = await cookies();
  jar.set(accessTokenCookieName, args.token, accessTokenCookieOptions(args.expiresAt));
}

export async function clearAccessTokenCookie() {
  const jar = await cookies();
  jar.set(accessTokenCookieName, "", clearedAccessTokenCookieOptions());
}
