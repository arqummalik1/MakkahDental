export type Patient = {
  id: number;
  name: string;
  phone: string;
  email: string;
  age: number;
  lastVisit: string;
  totalVisits: number;
};

export type PatientProfile = Patient & {
  dob: string;
  address: string;
  gender: "Male" | "Female" | "Other";
  dentalHistoryNotes: string;
  appointmentHistory: Array<{
    date: string;
    service: string;
    status: "Completed" | "Cancelled" | "Confirmed" | "Pending";
    notes: string;
  }>;
};
