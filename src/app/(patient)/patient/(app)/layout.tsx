import Link from "next/link";
import { clinic } from "@/brand/clinic";
import { LogoutButton } from "@/components/organisms/LogoutButton";
import { getServerSession } from "@/server/auth/session";

export default async function PatientAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  const name = session?.user.name ?? "Patient";

  return (
    <div className="min-h-dvh bg-[var(--color-surface)]">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[260px_1fr]">
        <aside className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5 shadow-sm">
          <Link href="/" className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[var(--color-primary)] text-white">
              <span className="font-[var(--font-display)] text-sm font-semibold">MD</span>
            </div>
            <div className="leading-tight">
              <div className="font-[var(--font-display)] text-sm font-semibold text-[var(--color-fg)]">
                {clinic.name}
              </div>
              <div className="text-base text-[var(--color-muted)]">Patient Portal</div>
            </div>
          </Link>

          <nav className="mt-6 space-y-1" aria-label="Patient">
            <Link
              className="block rounded-xl px-3 py-2 text-sm font-medium text-[var(--color-fg)] hover:bg-[var(--color-surface)]"
              href="/patient/dashboard"
            >
              My Appointments
            </Link>
            <Link
              className="block rounded-xl px-3 py-2 text-sm font-medium text-[var(--color-fg)] hover:bg-[var(--color-surface)]"
              href="/patient/dashboard#profile"
            >
              My Profile
            </Link>
          </nav>

          <div className="mt-6">
            <LogoutButton redirectTo="/patient/login" />
          </div>
        </aside>

        <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 shadow-sm">
          <div className="flex flex-col gap-1">
            <div className="text-sm text-[var(--color-muted)]">Welcome back</div>
            <h1 className="font-[var(--font-display)] text-2xl font-semibold text-[var(--color-fg)]">
              {name}
            </h1>
          </div>
          <div className="mt-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
