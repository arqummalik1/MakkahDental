"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Card, CardBody, CardHeader } from "@/components/molecules/Card";
import { useAppointmentStore } from "@/stores/appointmentStore";

export default function AppointmentConfirmedPage() {
  const draft = useAppointmentStore((s) => s.draft);
  const clearDraft = useAppointmentStore((s) => s.clearDraft);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    return () => {
      clearDraft();
    };
  }, [clearDraft]);

  const name = draft?.fullName ?? "Guest";
  const service = draft?.service ?? "Dental Consultation";
  const date = draft?.preferredDate ?? "March 22, 2026";
  const time = draft?.preferredTime ?? "11:00 AM";

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <div className="mdc-neo rounded-[var(--radius-lg)] p-8">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <motion.div
            initial={reduceMotion ? false : { scale: 0.8, opacity: 0 }}
            animate={reduceMotion ? { opacity: 1 } : { scale: 1, opacity: 1 }}
            transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 220, damping: 16 }}
            className="grid h-14 w-14 place-items-center rounded-[var(--radius-md)] bg-[var(--gray-100)]"
            aria-hidden
          >
            <CheckCircle2 className="h-8 w-8 text-[var(--color-primary)]" aria-hidden />
          </motion.div>
          <div>
            <h1 className="font-[var(--font-display)] text-[length:var(--text-h2)] font-semibold tracking-tight text-[var(--color-fg)]">
              Appointment Request Received!
            </h1>
            <p className="mt-4 text-base text-[var(--color-muted)]">
              Thank you, {name}! We will confirm your appointment shortly via phone call.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader title="Request Details" />
            <CardBody>
              <dl className="grid gap-6 text-base sm:grid-cols-2">
                <div>
                  <dt className="text-[var(--color-muted)]">Name</dt>
                  <dd className="mt-1 font-medium text-[var(--color-fg)]">{name}</dd>
                </div>
                <div>
                  <dt className="text-[var(--color-muted)]">Service</dt>
                  <dd className="mt-1 font-medium text-[var(--color-fg)]">{service}</dd>
                </div>
                <div>
                  <dt className="text-[var(--color-muted)]">Date</dt>
                  <dd className="mt-1 font-medium text-[var(--color-fg)]">{date}</dd>
                </div>
                <div>
                  <dt className="text-[var(--color-muted)]">Time</dt>
                  <dd className="mt-1 font-medium text-[var(--color-fg)]">{time}</dd>
                </div>
              </dl>
            </CardBody>
          </Card>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Back to Home
            </Button>
          </Link>
          <Link href="/book-appointment">
            <Button size="lg" className="w-full sm:w-auto">
              Book Another Appointment
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
