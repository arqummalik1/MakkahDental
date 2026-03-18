import { z } from "zod";

const serverSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  AUTH_JWT_SECRET: z
    .string()
    .min(32)
    .optional()
    .transform((value) => value ?? (process.env.NODE_ENV === "production" ? "" : "dev-only-change-me-dev-only-change-me")),
});

const clientSchema = z.object({
  NEXT_PUBLIC_SITE_ORIGIN: z.string().url().optional(),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url().optional(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().optional(),
});

export const env = {
  server: serverSchema.parse({
    NODE_ENV: process.env.NODE_ENV,
    AUTH_JWT_SECRET: process.env.AUTH_JWT_SECRET,
  }),
  client: clientSchema.parse({
    NEXT_PUBLIC_SITE_ORIGIN: process.env.NEXT_PUBLIC_SITE_ORIGIN,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  }),
};
