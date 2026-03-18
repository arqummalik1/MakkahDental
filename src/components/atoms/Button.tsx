import * as React from "react";
import { cn } from "@/lib/cn";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", type, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type ?? "button"}
        className={cn(
          "mdc-animate inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] font-medium",
          "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--focus-ring)]",
          "disabled:pointer-events-none disabled:opacity-50",
          size === "sm" && "h-10 px-4 text-base",
          size === "md" && "h-12 px-6 text-base",
          size === "lg" && "h-14 px-8 text-base",
          variant === "primary" &&
            "bg-[linear-gradient(135deg,var(--color-primary),var(--color-primary-2))] text-[var(--color-primary-foreground)] shadow-[var(--shadow-1)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-2)] active:translate-y-0 active:scale-[0.99]",
          variant === "secondary" &&
            "bg-[var(--color-surface)] text-[var(--color-fg)] shadow-[var(--shadow-1)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-2)] active:translate-y-0 active:scale-[0.99]",
          variant === "outline" &&
            "border border-[var(--color-border)] bg-transparent text-[var(--color-fg)] hover:bg-[var(--color-surface-2)] active:scale-[0.99]",
          variant === "ghost" &&
            "bg-transparent text-[var(--color-fg)] hover:bg-[var(--color-surface-2)] active:scale-[0.99]",
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
