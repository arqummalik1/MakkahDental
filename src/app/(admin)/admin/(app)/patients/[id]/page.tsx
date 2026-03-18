import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { Card, CardBody, CardHeader } from "@/components/molecules/Card";
import { PatientNotesEditor } from "@/components/organisms/PatientNotesEditor";
import { patientProfiles, patients } from "@/modules/patients/patients.mock";

export default async function AdminPatientProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: rawId } = await params;
  const id = Number(rawId);
  const profile =
    patientProfiles[id] ??
    (() => {
      const base = patients.find((p) => p.id === id);
      if (!base) return null;
      return {
        ...base,
        dob: "1995-01-01",
        address: "Jammu",
        gender: "Other" as const,
        dentalHistoryNotes: "Demo-only notes. This record is not persisted.",
        appointmentHistory: [],
      };
    })();

  if (!profile) {
    return (
      <div className="space-y-4">
        <div className="text-sm text-[var(--color-muted)]">Patient not found.</div>
        <Link href="/admin/patients">
          <Button variant="outline">Back</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-sm text-[var(--color-muted)]">Patient Profile</div>
          <h1 className="font-[var(--font-display)] text-2xl font-semibold text-[var(--color-fg)]">
            {profile.name}
          </h1>
        </div>
        <Link href="/admin/patients">
          <Button variant="outline">Back</Button>
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader title="Personal Info" />
          <CardBody>
            <dl className="grid gap-4 text-sm sm:grid-cols-2">
              <Info label="Phone" value={profile.phone} />
              <Info label="Email" value={profile.email} />
              <Info label="DOB" value={profile.dob} />
              <Info label="Gender" value={profile.gender} />
              <div className="sm:col-span-2">
                <div className="text-xs text-[var(--color-muted)]">Address</div>
                <div className="mt-1 font-medium text-[var(--color-fg)]">{profile.address}</div>
              </div>
            </dl>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="Dental History Notes" description="Editable demo-only field (local state)." />
          <CardBody>
            <PatientNotesEditor initialNotes={profile.dentalHistoryNotes} />
          </CardBody>
        </Card>
      </div>

      <Card>
        <CardHeader title="Appointment History" />
        <CardBody>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px]">
              <thead>
                <tr className="text-left text-xs text-[var(--color-muted)]">
                  <th className="py-2">Date</th>
                  <th className="py-2">Service</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Notes</th>
                </tr>
              </thead>
              <tbody>
                {profile.appointmentHistory.length ? (
                  profile.appointmentHistory.map((a) => (
                    <tr key={`${a.date}-${a.service}`} className="border-t border-[var(--color-border)] text-sm">
                      <td className="py-3 text-[var(--color-muted)]">{a.date}</td>
                      <td className="py-3 font-medium text-[var(--color-fg)]">{a.service}</td>
                      <td className="py-3 text-[var(--color-muted)]">{a.status}</td>
                      <td className="py-3 text-[var(--color-muted)]">{a.notes}</td>
                    </tr>
                  ))
                ) : (
                  <tr className="border-t border-[var(--color-border)]">
                    <td className="py-4 text-sm text-[var(--color-muted)]" colSpan={4}>
                      No appointment history in this mock profile.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

function Info(props: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-[var(--color-muted)]">{props.label}</div>
      <div className="mt-1 font-medium text-[var(--color-fg)]">{props.value}</div>
    </div>
  );
}
