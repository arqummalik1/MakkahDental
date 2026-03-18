import type { ClinicService } from "@/modules/services/types";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/atoms/Icon";
import { serviceIconMap } from "@/modules/services/icons";

export function ServiceCard(props: {
  service: ClinicService;
  compact?: boolean;
  className?: string;
}) {
  const compact = props.compact ?? false;
  const ServiceIcon = serviceIconMap[props.service.iconKey];
  return (
    <div
      className={cn(
        "mdc-animate mdc-surface rounded-[var(--radius-lg)] p-6 hover:-translate-y-0.5 hover:shadow-[var(--shadow-2)]",
        props.className,
      )}
    >
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-[var(--radius-md)] bg-[var(--gray-100)]">
          <Icon icon={ServiceIcon} className="text-[var(--color-primary)]" />
        </div>
        <div className="min-w-0">
          <div className="font-[var(--font-display)] text-base font-semibold text-[var(--color-fg)]">
            {props.service.name}
          </div>
          <p className={cn("mt-2 text-base text-[var(--color-muted)]", compact && "max-h-12 overflow-hidden")}>
            {props.service.description}
          </p>
        </div>
      </div>
    </div>
  );
}
