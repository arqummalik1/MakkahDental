# Quality & Error Resolution Process

## Error Handling Policy

- **Fail fast** at boundaries (API routes, service adapters).
- **Typed errors** (`HttpError`) for predictable UI behavior.
- **Global error boundary** in App Router: [error.tsx](file:///Users/arqummalik/Software%20Development/vibe%20code/MakkaDental/src/app/error.tsx).

## Error Tracking System

Use GitHub Issues with:

- Bug template: `.github/ISSUE_TEMPLATE/bug_report.yml`
- Labels: `bug`, `enhancement`, and severity labels `P0–P3`
- Workflow:
  - **Triage**: confirm repro, assign severity, add owner, add milestone
  - **Fix**: implement + tests
  - **Verify**: run the full validation checklist
  - **Close**: link PR, summarize fix, note any follow-ups

## Testing Protocols

### Unit tests

- Focus: isolated UI components and utilities.
- Runner: Vitest
- Command: `npm run test`

### Integration tests

- Focus: feature flows at the component boundary (form validation, client stores, service adapters).
- Tooling: Testing Library + Vitest.

### End-to-end tests

- Focus: user journeys in a real browser (home renders, login → dashboard, booking flow).
- Tooling: Playwright
- Command: `npm run test:e2e`

## Static Analysis & Code Quality

- Lint: `npm run lint` (Next.js Core Web Vitals + a11y rules)
- Typecheck: `npm run typecheck`
- Design system verification: `npm run build-storybook`
- CI: GitHub Actions workflow runs lint/typecheck/unit/build/E2E on PRs.
- Peer review: PR template + CODEOWNERS (adjust owners to your org/team).

## Release Validation Checklist

1. `npm run lint`
2. `npm run typecheck`
3. `npm run test`
4. `npm run build`
5. `npm run test:e2e`
6. `npm run build-storybook`
7. Manual smoke (keyboard-only):
   - Marketing pages navigation
   - Book appointment submit → confirmation
   - Patient login → dashboard
   - Admin login → dashboard → appointments filters → patient profile notes edit
