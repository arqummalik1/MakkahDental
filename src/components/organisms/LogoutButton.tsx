"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/atoms/Button";
import { useAuthStore } from "@/stores/authStore";

export function LogoutButton(props: { redirectTo: string }) {
  const router = useRouter();
  const logout = useAuthStore((s) => s.logout);

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={async () => {
        try {
          await logout();
        } finally {
          router.push(props.redirectTo);
          router.refresh();
        }
      }}
    >
      Logout
    </Button>
  );
}
