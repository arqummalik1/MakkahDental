import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  Clock,
  HeartPulse,
  MapPin,
  ShieldCheck,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { ServiceCard } from "@/components/organisms/ServiceCard";
import { TestimonialCard } from "@/components/organisms/TestimonialCard";
import { clinic } from "@/brand/clinic";
import { services } from "@/modules/services/services.mock";
import { testimonials } from "@/modules/testimonials/testimonials.mock";

export default function HomePage() {
  const previewServices = services.slice(0, 6);
  return (
    <div>
      <section className="relative overflow-hidden bg-[var(--color-surface)]">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=2000&q=70"
            alt=""
            fill
            priority
            sizes="100vw"
            className="mdc-hero-bg object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="max-w-2xl">
            <div className="mdc-glass mdc-reveal mdc-reveal-1 inline-flex items-center gap-2 rounded-full px-4 py-2 text-base font-medium text-[var(--color-fg)]">
              <Sparkles className="h-5 w-5 text-[var(--color-primary)]" aria-hidden />
              World-class care near Bathindi, Jammu
            </div>
            <h1 className="mdc-reveal mdc-reveal-2 mt-6 font-[var(--font-display)] text-[length:var(--text-h1)] font-bold leading-[1.08] tracking-tight text-[var(--color-fg)]">
              World-Class Dental Care in the Heart of Jammu
            </h1>
            <p className="mdc-reveal mdc-reveal-3 mt-4 text-[length:var(--text-body-lg)] text-[color:var(--color-fg)]/88">
              Trusted by hundreds of patients in Bathindi & across Jammu since 2024. Modern equipment,
              gentle procedures, and transparent care.
            </p>
            <div className="mdc-reveal mdc-reveal-4 mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/book-appointment">
                <Button size="lg" className="w-full sm:w-auto">
                  Book Appointment <ArrowRight className="h-5 w-5" aria-hidden />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Our Services
                </Button>
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <TrustBadge icon={<ShieldCheck className="h-5 w-5" aria-hidden />} text="5.0 Rated on JustDial" />
              <TrustBadge icon={<CalendarCheck className="h-5 w-5" aria-hidden />} text="10+ Dental Services" />
              <TrustBadge icon={<MapPin className="h-5 w-5" aria-hidden />} text="Central Bathindi Location" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          <div className="mdc-surface relative overflow-hidden rounded-[var(--radius-lg)]">
            <Image
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1600&q=70"
              alt="Dental clinic interior"
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-[var(--font-display)] text-[length:var(--text-h2)] font-semibold tracking-tight text-[var(--color-fg)]">
              A clinic built for comfort, precision, and trust
            </h2>
            <p className="mt-4 text-base text-[var(--color-muted)]">
              {clinic.name} is located in the heart of Bathindi, Jammu, near the iconic Makkah Masjid Complex.
              We are committed to delivering modern dentistry in a comfortable, hygienic environment — with
              a focus on painless procedures and clear guidance.
            </p>
            <div className="mt-8">
              <Link href="/about" className="mdc-animate inline-flex items-center gap-2 text-base font-medium text-[var(--color-primary)]">
                Learn More About Us <ArrowRight className="h-5 w-5" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="font-[var(--font-display)] text-[length:var(--text-h2)] font-semibold tracking-tight text-[var(--color-fg)]">
                What We Treat
              </h2>
              <p className="mt-2 text-base text-[var(--color-muted)]">
                Comprehensive dental care for every stage of your smile.
              </p>
            </div>
            <Link href="/services" className="mdc-animate hidden items-center gap-2 text-base font-medium text-[var(--color-primary)] sm:inline-flex">
              View All Services <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {previewServices.map((service) => (
              <ServiceCard key={service.id} service={service} compact />
            ))}
          </div>
          <div className="mt-8 sm:hidden">
            <Link href="/services" className="mdc-animate inline-flex items-center gap-2 text-base font-medium text-[var(--color-primary)]">
              View All Services <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-[var(--font-display)] text-[length:var(--text-h2)] font-semibold tracking-tight text-[var(--color-fg)]">
          Why Choose Us
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Feature title="Modern Equipment" icon={Wrench} />
          <Feature title="Painless Procedures" icon={HeartPulse} />
          <Feature title="Flexible Timings" icon={Clock} />
          <Feature title="Central Location" icon={MapPin} />
        </div>
      </section>

      <section className="bg-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-[var(--font-display)] text-[length:var(--text-h2)] font-semibold tracking-tight text-[var(--color-fg)]">
                Loved by Patients, Trusted by Families
              </h2>
              <p className="mt-4 text-base text-[var(--color-muted)]">
                Real stories from people who value gentle care, clear guidance, and premium clinical hygiene.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-primary)]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 py-16 text-white sm:px-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-[var(--font-display)] text-[length:var(--text-h2)] font-semibold tracking-tight">
              Ready to Get Your Perfect Smile?
            </h2>
            <p className="mt-4 text-base text-white/85">
              Book an appointment in under a minute. We’ll confirm shortly via phone call.
            </p>
          </div>
          <Link href="/book-appointment">
            <Button size="lg" className="bg-white text-[var(--color-primary)] hover:brightness-95">
              Book Your Appointment Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function TrustBadge(props: { icon: React.ReactNode; text: string }) {
  return (
    <div className="mdc-glass flex items-center gap-3 rounded-[var(--radius-md)] px-4 py-3 text-base font-medium text-[var(--color-fg)]">
      <span className="text-[var(--color-primary)]">{props.icon}</span>
      <span>{props.text}</span>
    </div>
  );
}

function Feature(props: { title: string; icon: LucideIcon }) {
  return (
    <div className="mdc-animate mdc-neo rounded-[var(--radius-lg)] p-6 hover:-translate-y-0.5">
      <Icon icon={props.icon} className="text-[var(--color-primary)]" />
      <div className="mt-4 font-[var(--font-display)] text-[length:var(--text-h3)] font-semibold tracking-tight text-[var(--color-fg)]">
        {props.title}
      </div>
      <div className="mt-2 text-base text-[var(--color-muted)]">
        Built for comfort and reliability, with patient-first experience.
      </div>
    </div>
  );
}
