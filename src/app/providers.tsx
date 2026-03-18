"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/stores/authStore";
import { ServiceWorkerRegister } from "./sw-register";

export function Providers({ children }: { children: React.ReactNode }) {
  const hydrate = useAuthStore((s) => s.hydrate);

  useEffect(() => {
    hydrate();
  }, []);

  return (
    <>
      {children}
      <ServiceWorkerRegister />
    </>
  );
}
