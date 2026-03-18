import { cn } from "@/lib/cn";

export function Sparkline(props: {
  points: number[];
  className?: string;
  width?: number;
  height?: number;
  strokeWidth?: number;
}) {
  const width = props.width ?? 96;
  const height = props.height ?? 28;
  const strokeWidth = props.strokeWidth ?? 2;

  const values = props.points.length >= 2 ? props.points : [0, 0];
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = Math.max(1e-6, max - min);

  const d = values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * width;
      const y = height - ((v - min) / range) * height;
      return `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={cn("text-[var(--color-primary)]", props.className)}
      aria-hidden
      focusable="false"
    >
      <path d={d} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
