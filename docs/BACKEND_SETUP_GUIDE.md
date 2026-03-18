# Backend Integration & Production Setup Guide

This application is a Next.js App Router project where “backend” functionality is implemented using:

- **Next.js Route Handlers** in `src/app/api/*` (server-side API endpoints)
- A **service boundary** in `src/services/*` and `src/core/http/*` (typed client + adapters)
- **JWT auth in httpOnly cookies** enforced by `middleware.ts` for RBAC

The recommended production backend is **Supabase (Postgres + Auth + Storage)**, while keeping the app’s RBAC fast by continuing to mint an **app JWT** for edge checks.

## 1) Prerequisites

- Node.js (LTS recommended)
- A Postgres provider (Supabase recommended)
- If using Supabase locally:
  - Docker
  - Supabase CLI

## 2) Repository Architecture (Where Backend Lives)

- API routes (backend endpoints): `src/app/api/**/route.ts`
- Server-only auth helpers (JWT/cookies/session): `src/server/auth/*`
- RBAC enforcement at the edge: `middleware.ts`
- Typed HTTP client used by the UI: `src/core/http/*`
- Frontend adapters calling the API: `src/services/*`

Reference:
- [ARCHITECTURE.md](file:///Users/arqummalik/Software%20Development/vibe%20code/MakkaDental/docs/ARCHITECTURE.md)
- [MIGRATION_SUPABASE.md](file:///Users/arqummalik/Software%20Development/vibe%20code/MakkaDental/docs/MIGRATION_SUPABASE.md)

## 3) Environments & Configuration

### 3.1 Environment files

Use separate env files per environment:

- Development: `.env.local`
- Staging: set in your hosting provider as “Preview/Staging” variables
- Production: set in your hosting provider as “Production” variables

### 3.2 Current env schema

Env validation is defined in:

- `src/config/env.ts`

Key variables:

- `AUTH_JWT_SECRET` (server): secret to sign/verify the app JWT
- `NEXT_PUBLIC_SITE_ORIGIN` (client): canonical origin, used for absolute URLs when needed
- `NEXT_PUBLIC_SUPABASE_URL` (client): Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` (client): public anon key for client-side SDK usage (optional if you keep all Supabase access server-side)

Important:

- `AUTH_JWT_SECRET` must be **32+ chars**, unique per env, and rotated using a planned procedure.
- Never commit `.env.*` files.

## 4) Database Infrastructure (Supabase Recommended)

### 4.1 Create projects (staging + production)

Create two Supabase projects:

- **Staging**: used for QA and preview deployments
- **Production**: used for live traffic

Keep separate credentials and separate JWT secrets per environment.

### 4.2 Local development database (optional but recommended)

Use Supabase local dev for deterministic schemas:

1. Install Supabase CLI
2. Initialize:
   - `supabase init`
3. Start local services:
   - `supabase start`

### 4.3 Suggested schema (minimum viable)

Create tables to support roles, appointments, and patients.

Example SQL (illustrative):

```sql
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role text not null check (role in ('admin', 'patient')),
  name text not null,
  phone text,
  created_at timestamptz not null default now()
);

create table if not exists public.appointments (
  id bigserial primary key,
  patient_id uuid not null references public.profiles(id),
  service text not null,
  scheduled_at timestamptz not null,
  status text not null check (status in ('Pending', 'Confirmed', 'Cancelled', 'Completed')),
  notes text,
  created_at timestamptz not null default now()
);

create index if not exists appointments_patient_id_idx on public.appointments(patient_id);
create index if not exists appointments_scheduled_at_idx on public.appointments(scheduled_at);
```

### 4.4 Row Level Security (RLS)

Enable RLS and add policies. For example:

- Patients can read their own profile/appointments
- Admins can read everything

In Supabase, you can implement admin access via:

- a “role” claim in JWT (advanced), or
- server-side queries using the **service role key** (recommended for admin operations only), or
- a restricted RPC that checks the role from `profiles`

Production recommendation:

- Keep **service role key server-only** (never expose to the browser).
- Use app JWT (cookie) for RBAC routing and server authorization.

## 5) Authentication & Security (Production-Grade)

### 5.1 Current auth model

Currently the app provides:

- `POST /api/auth/login`: validates credentials and sets `mdc_access_token` httpOnly cookie
- `GET /api/auth/me`: returns the authenticated user
- `POST /api/auth/logout`: clears the cookie
- `middleware.ts`: verifies JWT and enforces `/admin/*` and `/patient/*` RBAC

### 5.2 Recommended production auth flow (Supabase + App JWT)

1. User submits login form to your backend (`/api/auth/login`).
2. Backend verifies credentials with Supabase Auth.
3. Backend loads role from `public.profiles`.
4. Backend mints a short-lived **app JWT** with `{ role, email, name }`.
5. Backend stores app JWT in `httpOnly` cookie `mdc_access_token`.
6. Middleware uses the app JWT for fast RBAC checks.

Benefits:

- Minimal client exposure of secrets
- Fast route protection at the edge
- Supabase remains the identity provider and DB

### 5.3 CSRF

Because auth is cookie-based, apply CSRF controls for state-changing endpoints:

- Keep `SameSite=Lax` cookies
- Use POST with `Origin`/`Referer` validation for sensitive endpoints
- Consider a CSRF token if you add cross-site embedding or complex flows

### 5.4 Rate limiting

Rate limit auth endpoints:

- `/api/auth/login`
- `/api/auth/logout`
- any “write” endpoint

Implementation options depend on deployment platform (edge middleware, hosting provider features, or a managed rate limiting service).

## 6) API Endpoint Implementation Pattern

### 6.1 Where to implement endpoints

Add Route Handlers under:

`src/app/api/<resource>/route.ts`

Keep these characteristics:

- Validate inputs with `zod`
- Use `getServerSession()` (or JWT verification) for auth
- Return consistent JSON errors
- Never leak secrets in error messages

### 6.2 Example: appointments endpoints (recommended shape)

- `GET /api/appointments?status=&from=&to=` list appointments
- `POST /api/appointments` create an appointment request
- `PATCH /api/appointments/:id` update status (admin-only)

Authorization rules:

- Patient: can only read/update their own
- Admin: can read/update all

### 6.3 Error handling conventions

Standardize errors:

- `400` invalid input
- `401` unauthenticated
- `403` unauthorized
- `404` not found
- `429` rate-limited
- `500` unexpected

Use the existing typed HTTP layer on the client:

- `src/core/http/errors.ts` (`HttpError`)
- `src/core/http/client.ts`

## 7) CORS Setup

### 7.1 Same-origin (recommended)

If your API is served by the same Next.js app (`/api/*`) on the same origin as the UI, you typically **do not need CORS**.

### 7.2 Separate backend origin

If you deploy a separate backend (e.g., `api.example.com`) and the frontend is `app.example.com`:

- Allow only your trusted origins (dev/staging/prod)
- Allow credentials if using cookies
- Set:
  - `Access-Control-Allow-Origin: https://app.example.com` (not `*` when credentials are used)
  - `Access-Control-Allow-Credentials: true`
  - `Vary: Origin`

Also ensure cookies are configured correctly for cross-subdomain use (`Domain=.example.com`, `SameSite=None`, `Secure=true`) if required.

## 8) Logging, Observability, and Monitoring

### 8.1 Logging

Production logging guidance:

- Log structured JSON (request id, route, status, latency)
- Avoid logging PII and never log secrets or tokens
- Log authentication failures with minimal detail

### 8.2 Monitoring

At minimum:

- Uptime checks on:
  - `/api/auth/me`
  - key business endpoints (appointments)
- Error tracking for server and client
- Database monitoring:
  - slow queries
  - connection saturation
  - RLS policy errors

Platform options vary; integrate with your hosting provider + Supabase dashboard as a baseline.

## 9) Database Migrations

### 9.1 Supabase migrations

Recommended approach:

- Store migration SQL files in your repo (Supabase CLI supports this)
- Apply migrations to:
  - local (dev)
  - staging (CI or manual promotion)
  - production (controlled rollout)

Deployment-safe migration rules:

- Additive changes first (new columns/tables)
- Backfill data
- Deploy app changes
- Remove old columns later

### 9.2 Indexes and performance

- Add indexes on filter columns (status, scheduled_at, patient_id)
- Use `EXPLAIN ANALYZE` for slow queries
- Prefer paginated listing endpoints

## 10) Deployment Procedures (Dev / Staging / Prod)

### 10.1 Development

- Run Next.js locally: `npm run dev`
- Use mock/demo backend by default
- Optionally run Supabase locally for schema work

### 10.2 Staging

- Separate Supabase project
- Separate `AUTH_JWT_SECRET`
- Enable tighter logging + error tracking
- Run full CI:
  - lint/typecheck/unit/build/e2e

### 10.3 Production

Checklist:

- Set production env vars in hosting provider
- Enforce HTTPS
- Set cookies as `Secure`
- Enable monitoring and alerting
- Run DB migrations before deploying the app if required
- Validate RBAC paths:
  - `/admin/*` admin-only
  - `/patient/*` patient-only

## 11) Testing Protocols for Backend Integration

### 11.1 Unit tests

- Service adapters (mock vs supabase adapters)
- Validation logic (zod schemas)

Command:

- `npm run test`

### 11.2 Integration tests

- Route Handlers using MSW or direct invocation
- Auth cookie issuance + session verification

### 11.3 End-to-end tests

Command:

- `npm run test:e2e`

Recommended E2E coverage for backend integration:

- login (patient/admin) sets cookie and redirects
- protected pages blocked without auth
- admin can update appointment status

## 12) Security Best Practices (Production)

- Keep secrets server-only; never expose service role keys to the client.
- Rotate `AUTH_JWT_SECRET` using a planned procedure.
- Restrict CORS origins; never use `*` with credentials.
- Validate inputs with zod on every write endpoint.
- Implement rate limiting on auth + write routes.
- Use least-privilege DB roles and RLS policies.
- Review cookies:
  - `httpOnly: true`
  - `secure: true` in production
  - `sameSite: lax` unless cross-site is required

## 13) Troubleshooting (Common Issues)

### Login works locally but fails in production

- Ensure `AUTH_JWT_SECRET` is set in production.
- Ensure cookies are `Secure` behind HTTPS.
- Confirm your deployment is not stripping `Set-Cookie` headers.

### “Unauthenticated” from `/api/auth/me`

- Check if cookie is present in browser devtools.
- Check `sameSite` and `domain` mismatches.
- If using a separate API domain, ensure CORS + credential cookies are configured.

### RBAC redirect loops

- Verify token audience/issuer and expiry.
- Ensure middleware config matches routes.
- Confirm role claims match `admin`/`patient`.

### Supabase “permission denied” errors

- RLS policies missing or too strict
- Using anon key server-side for admin operations (use service role server-only)

## 14) Next Steps (Implementation Roadmap)

- Implement Supabase adapters under `src/services/*/supabase.ts`
- Update Route Handlers to use Supabase for persistence
- Add schema migrations + RLS policies
- Add admin CRUD endpoints for appointments/patients
