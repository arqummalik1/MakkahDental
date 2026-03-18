"use client";

import { create } from "zustand";
import type { AuthUser } from "@/core/auth/types";
import * as authClient from "@/services/auth/client";

type AuthStatus = "idle" | "loading" | "authenticated" | "unauthenticated";

type AuthState = {
  status: AuthStatus;
  user: AuthUser | null;
  error: string | null;
  hydrate: () => Promise<void>;
  login: (args: { email: string; password: string }) => Promise<AuthUser>;
  logout: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set, get) => ({
  status: "idle",
  user: null,
  error: null,
  hydrate: async () => {
    if (get().status === "loading" || get().status === "authenticated") return;
    set({ status: "loading", error: null });
    try {
      const res = await authClient.me();
      set({ user: res.user, status: "authenticated" });
    } catch {
      set({ user: null, status: "unauthenticated" });
    }
  },
  login: async (args) => {
    set({ status: "loading", error: null });
    try {
      const res = await authClient.login(args);
      set({ user: res.user, status: "authenticated" });
      return res.user;
    } catch {
      set({
        user: null,
        status: "unauthenticated",
        error: "Invalid email or password",
      });
      throw new Error("Invalid email or password");
    }
  },
  logout: async () => {
    set({ status: "loading", error: null });
    try {
      await authClient.logout();
    } finally {
      set({ user: null, status: "unauthenticated" });
    }
  },
}));
