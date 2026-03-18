"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import { Button } from "@/components/atoms/Button";
import { clinic } from "@/brand/clinic";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const activeHref = useMemo(() => {
    const exact = navItems.find((i) => i.href === pathname)?.href;
    if (exact) return exact;
    const prefix = navItems.find((i) => i.href !== "/" && pathname?.startsWith(i.href))?.href;
    return prefix ?? "/";
  }, [pathname]);

  return (
    <header className="mdc-glass sticky top-0 z-50 border-b">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="grid h-10 w-10 place-items-center rounded-[var(--radius-md)] bg-[var(--color-primary)] text-white shadow-[var(--shadow-1)]">
            <span className="font-[var(--font-display)] text-base font-semibold">MD</span>
          </div>
          <div className="leading-tight">
            <div className="font-[var(--font-display)] text-base font-semibold text-[var(--color-fg)]">
              {clinic.name}
            </div>
            <div className="text-base text-[var(--color-muted)]">{clinic.tagline}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "mdc-animate rounded-[var(--radius-sm)] px-4 py-2 text-base font-medium",
                item.href === activeHref
                  ? "bg-[var(--color-surface)] text-[var(--color-fg)] shadow-[var(--shadow-inset)]"
                  : "text-[var(--color-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-fg)]",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/patient/login"
            className="mdc-animate text-base font-medium text-[var(--color-muted)] hover:text-[var(--color-fg)]"
          >
            Patient Login
          </Link>
          <Link href="/book-appointment">
            <Button size="sm">Book Appointment</Button>
          </Link>
        </div>

        <button
          type="button"
          className="mdc-animate inline-flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-1)] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-[var(--color-border)] bg-[var(--color-surface-2)] backdrop-blur-[var(--blur-glass)] md:hidden"
          >
            <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "mdc-animate rounded-[var(--radius-sm)] px-4 py-3 text-base font-medium",
                      item.href === activeHref
                        ? "bg-[var(--color-surface)] text-[var(--color-fg)] shadow-[var(--shadow-inset)]"
                        : "text-[var(--color-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-fg)]",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <Link href="/patient/login" onClick={() => setOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Patient Login
                  </Button>
                </Link>
                <Link href="/book-appointment" onClick={() => setOpen(false)}>
                  <Button className="w-full">Book Appointment</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
