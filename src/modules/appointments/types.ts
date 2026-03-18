export type AppointmentStatus =
  | "Pending"
  | "Confirmed"
  | "Completed"
  | "Cancelled";

export type Appointment = {
  id: number;
  patient: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  status: AppointmentStatus;
};

export type PatientAppointment = {
  id: number;
  service: string;
  date: string;
  time: string;
  status: AppointmentStatus;
};
