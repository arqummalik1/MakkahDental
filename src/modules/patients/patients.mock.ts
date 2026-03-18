import type { Patient, PatientProfile } from "./types";

export const patients: Patient[] = [
  { id: 1, name: "Aryan Gupta", phone: "94191-XXXXX", email: "aryan@email.com", age: 28, lastVisit: "Mar 17, 2026", totalVisits: 4 },
  { id: 2, name: "Sana Mir", phone: "70060-XXXXX", email: "sana@email.com", age: 23, lastVisit: "Mar 17, 2026", totalVisits: 7 },
  { id: 3, name: "Tariq Hussain", phone: "96220-XXXXX", email: "tariq@email.com", age: 35, lastVisit: "Mar 17, 2026", totalVisits: 2 },
  { id: 4, name: "Priya Sharma", phone: "97975-XXXXX", email: "priya@email.com", age: 30, lastVisit: "Mar 16, 2026", totalVisits: 3 },
  { id: 5, name: "Imran Khan", phone: "60053-XXXXX", email: "imran@email.com", age: 41, lastVisit: "Mar 14, 2026", totalVisits: 5 },
  { id: 6, name: "Neha Dogra", phone: "80820-XXXXX", email: "neha@email.com", age: 26, lastVisit: "Mar 12, 2026", totalVisits: 2 },
  { id: 7, name: "Mehak Singh", phone: "70061-XXXXX", email: "mehak@email.com", age: 24, lastVisit: "Mar 10, 2026", totalVisits: 1 },
  { id: 8, name: "Rohan Gupta", phone: "94190-XXXXX", email: "rohan@email.com", age: 33, lastVisit: "Mar 8, 2026", totalVisits: 6 },
  { id: 9, name: "Ayesha Bhat", phone: "70063-XXXXX", email: "ayesha@email.com", age: 29, lastVisit: "Mar 5, 2026", totalVisits: 3 },
  { id: 10, name: "Farhan Malik", phone: "96221-XXXXX", email: "farhan@email.com", age: 37, lastVisit: "Mar 2, 2026", totalVisits: 4 },
  { id: 11, name: "Sahil Sharma", phone: "97972-XXXXX", email: "sahil@email.com", age: 22, lastVisit: "Feb 28, 2026", totalVisits: 1 },
  { id: 12, name: "Nazia Ahmed", phone: "60055-XXXXX", email: "nazia@email.com", age: 31, lastVisit: "Feb 25, 2026", totalVisits: 2 },
  { id: 13, name: "Zoya Khan", phone: "80822-XXXXX", email: "zoya@email.com", age: 27, lastVisit: "Feb 20, 2026", totalVisits: 3 },
  { id: 14, name: "Vikas Verma", phone: "94192-XXXXX", email: "vikas@email.com", age: 39, lastVisit: "Feb 15, 2026", totalVisits: 8 },
  { id: 15, name: "Rahul Sharma", phone: "96225-XXXXX", email: "rahul@email.com", age: 34, lastVisit: "Feb 10, 2026", totalVisits: 2 },
];

export const patientProfiles: Record<number, PatientProfile> = {
  1: {
    ...patients[0],
    dob: "1998-02-12",
    address: "Bathindi, Jammu",
    gender: "Male",
    dentalHistoryNotes:
      "Patient has mild gum sensitivity. Allergic to Penicillin. Completed RCT on lower molar Jan 2026.",
    appointmentHistory: [
      { date: "Mar 17, 2026", service: "Root Canal", status: "Completed", notes: "Treatment done in 2 sessions" },
      { date: "Feb 10, 2026", service: "X-Ray", status: "Completed", notes: "No fracture found" },
      { date: "Jan 5, 2026", service: "Consultation", status: "Completed", notes: "Recommended braces" },
    ],
  },
};
