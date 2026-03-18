export type RetryDecider = (args: {
  attempt: number;
  error?: unknown;
  status?: number;
}) => boolean;

export function defaultRetryDecider(args: {
  attempt: number;
  error?: unknown;
  status?: number;
}) {
  if (args.attempt >= 3) return false;
  if (args.status && args.status >= 500) return true;
  if (!args.status && args.error) return true;
  return false;
}

export function retryDelayMs(attempt: number) {
  const base = 250 * 2 ** Math.min(attempt, 6);
  const jitter = Math.floor(Math.random() * 100);
  return base + jitter;
}
