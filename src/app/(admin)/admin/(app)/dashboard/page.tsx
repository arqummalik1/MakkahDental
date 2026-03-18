import { Badge } from "@/components/atoms/Badge";
import { Sparkline } from "@/components/atoms/Sparkline";
import { Card, CardBody, CardHeader } from "@/components/molecules/Card";
import { todayAppointments } from "@/modules/appointments/appointments.mock";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Today's Appointments" value="6" trend={[3, 4, 5, 4, 6, 6, 6]} />
        <StatCard title="Total Patients" value="48" trend={[38, 40, 41, 44, 46, 47, 48]} />
        <StatCard title="Completed This Month" value="34" trend={[16, 18, 22, 24, 28, 31, 34]} />
        <StatCard title="Pending Approvals" value="3" trend={[4, 5, 4, 3, 3, 2, 3]} />
      </div>

      <Card>
        <CardHeader title="Today's Schedule" description="Hardcoded demo data (mock-only)." />
        <CardBody>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px]">
              <thead>
                <tr className="text-left text-base text-[var(--color-muted)]">
                  <th className="py-4">Time</th>
                  <th className="py-4">Patient</th>
                  <th className="py-4">Service</th>
                  <th className="py-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {todayAppointments.map((a) => (
                  <tr key={`${a.time}-${a.patient}`} className="border-t border-[var(--color-border)] text-base">
                    <td className="py-4 font-medium text-[var(--color-fg)]">{a.time}</td>
                    <td className="py-4 text-[var(--color-muted)]">{a.patient}</td>
                    <td className="py-4 text-[var(--color-muted)]">{a.service}</td>
                    <td className="py-4">
                      <Badge tone={a.status === "Confirmed" ? "success" : "warning"}>{a.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

function StatCard(props: { title: string; value: string; trend: number[] }) {
  return (
    <div className="mdc-animate mdc-neo rounded-[var(--radius-lg)] p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-base text-[var(--color-muted)]">{props.title}</div>
          <div className="mt-2 font-[var(--font-display)] text-2xl font-semibold text-[var(--color-fg)]">
            {props.value}
          </div>
        </div>
        <div className="mt-1 rounded-[var(--radius-md)] bg-[var(--gray-100)] px-3 py-2">
          <Sparkline points={props.trend} />
        </div>
      </div>
    </div>
  );
}
