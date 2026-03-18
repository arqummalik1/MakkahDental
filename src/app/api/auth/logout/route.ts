import { NextResponse } from "next/server";
import { accessTokenCookieName, clearedAccessTokenCookieOptions } from "@/server/auth/cookies";

export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(accessTokenCookieName, "", clearedAccessTokenCookieOptions());
  return res;
}
