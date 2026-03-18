import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Testimonial } from "@/modules/testimonials/types";

export function TestimonialCard(props: { testimonial: Testimonial; className?: string }) {
  return (
    <div
      className={cn(
        "mdc-animate mdc-surface rounded-[var(--radius-lg)] p-6 hover:-translate-y-0.5 hover:shadow-[var(--shadow-2)]",
        props.className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[var(--color-border)] bg-[var(--gray-100)]">
            <Image
              src={props.testimonial.image.src}
              alt={props.testimonial.image.alt}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <div className="truncate text-base font-medium text-[var(--color-fg)]">{props.testimonial.name}</div>
            <div className="truncate text-base text-[var(--color-muted)]">
              {props.testimonial.title} · {props.testimonial.company}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1" aria-label={`${props.testimonial.rating} out of 5`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-5 w-5",
                i < props.testimonial.rating
                  ? "fill-[var(--color-primary)] text-[var(--color-primary)]"
                  : "text-[var(--gray-300)]",
              )}
              aria-hidden
            />
          ))}
        </div>
      </div>

      <p className="mt-5 text-base text-[var(--color-fg)]">{props.testimonial.text}</p>
    </div>
  );
}
