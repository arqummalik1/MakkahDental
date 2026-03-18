import Image from "next/image";
import { Card, CardBody, CardHeader } from "@/components/molecules/Card";
import { clinic } from "@/brand/clinic";

export const metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mdc-surface relative overflow-hidden rounded-[var(--radius-lg)]">
        <Image
          src="https://images.unsplash.com/photo-1600172454284-934feca24ccd?auto=format&fit=crop&w=2000&q=70"
          alt="Dental clinic team"
          width={2000}
          height={900}
          className="h-64 w-full object-cover sm:h-72"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-black/10" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <h1 className="font-[var(--font-display)] text-[length:var(--text-h1)] font-semibold tracking-tight text-white">
            About {clinic.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/85">
            Modern dentistry in a comfortable, hygienic environment — near the iconic Makkah Masjid Complex.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader title="Our Story" description="Patient-first care with modern technology." />
          <CardBody>
            <p className="text-base text-[var(--color-muted)]">
              {clinic.name} is located in the heart of Bathindi, Jammu, near the iconic Makkah Masjid Complex.
              We are committed to delivering world-class dental care using modern technology in a comfortable,
              hygienic environment.
            </p>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="Our Values" description="What guides every visit." />
          <CardBody>
            <div className="grid gap-3 sm:grid-cols-3">
              <ValueCard title="Patient First" />
              <ValueCard title="Modern Technology" />
              <ValueCard title="Affordable Care" />
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader title="Clinic Timings" />
          <CardBody>
            <div className="grid grid-cols-2 gap-2 text-base">
              <div className="rounded-[var(--radius-md)] bg-[var(--gray-50)] px-4 py-3 font-medium text-[var(--color-fg)]">
                Monday – Saturday
              </div>
              <div className="rounded-[var(--radius-md)] bg-[var(--gray-50)] px-4 py-3 text-[var(--color-muted)]">
                10:00 AM – 8:00 PM
              </div>
              <div className="rounded-[var(--radius-md)] bg-[var(--gray-50)] px-4 py-3 font-medium text-[var(--color-fg)]">
                Sunday
              </div>
              <div className="rounded-[var(--radius-md)] bg-[var(--gray-50)] px-4 py-3 text-[var(--color-muted)]">
                By Appointment Only
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="Location" description={clinic.address} />
          <CardBody>
            <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] shadow-[var(--shadow-1)]">
              <iframe
                title="Makkah Dental Care map"
                className="h-56 w-full"
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

function ValueCard(props: { title: string }) {
  return (
    <div className="mdc-animate mdc-surface rounded-[var(--radius-md)] p-4 text-base font-medium text-[var(--color-fg)]">
      {props.title}
    </div>
  );
}
