# Frontend Architecture (Production-Ready)

## Goals

- **Feature-first modularity**: UI + state + services grouped by domain to avoid cross-module coupling.
- **Service-oriented boundaries**: replace mock adapters with Supabase/payment/3rd-party adapters without touching UI.
- **Security by default**: JWT in httpOnly cookies, RBAC enforced at the edge via middleware.
- **Performance**: App Router + server components where possible, minimal client JS, image/font optimization.
- **Accessibility**: semantic HTML, visible focus, skip links, WCAG 2.1 AA baseline.

## High-level Structure

```
src/
  app/                    # Next.js routes (marketing/patient/admin + API)
  brand/                  # Brand constants
  components/             # Atomic-ish design system (atoms/molecules/organisms)
  config/                 # Env schema & runtime config
  core/                   # Cross-cutting primitives (http, auth types)
  modules/                # Domain models + mock data (services, appointments, patients)
  services/               # Client-side service adapters (auth, payments, future supabase)
  server/                 # Server-only auth helpers (JWT/cookies/session)
  stores/                 # Zustand stores (auth, appointment draft)
  test/                   # Test setup
```

## Routing

- Marketing: `/`, `/services`, `/about`, `/contact`, `/book-appointment`, `/appointment-confirmed`
- Patient: `/patient/login`, `/patient/dashboard`
- Admin: `/admin/login`, `/admin/dashboard`, `/admin/appointments`, `/admin/patients`, `/admin/patients/:id`

Route groups organize code without changing URLs:

- `src/app/(marketing)/*`
- `src/app/(patient)/patient/(auth|app)/*`
- `src/app/(admin)/admin/(auth|app)/*`

## Auth & RBAC

- Login issues a **JWT access token** signed by `AUTH_JWT_SECRET`.
- Token stored in **httpOnly cookie** `mdc_access_token`.
- `middleware.ts` verifies JWT and enforces:
  - `/patient/*` requires role `patient`
  - `/admin/*` requires role `admin`

Server-side access:

- `getServerSession()` returns `{ user, expiresAt }` from cookie JWT.

Client-side access:

- `useAuthStore` hydrates via `/api/auth/me` and exposes `login/logout`.

## Service Layer

- `core/http` provides a typed `createHttpClient()` with:
  - consistent JSON handling
  - structured `HttpError`
  - retry with exponential backoff for network errors / 5xx
- `services/*` implement adapters (currently mock/demo).

To migrate to Supabase later:

- Keep UI dependent on **interfaces** + thin adapters.
- Add `services/supabase/*` that implements the same interfaces using Supabase SDK.

## Testing

- Unit/Integration: Vitest + Testing Library
- E2E: Playwright
- CI: GitHub Actions workflow runs lint, typecheck, unit tests, build, and E2E.
