import { SignJWT, jwtVerify } from "jose";
import { env } from "@/config/env";
import type { AuthUser, UserRole } from "@/core/auth/types";

const issuer = "makkah-dental";
const audience = "makkah-dental-web";

type JwtPayload = {
  sub: string;
  role: UserRole;
  email: string;
  name: string;
};

function secretKey() {
  return new TextEncoder().encode(env.server.AUTH_JWT_SECRET);
}

export async function signAccessToken(args: {
  user: AuthUser;
  expiresInSeconds: number;
}) {
  const now = Math.floor(Date.now() / 1000);
  const payload: JwtPayload = {
    sub: args.user.id,
    role: args.user.role,
    email: args.user.email,
    name: args.user.name,
  };

  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt(now)
    .setIssuer(issuer)
    .setAudience(audience)
    .setExpirationTime(now + args.expiresInSeconds)
    .sign(secretKey());

  return token;
}

export async function verifyAccessToken(token: string) {
  const { payload } = await jwtVerify<JwtPayload>(token, secretKey(), {
    issuer,
    audience,
  });

  const exp = typeof payload.exp === "number" ? payload.exp : 0;
  const user: AuthUser = {
    id: payload.sub ?? "",
    role: payload.role,
    email: payload.email,
    name: payload.name,
  };

  return { user, expiresAt: exp * 1000 };
}
