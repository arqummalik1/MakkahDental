"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { Badge } from "@/components/atoms/Badge";
import { Card, CardBody, CardHeader } from "@/components/molecules/Card";
import { allAppointments } from "@/modules/appointments/appointments.mock";
import type { Appointment, AppointmentStatus } from "@/modules/appointments/types";

const statuses: Array<AppointmentStatus | "All"> = [
  "All",
  "Pending",
  "Confirmed",
  "Completed",
  "Cancelled",
];

export default function AdminAppointmentsPage() {
  const [rows, setRows] = useState<Appointment[]>(allAppointments);
  const [status, setStatus] = useState<(typeof statuses)[number]>("All");
  const [date, setDate] = useState("");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return rows.filter((a) => {
      const matchesStatus = status === "All" ? true : a.status === status;
      const matchesDate = date ? a.date.toLowerCase().includes(date.toLowerCase()) : true;
      const q = query.trim().toLowerCase();
      const matchesQuery = q ? a.patient.toLowerCase().includes(q) : true;
      return matchesStatus && matchesDate && matchesQuery;
    });
  }, [rows, status, date, query]);

  return (
    <Card>
      <CardHeader
        title="All Appointments"
        description="Filters run locally on mock data. Actions update local state only."
      />
      <CardBody>
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <label className="text-base font-medium text-[var(--color-muted)]" htmlFor="status">
              Status
            </label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value as (typeof statuses)[number])}
              className="mdc-animate mt-2 h-12 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 text-base text-[var(--color-fg)] shadow-[var(--shadow-inset)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--focus-ring)] focus-visible:border-[var(--color-primary)]"
            >
              {statuses.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-base font-medium text-[var(--color-muted)]" htmlFor="date">
              Date (free-text demo)
            </label>
            <div className="mt-2">
              <Input
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="e.g., Mar 17, 2026"
              />
            </div>
          </div>

          <div>
            <label className="text-base font-medium text-[var(--color-muted)]" htmlFor="search">
              Search by patient
            </label>
            <div className="mt-2">
              <Input
                id="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a name…"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[980px]">
            <thead>
              <tr className="text-left text-base text-[var(--color-muted)]">
                <th className="py-4">#</th>
                <th className="py-4">Patient Name</th>
                <th className="py-4">Phone</th>
                <th className="py-4">Service</th>
                <th className="py-4">Date</th>
                <th className="py-4">Time</th>
                <th className="py-4">Status</th>
                <th className="py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((a) => (
                <tr key={a.id} className="border-t border-[var(--color-border)] text-base">
                  <td className="py-4 text-[var(--color-muted)]">{a.id}</td>
                  <td className="py-4 font-medium text-[var(--color-fg)]">{a.patient}</td>
                  <td className="py-4 text-[var(--color-muted)]">{a.phone}</td>
                  <td className="py-4 text-[var(--color-muted)]">{a.service}</td>
                  <td className="py-4 text-[var(--color-muted)]">{a.date}</td>
                  <td className="py-4 text-[var(--color-muted)]">{a.time}</td>
                  <td className="py-4">
                    <StatusBadge status={a.status} />
                  </td>
                  <td className="py-4 text-right">
                    <div className="inline-flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          setRows((prev) =>
                            prev.map((x) =>
                              x.id === a.id ? { ...x, status: "Confirmed" } : x,
                            ),
                          )
                        }
                      >
                        Confirm
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          setRows((prev) =>
                            prev.map((x) =>
                              x.id === a.id ? { ...x, status: "Cancelled" } : x,
                            ),
                          )
                        }
                      >
                        Cancel
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}

function StatusBadge(props: { status: AppointmentStatus }) {
  if (props.status === "Confirmed") return <Badge tone="success">Confirmed</Badge>;
  if (props.status === "Pending") return <Badge tone="warning">Pending</Badge>;
  if (props.status === "Cancelled") return <Badge tone="danger">Cancelled</Badge>;
  return <Badge tone="neutral">{props.status}</Badge>;
}
