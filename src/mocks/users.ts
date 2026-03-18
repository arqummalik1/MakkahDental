import type { AuthUser } from "@/core/auth/types";

export const demoUsers: Array<AuthUser & { password: string }> = [
  {
    id: "patient_ahmed_ali",
    role: "patient",
    name: "Ahmed Ali",
    email: "patient@demo.com",
    password: "patient123",
  },
  {
    id: "admin_makkah_dental",
    role: "admin",
    name: "Makkah Dental Admin",
    email: "admin@makkahdentalcare.com",
    password: "admin123",
  },
];
