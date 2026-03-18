import { createHttpClient } from "@/core/http/client";
import type { AuthUser } from "@/core/auth/types";

const http = createHttpClient();

export type LoginRequest = {
  email: string;
  password: string;
};

export async function login(req: LoginRequest) {
  return http.request<{ user: AuthUser }>("/api/auth/login", {
    method: "POST",
    body: req,
  });
}

export async function logout() {
  return http.request<{ ok: true }>("/api/auth/logout", { method: "POST" });
}

export async function me() {
  return http.request<{ user: AuthUser }>("/api/auth/me", { method: "GET" });
}
