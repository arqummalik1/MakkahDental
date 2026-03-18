"use client";

import { useEffect } from "react";
import { Button } from "@/components/atoms/Button";

export default function GlobalError(props: { error: Error; reset: () => void }) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.error(props.error);
    }
  }, [props.error]);

  return (
    <div className="grid min-h-dvh place-items-center bg-[var(--color-bg)] px-4">
      <div className="mdc-neo w-full max-w-md rounded-[var(--radius-lg)] p-8 text-center">
        <div className="text-base text-[var(--color-muted)]">Something went wrong</div>
        <h1 className="mt-4 font-[var(--font-display)] text-[length:var(--text-h2)] font-semibold tracking-tight text-[var(--color-fg)]">
          We hit an unexpected error
        </h1>
        <p className="mt-4 text-base text-[var(--color-muted)]">
          Please try again. If this keeps happening, the demo may be misconfigured.
        </p>
        <div className="mt-8 flex justify-center">
          <Button onClick={props.reset} size="lg">
            Try again
          </Button>
        </div>
      </div>
    </div>
  );
}
