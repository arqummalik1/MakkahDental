"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { clinic } from "@/brand/clinic";
import { useAuthStore } from "@/stores/authStore";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

type FormValues = z.infer<typeof schema>;

export function AdminLoginClient(props: { nextPath: string }) {
  const router = useRouter();
  const next = props.nextPath || "/admin/dashboard";

  const login = useAuthStore((s) => s.login);
  const error = useAuthStore((s) => s.error);
  const status = useAuthStore((s) => s.status);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  useEffect(() => {
    document.documentElement.dataset.appHydrated = "true";
  }, []);

  return (
    <div className="grid min-h-dvh place-items-center bg-[var(--color-bg)] px-4">
      <div className="mdc-neo w-full max-w-md rounded-[var(--radius-lg)] p-8">
        <div className="flex items-center gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-[var(--radius-md)] bg-[var(--color-primary)] text-white shadow-[var(--shadow-1)]">
            <span className="font-[var(--font-display)] text-base font-semibold">MD</span>
          </div>
          <div>
            <div className="font-[var(--font-display)] text-[length:var(--text-h3)] font-semibold tracking-tight text-[var(--color-fg)]">
              Admin Panel
            </div>
            <div className="text-base text-[var(--color-muted)]">{clinic.name}</div>
          </div>
        </div>

        <form
          className="mt-8 grid gap-6"
          action="#"
          method="post"
          onSubmit={form.handleSubmit(async (values) => {
            await login(values);
            router.push(next);
          })}
          noValidate
        >
          <div>
            <label className="text-base font-medium text-[var(--color-fg)]" htmlFor="email">
              Email
            </label>
            <div className="mt-2">
              <Input id="email" autoComplete="email" inputMode="email" {...form.register("email")} />
            </div>
          </div>

          <div>
            <label className="text-base font-medium text-[var(--color-fg)]" htmlFor="password">
              Password
            </label>
            <div className="mt-2">
              <Input id="password" type="password" autoComplete="current-password" {...form.register("password")} />
            </div>
          </div>

          {error ? (
            <div
              role="alert"
              className="rounded-[var(--radius-md)] border border-rose-200 bg-rose-50 px-4 py-4 text-base text-rose-800"
            >
              {error}
            </div>
          ) : null}

          <Button type="submit" size="lg" disabled={status === "loading"}>
            Login
          </Button>

          <div className="text-center text-base">
            <Link className="mdc-animate text-[var(--color-primary)] hover:underline" href="/patient/login">
              Patient Login →
            </Link>
          </div>
        </form>

        <div className="mt-8 rounded-[var(--radius-md)] bg-[var(--gray-100)] px-4 py-4 text-base text-[var(--color-muted)]">
          Demo credentials: admin@makkahdentalcare.com / admin123
        </div>
      </div>
    </div>
  );
}
