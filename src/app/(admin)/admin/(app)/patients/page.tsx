"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Input } from "@/components/atoms/Input";
import { Button } from "@/components/atoms/Button";
import { Card, CardBody, CardHeader } from "@/components/molecules/Card";
import { patients } from "@/modules/patients/patients.mock";

export default function AdminPatientsPage() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return patients;
    return patients.filter(
      (p) => p.name.toLowerCase().includes(q) || p.phone.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <Card>
      <CardHeader title="All Patients" description="Search runs locally on mock data." />
      <CardBody>
        <div className="max-w-sm">
          <label className="text-xs font-medium text-[var(--color-muted)]" htmlFor="search">
            Search by name or phone
          </label>
          <div className="mt-2">
            <Input id="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Type to search…" />
          </div>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[980px]">
            <thead>
              <tr className="text-left text-xs text-[var(--color-muted)]">
                <th className="py-2">#</th>
                <th className="py-2">Name</th>
                <th className="py-2">Phone</th>
                <th className="py-2">Email</th>
                <th className="py-2">Age</th>
                <th className="py-2">Last Visit</th>
                <th className="py-2">Total Visits</th>
                <th className="py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.id} className="border-t border-[var(--color-border)] text-sm">
                  <td className="py-3 text-[var(--color-muted)]">{p.id}</td>
                  <td className="py-3 font-medium text-[var(--color-fg)]">{p.name}</td>
                  <td className="py-3 text-[var(--color-muted)]">{p.phone}</td>
                  <td className="py-3 text-[var(--color-muted)]">{p.email}</td>
                  <td className="py-3 text-[var(--color-muted)]">{p.age}</td>
                  <td className="py-3 text-[var(--color-muted)]">{p.lastVisit}</td>
                  <td className="py-3 text-[var(--color-muted)]">{p.totalVisits}</td>
                  <td className="py-3 text-right">
                    <Link href={`/admin/patients/${p.id}`}>
                      <Button size="sm" variant="outline">
                        View Profile
                      </Button>
                    </Link>
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
