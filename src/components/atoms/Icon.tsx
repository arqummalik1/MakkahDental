import type { LucideIcon, LucideProps } from "lucide-react";
import { cn } from "@/lib/cn";

export type IconProps = Omit<LucideProps, "ref"> & {
  icon: LucideIcon;
  title?: string;
  size?: number;
};

export function Icon({
  icon: IconCmp,
  title,
  size = 24,
  className,
  strokeWidth,
  ...props
}: IconProps) {
  return (
    <IconCmp
      width={size}
      height={size}
      strokeWidth={strokeWidth ?? 2}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      className={cn("shrink-0", className)}
      {...props}
    />
  );
}
