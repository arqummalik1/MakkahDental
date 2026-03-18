"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";
import { Card, CardBody, CardHeader } from "@/components/molecules/Card";
import {
  patientPastAppointments,
  patientUpcomingAppointments,
} from "@/modules/appointments/appointments.mock";
import type { PatientAppointment } from "@/modules/appointments/types";

export default function PatientDashboardPage() {
  const [upcoming, setUpcoming] = useState<PatientAppointment[]>(
    patientUpcomingAppointments,
  );

  const upcomingRows = useMemo(() => upcoming, [upcoming]);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader title="My Upcoming Appointments" />
        <CardBody>
          <Table>
            <thead>
              <tr className="text-left text-base text-[var(--color-muted)]">
                <th className="py-4">Service</th>
                <th className="py-4">Date</th>
                <th className="py-4">Time</th>
                <th className="py-4">Status</th>
                <th className="py-4" />
              </tr>
            </thead>
            <tbody>
              {upcomingRows.map((a) => (
                <tr key={a.id} className="border-t border-[var(--color-border)] text-base">
                  <td className="py-4 font-medium text-[var(--color-fg)]">{a.service}</td>
                  <td className="py-4 text-[var(--color-muted)]">{a.date}</td>
                  <td className="py-4 text-[var(--color-muted)]">{a.time}</td>
                  <td className="py-4">
                    <StatusBadge status={a.status} />
                  </td>
                  <td className="py-4 text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={a.status === "Cancelled"}
                      onClick={() => {
                        setUpcoming((prev) =>
                          prev.map((x) =>
                            x.id === a.id ? { ...x, status: "Cancelled" } : x,
                          ),
                        );
                      }}
                    >
                      Cancel
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>

      <Card>
        <CardHeader title="Past Appointments" />
        <CardBody>
          <Table>
            <thead>
              <tr className="text-left text-base text-[var(--color-muted)]">
                <th className="py-4">Service</th>
                <th className="py-4">Date</th>
                <th className="py-4">Time</th>
                <th className="py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {patientPastAppointments.map((a) => (
                <tr key={a.id} className="border-t border-[var(--color-border)] text-base">
                  <td className="py-4 font-medium text-[var(--color-fg)]">{a.service}</td>
                  <td className="py-4 text-[var(--color-muted)]">{a.date}</td>
                  <td className="py-4 text-[var(--color-muted)]">{a.time}</td>
                  <td className="py-4">
                    <StatusBadge status={a.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>

      <Card>
        <CardHeader title="My Profile" />
        <CardBody>
          <div id="profile" className="grid gap-4 sm:grid-cols-2">
            <ProfileRow label="Name" value="Ahmed Ali" />
            <ProfileRow label="Phone" value="94191-XXXXX" />
            <ProfileRow label="Email" value="patient@demo.com" />
            <ProfileRow label="DOB" value="1998-02-12" />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

function Table(props: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[620px]">{props.children}</table>
    </div>
  );
}

function StatusBadge(props: { status: PatientAppointment["status"] }) {
  if (props.status === "Confirmed") return <Badge tone="success">Confirmed</Badge>;
  if (props.status === "Pending") return <Badge tone="warning">Pending</Badge>;
  if (props.status === "Cancelled") return <Badge tone="danger">Cancelled</Badge>;
  return <Badge tone="neutral">{props.status}</Badge>;
}

function ProfileRow(props: { label: string; value: string }) {
  return (
    <div className="mdc-animate rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--gray-50)] px-6 py-4">
      <div className="text-base text-[var(--color-muted)]">{props.label}</div>
      <div className="mt-2 text-base font-medium text-[var(--color-fg)]">{props.value}</div>
    </div>
  );
}
