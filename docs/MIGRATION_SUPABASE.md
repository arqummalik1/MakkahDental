# Migration: Mock → Supabase (No Major Refactor)

## Principle

UI should call **service adapters** (e.g. `services/auth/*`, `services/payments/*`), not SDKs directly.
Swap the adapter implementation, keep the UI unchanged.

## Auth

Current:

- `/api/auth/login` validates demo users and issues JWT cookie
- `/api/auth/me` validates cookie and returns user
- `middleware.ts` enforces RBAC based on JWT payload

Migration options:

1. Keep JWT cookie and use Supabase on the server to validate credentials and fetch profile data.
2. Use Supabase Auth sessions and map session → app roles via claims/DB.

Suggested implementation:

- Replace `demoUsers` lookup with Supabase Auth sign-in on the server.
- Populate `role` from a `profiles` table (or Supabase custom claims).
- Continue storing a short-lived **app JWT** cookie for middleware RBAC (fast edge checks).

## Data (Appointments / Patients / Services)

Current:

- UI reads from `modules/*/*.mock.ts`.

Migration:

- Create `services/appointments/supabase.ts` that implements the same data methods.
- Replace imports of mock arrays inside pages with service calls (prefer server components):
  - `await appointmentsService.list({ ...filters })`

## Payments

Current:

- `MockPaymentsService` returns a demo checkout URL.

Migration:

- Implement `PaymentsService` adapters:
  - `StripePaymentsService`
  - `PaypalPaymentsService`
  - `SquarePaymentsService`
- Expose them via a server Route Handler (`/api/payments/checkout`) to protect secrets.
