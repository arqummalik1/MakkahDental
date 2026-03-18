import { HttpError } from "./errors";
import { defaultRetryDecider, retryDelayMs, type RetryDecider } from "./retry";

export type HttpClientOptions = {
  baseUrl?: string;
  timeoutMs?: number;
  retryDecider?: RetryDecider;
  fetcher?: typeof fetch;
};

export type RequestOptions = {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  headers?: Record<string, string>;
  body?: unknown;
  signal?: AbortSignal;
  cache?: RequestCache;
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
};

export function createHttpClient(options: HttpClientOptions = {}) {
  const fetcher = options.fetcher ?? fetch;
  const baseUrl = options.baseUrl ?? "";
  const timeoutMs = options.timeoutMs ?? 10_000;
  const retryDecider = options.retryDecider ?? defaultRetryDecider;

  async function request<T>(path: string, req: RequestOptions = {}): Promise<T> {
    const url = path.startsWith("http") ? path : `${baseUrl}${path}`;
    const method = req.method ?? "GET";
    const headers: Record<string, string> = {
      Accept: "application/json",
      ...(req.body ? { "Content-Type": "application/json" } : {}),
      ...req.headers,
    };

    for (let attempt = 0; ; attempt += 1) {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), timeoutMs);
      const signal = mergeSignals(req.signal, controller.signal);

      try {
        const res = await fetcher(url, {
          method,
          headers,
          body: req.body ? JSON.stringify(req.body) : undefined,
          signal,
          cache: req.cache,
          next: req.next,
          credentials: "include",
        });

        if (!res.ok) {
          const details = await safeParseJson(res);
          const shouldRetry = retryDecider({
            attempt,
            status: res.status,
          });
          if (shouldRetry) {
            await sleep(retryDelayMs(attempt));
            continue;
          }
          throw new HttpError({
            kind: "HttpError",
            message: `Request failed (${res.status})`,
            status: res.status,
            url,
            details,
          });
        }

        const data = await safeParseJson(res);
        return data as T;
      } catch (error) {
        const kind =
          error instanceof DOMException && error.name === "AbortError"
            ? "AbortError"
            : error instanceof HttpError
              ? error.kind
              : "NetworkError";

        const shouldRetry = retryDecider({
          attempt,
          error,
        });
        if (shouldRetry) {
          await sleep(retryDelayMs(attempt));
          continue;
        }

        if (error instanceof HttpError) throw error;
        throw new HttpError({
          kind,
          message: kind === "AbortError" ? "Request aborted" : "Network error",
          url,
          cause: error,
        });
      } finally {
        clearTimeout(timeout);
      }
    }
  }

  return { request };
}

async function safeParseJson(res: Response) {
  const contentType = res.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return undefined;
  try {
    return await res.json();
  } catch (error) {
    throw new HttpError({
      kind: "ParseError",
      message: "Failed to parse JSON response",
      status: res.status,
      url: res.url,
      cause: error,
    });
  }
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function mergeSignals(a?: AbortSignal, b?: AbortSignal) {
  if (!a) return b;
  if (!b) return a;
  const controller = new AbortController();
  const onAbort = () => controller.abort();
  a.addEventListener("abort", onAbort, { once: true });
  b.addEventListener("abort", onAbort, { once: true });
  return controller.signal;
}
