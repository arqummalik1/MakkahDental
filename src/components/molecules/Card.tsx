import { cn } from "@/lib/cn";

export function Card(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mdc-surface rounded-[var(--radius-lg)]",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}

export function CardHeader(props: {
  title: string;
  description?: string;
  actions?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-start justify-between gap-4 p-6", props.className)}>
      <div className="min-w-0">
        <h2 className="font-[var(--font-display)] text-[length:var(--text-h3)] font-semibold tracking-tight text-[var(--color-fg)]">
          {props.title}
        </h2>
        {props.description ? (
          <p className="mt-2 text-base text-[var(--color-muted)]">
            {props.description}
          </p>
        ) : null}
      </div>
      {props.actions ? <div className="shrink-0">{props.actions}</div> : null}
    </div>
  );
}

export function CardBody(props: { children: React.ReactNode; className?: string }) {
  return <div className={cn("px-6 pb-6", props.className)}>{props.children}</div>;
}
