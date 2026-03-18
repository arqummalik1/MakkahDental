import Link from "next/link";
import { clinic } from "@/brand/clinic";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div>
          <div className="font-[var(--font-display)] text-[length:var(--text-h3)] font-semibold tracking-tight text-[var(--color-fg)]">
            {clinic.name}
          </div>
          <p className="mt-4 text-base text-[var(--color-muted)]">{clinic.tagline}</p>
          <p className="mt-6 text-base text-[var(--color-muted)]">{clinic.address}</p>
          <p className="mt-2 text-base text-[var(--color-muted)]">
            Phone: {clinic.phoneDisplay}
          </p>
          <p className="mt-2 text-base text-[var(--color-muted)]">{clinic.hours.weekdays}</p>
        </div>

        <div>
          <div className="text-base font-semibold text-[var(--color-fg)]">Quick Links</div>
          <ul className="mt-4 space-y-3 text-base">
            <li>
              <Link className="mdc-animate text-[var(--color-muted)] hover:text-[var(--color-fg)]" href="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="mdc-animate text-[var(--color-muted)] hover:text-[var(--color-fg)]" href="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="mdc-animate text-[var(--color-muted)] hover:text-[var(--color-fg)]" href="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="mdc-animate text-[var(--color-muted)] hover:text-[var(--color-fg)]" href="/book-appointment">
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-base font-semibold text-[var(--color-fg)]">Location</div>
          <div className="mt-4 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] shadow-[var(--shadow-1)]">
            <iframe
              title="Makkah Dental Care map"
              className="h-56 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Bathindi%20Jammu&output=embed"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--color-border)]">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-[var(--color-muted)] sm:px-6">
          © {new Date().getFullYear()} {clinic.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
