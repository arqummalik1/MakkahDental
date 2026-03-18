# ADR 0001: Next.js App Router + Service-Oriented Frontend

## Context

The product starts as a demo but must evolve into a production system with:

- Supabase integration (auth, DB, storage)
- Payment gateway integrations (Stripe/PayPal/Square)
- Third‑party API integrations (analytics, CRM, WhatsApp, etc.)
- Enterprise-grade performance, accessibility, testing, and CI/CD

## Decision

- Use **Next.js App Router** for:
  - server components (lower client JS)
  - first-class routing and metadata
  - Route Handlers to support a BFF layer for JWT issuance and later Supabase integration
- Use a **service-oriented modular structure**:
  - UI depends on interfaces/adapters, not raw SDKs
  - mock adapters can be swapped with Supabase/payment adapters with minimal refactoring
- Use **Zustand** for state:
  - minimal boilerplate
  - focused client-side state (auth hydration, draft forms, UI filters)

## Consequences

- JWT issuance/verification is centralized, and RBAC is enforced in middleware.
- Domain data is currently mocked, but service boundaries are already in place.
- Performance and DX are improved through server components and typed service layers.
