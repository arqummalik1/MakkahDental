import * as React from "react";
import { cn } from "@/lib/cn";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "mdc-animate h-12 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 text-base text-[var(--color-fg)] shadow-[var(--shadow-inset)]",
          "placeholder:text-[var(--color-muted)]",
          "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--focus-ring)] focus-visible:border-[var(--color-primary)]",
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
