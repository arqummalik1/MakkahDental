import { cn } from "@/lib/cn";

export function Badge(props: {
  children: React.ReactNode;
  tone?: "neutral" | "success" | "warning" | "danger";
  className?: string;
}) {
  const tone = props.tone ?? "neutral";
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium",
        tone === "neutral" &&
          "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-fg)]",
        tone === "success" &&
          "border-emerald-200 bg-emerald-50 text-emerald-800",
        tone === "warning" && "border-amber-200 bg-amber-50 text-amber-900",
        tone === "danger" && "border-rose-200 bg-rose-50 text-rose-800",
        props.className,
      )}
    >
      {props.children}
    </span>
  );
}
