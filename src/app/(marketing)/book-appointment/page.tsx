"use client";

import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { Textarea } from "@/components/atoms/Textarea";
import { services } from "@/modules/services/services.mock";
import { useAppointmentStore } from "@/stores/appointmentStore";

const timeSlots = [
  "10:00 AM – 11:00 AM",
  "11:00 AM – 12:00 PM",
  "12:00 PM – 1:00 PM",
  "2:00 PM – 3:00 PM",
  "3:00 PM – 4:00 PM",
  "4:00 PM – 5:00 PM",
  "5:00 PM – 6:00 PM",
  "6:00 PM – 7:00 PM",
] as const;

const schema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  phone: z.string().min(8, "Phone number is required"),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  service: z.string().min(1, "Select a service"),
  preferredDate: z.string().min(1, "Select a date"),
  preferredTime: z.string().min(1, "Select a time slot"),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export default function BookAppointmentPage() {
  const router = useRouter();
  const setDraft = useAppointmentStore((s) => s.setDraft);

  const serviceOptions = useMemo(() => services.map((s) => s.name), []);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      service: "",
      preferredDate: "",
      preferredTime: "",
      notes: "",
    },
    mode: "onTouched",
  });

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <div className="max-w-2xl">
        <h1 className="font-[var(--font-display)] text-[length:var(--text-h1)] font-semibold tracking-tight text-[var(--color-fg)]">
          Book Appointment
        </h1>
        <p className="mt-4 text-base text-[var(--color-muted)]">
          This is a demo flow. Your request won’t be saved, but the UX mirrors a real booking journey.
        </p>
      </div>

      <form
        className="mdc-neo mt-10 grid gap-6 rounded-[var(--radius-lg)] p-8"
        onSubmit={form.handleSubmit((values) => {
          setDraft({
            fullName: values.fullName,
            phone: values.phone,
            email: values.email || undefined,
            service: values.service,
            preferredDate: values.preferredDate,
            preferredTime: values.preferredTime,
            notes: values.notes || undefined,
          });
          router.push("/appointment-confirmed");
        })}
        noValidate
      >
        <Field label="Full Name" error={form.formState.errors.fullName?.message}>
          {(controlProps) => (
            <Input autoComplete="name" {...controlProps} {...form.register("fullName")} />
          )}
        </Field>

        <Field label="Phone Number" error={form.formState.errors.phone?.message}>
          {(controlProps) => (
            <Input inputMode="tel" autoComplete="tel" {...controlProps} {...form.register("phone")} />
          )}
        </Field>

        <Field label="Email Address (Optional)" error={form.formState.errors.email?.message}>
          {(controlProps) => (
            <Input inputMode="email" autoComplete="email" {...controlProps} {...form.register("email")} />
          )}
        </Field>

        <Field label="Select Service" error={form.formState.errors.service?.message}>
          {(controlProps) => (
            <select
              className="mdc-animate h-12 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 text-base text-[var(--color-fg)] shadow-[var(--shadow-inset)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--focus-ring)] focus-visible:border-[var(--color-primary)]"
              {...controlProps}
              {...form.register("service")}
            >
              <option value="">Choose a service</option>
              {serviceOptions.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          )}
        </Field>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Preferred Date" error={form.formState.errors.preferredDate?.message}>
            {(controlProps) => (
              <Input type="date" {...controlProps} {...form.register("preferredDate")} />
            )}
          </Field>
          <Field label="Preferred Time Slot" error={form.formState.errors.preferredTime?.message}>
            {(controlProps) => (
              <select
                className="mdc-animate h-12 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 text-base text-[var(--color-fg)] shadow-[var(--shadow-inset)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--focus-ring)] focus-visible:border-[var(--color-primary)]"
                {...controlProps}
                {...form.register("preferredTime")}
              >
                <option value="">Choose a slot</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            )}
          </Field>
        </div>

        <Field label="Additional Notes (Optional)" error={form.formState.errors.notes?.message}>
          {(controlProps) => (
            <Textarea rows={4} {...controlProps} {...form.register("notes")} />
          )}
        </Field>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base text-[var(--color-muted)]">
            By submitting, you agree this is a demo and no real booking is created.
          </p>
          <Button type="submit" size="lg">
            Submit Request
          </Button>
        </div>
      </form>
    </div>
  );
}

function Field(props: {
  label: string;
  error?: string;
  children: (controlProps: {
    id: string;
    "aria-invalid": "true" | "false";
    "aria-describedby"?: string;
  }) => React.ReactNode;
}) {
  const id = props.label.toLowerCase().replace(/\s+/g, "-");
  const describedBy = props.error ? `${id}-error` : undefined;

  return (
    <div>
      <label htmlFor={id} className="text-base font-medium text-[var(--color-fg)]">
        {props.label}
      </label>
      <div className="mt-2">
        {props.children({
          id,
          "aria-invalid": props.error ? "true" : "false",
          "aria-describedby": describedBy,
        })}
      </div>
      {props.error ? (
        <p id={describedBy} className="mt-2 text-base text-rose-700">
          {props.error}
        </p>
      ) : null}
    </div>
  );
}
