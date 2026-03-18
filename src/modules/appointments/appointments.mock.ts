import type { Appointment, PatientAppointment } from "./types";

export const todayAppointments = [
  { time: "10:00 AM", patient: "Aryan Gupta", service: "RCT", status: "Confirmed" },
  { time: "11:00 AM", patient: "Sana Mir", service: "Braces Checkup", status: "Confirmed" },
  { time: "12:00 PM", patient: "Tariq Hussain", service: "Teeth Whitening", status: "Pending" },
  { time: "2:00 PM", patient: "Priya Sharma", service: "Crown Fitting", status: "Confirmed" },
  { time: "4:00 PM", patient: "Imran Khan", service: "Implant Consult", status: "Pending" },
  { time: "6:00 PM", patient: "Neha Dogra", service: "Cleaning", status: "Confirmed" },
] as const;

export const allAppointments: Appointment[] = [
  { id: 1, patient: "Aryan Gupta", phone: "94191-XXXXX", service: "Root Canal", date: "Mar 17, 2026", time: "10:00 AM", status: "Confirmed" },
  { id: 2, patient: "Sana Mir", phone: "70060-XXXXX", service: "Braces", date: "Mar 17, 2026", time: "11:00 AM", status: "Confirmed" },
  { id: 3, patient: "Tariq Hussain", phone: "96220-XXXXX", service: "Whitening", date: "Mar 17, 2026", time: "12:00 PM", status: "Pending" },
  { id: 4, patient: "Priya Sharma", phone: "97975-XXXXX", service: "Crowns", date: "Mar 17, 2026", time: "2:00 PM", status: "Confirmed" },
  { id: 5, patient: "Imran Khan", phone: "60053-XXXXX", service: "Implant Consult", date: "Mar 17, 2026", time: "4:00 PM", status: "Pending" },
  { id: 6, patient: "Neha Dogra", phone: "80820-XXXXX", service: "Cleaning", date: "Mar 17, 2026", time: "6:00 PM", status: "Confirmed" },
  { id: 7, patient: "Mehak Singh", phone: "70060-XXXXX", service: "RCT", date: "Mar 18, 2026", time: "10:00 AM", status: "Pending" },
  { id: 8, patient: "Rohan Gupta", phone: "94190-XXXXX", service: "Braces", date: "Mar 18, 2026", time: "11:00 AM", status: "Confirmed" },
  { id: 9, patient: "Ayesha Bhat", phone: "70063-XXXXX", service: "Whitening", date: "Mar 18, 2026", time: "12:00 PM", status: "Cancelled" },
  { id: 10, patient: "Farhan Malik", phone: "96221-XXXXX", service: "Implants", date: "Mar 19, 2026", time: "2:00 PM", status: "Confirmed" },
  { id: 11, patient: "Sahil Sharma", phone: "97972-XXXXX", service: "Extraction", date: "Mar 19, 2026", time: "3:00 PM", status: "Pending" },
  { id: 12, patient: "Nazia Ahmed", phone: "60055-XXXXX", service: "Cosmetic", date: "Mar 20, 2026", time: "4:00 PM", status: "Confirmed" },
  { id: 13, patient: "Zoya Khan", phone: "80822-XXXXX", service: "Laser", date: "Mar 20, 2026", time: "5:00 PM", status: "Completed" },
  { id: 14, patient: "Vikas Verma", phone: "94192-XXXXX", service: "Checkup", date: "Mar 21, 2026", time: "11:00 AM", status: "Confirmed" },
  { id: 15, patient: "Sana Mir", phone: "70060-XXXXX", service: "Braces Checkup", date: "Mar 21, 2026", time: "12:00 PM", status: "Completed" },
  { id: 16, patient: "Rahul Sharma", phone: "96225-XXXXX", service: "RCT Follow-up", date: "Mar 21, 2026", time: "2:00 PM", status: "Confirmed" },
  { id: 17, patient: "Mohammad Iqbal", phone: "97979-XXXXX", service: "Extraction", date: "Mar 22, 2026", time: "10:00 AM", status: "Confirmed" },
  { id: 18, patient: "Karan Singh", phone: "60052-XXXXX", service: "Crowns", date: "Mar 22, 2026", time: "11:00 AM", status: "Cancelled" },
  { id: 19, patient: "Priya Sharma", phone: "80829-XXXXX", service: "Whitening", date: "Mar 23, 2026", time: "3:00 PM", status: "Pending" },
  { id: 20, patient: "Aryan Gupta", phone: "94191-XXXXX", service: "Cleaning", date: "Mar 23, 2026", time: "4:00 PM", status: "Confirmed" },
];

export const patientUpcomingAppointments: PatientAppointment[] = [
  { id: 1, service: "Root Canal Treatment", date: "March 22, 2026", time: "11:00 AM", status: "Confirmed" },
  { id: 2, service: "Teeth Whitening", date: "April 5, 2026", time: "3:00 PM", status: "Pending" },
];

export const patientPastAppointments: PatientAppointment[] = [
  { id: 3, service: "Dental Braces Checkup", date: "Feb 10, 2026", time: "12:00 PM", status: "Completed" },
  { id: 4, service: "Wisdom Tooth Extraction", date: "Jan 5, 2026", time: "10:00 AM", status: "Completed" },
];
