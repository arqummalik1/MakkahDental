import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { ServiceCard } from "@/components/organisms/ServiceCard";
import { services } from "@/modules/services/services.mock";

export const metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="max-w-2xl">
        <h1 className="font-[var(--font-display)] text-[length:var(--text-h1)] font-semibold tracking-tight text-[var(--color-fg)]">
          Services
        </h1>
        <p className="mt-4 text-base text-[var(--color-muted)]">
          Explore our complete range of dental services. Each treatment is delivered with modern equipment
          and a patient-first approach.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col gap-4">
            <ServiceCard service={service} />
            <Link href="/book-appointment" className="inline-flex">
              <Button variant="outline" className="w-full">
                Book This Service <ArrowRight className="h-5 w-5" aria-hidden />
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
