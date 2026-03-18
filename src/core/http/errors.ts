export type HttpErrorKind =
  | "NetworkError"
  | "TimeoutError"
  | "AbortError"
  | "HttpError"
  | "ParseError";

export class HttpError extends Error {
  readonly kind: HttpErrorKind;
  readonly status?: number;
  readonly url?: string;
  readonly details?: unknown;

  constructor(args: {
    kind: HttpErrorKind;
    message: string;
    status?: number;
    url?: string;
    details?: unknown;
    cause?: unknown;
  }) {
    super(args.message, args.cause ? { cause: args.cause } : undefined);
    this.name = "HttpError";
    this.kind = args.kind;
    this.status = args.status;
    this.url = args.url;
    this.details = args.details;
  }
}
