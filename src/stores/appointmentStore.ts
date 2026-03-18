"use client";

import { create } from "zustand";

export type AppointmentDraft = {
  fullName: string;
  phone: string;
  email?: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
};

type AppointmentState = {
  draft: AppointmentDraft | null;
  setDraft: (draft: AppointmentDraft) => void;
  clearDraft: () => void;
};

export const useAppointmentStore = create<AppointmentState>((set) => ({
  draft: null,
  setDraft: (draft) => set({ draft }),
  clearDraft: () => set({ draft: null }),
}));
