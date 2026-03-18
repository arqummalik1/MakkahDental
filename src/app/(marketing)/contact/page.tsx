import Link from "next/link";
import { Card, CardBody, CardHeader } from "@/components/molecules/Card";
import { Button } from "@/components/atoms/Button";
import { clinic } from "@/brand/clinic";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="max-w-2xl">
        <h1 className="font-[var(--font-display)] text-[length:var(--text-h1)] font-semibold tracking-tight text-[var(--color-fg)]">
          Contact
        </h1>
        <p className="mt-4 text-base text-[var(--color-muted)]">
          Visit us near Makkah Masjid Complex, Bathindi. We’re open Mon–Sat, 10:00 AM – 8:00 PM.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader title="Clinic Details" />
          <CardBody>
            <div className="space-y-4 text-base text-[var(--color-muted)]">
              <div>
                <div className="font-medium text-[var(--color-fg)]">Address</div>
                <div className="mt-2">{clinic.address}</div>
              </div>
              <div>
                <div className="font-medium text-[var(--color-fg)]">Phone</div>
                <div className="mt-2">{clinic.phoneDisplay}</div>
              </div>
              <div>
                <div className="font-medium text-[var(--color-fg)]">Hours</div>
                <div className="mt-2">{clinic.hours.weekdays}</div>
                <div className="mt-2">{clinic.hours.sunday}</div>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/book-appointment">
                <Button>Book Appointment</Button>
              </Link>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="Map" />
          <CardBody>
            <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] shadow-[var(--shadow-1)]">
              <iframe
                title="Makkah Dental Care map"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Bathindi%20Jammu&output=embed"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
