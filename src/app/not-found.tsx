import Link from "next/link";
import { Button } from "@/components/atoms/Button";

export default function NotFound() {
  return (
    <div className="grid min-h-dvh place-items-center bg-[var(--color-bg)] px-4">
      <div className="mdc-neo w-full max-w-md rounded-[var(--radius-lg)] p-8 text-center">
        <div className="text-base text-[var(--color-muted)]">404</div>
        <h1 className="mt-4 font-[var(--font-display)] text-[length:var(--text-h2)] font-semibold tracking-tight text-[var(--color-fg)]">
          Page not found
        </h1>
        <p className="mt-4 text-base text-[var(--color-muted)]">
          The page you’re looking for doesn’t exist in this demo.
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="/">
            <Button size="lg">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
