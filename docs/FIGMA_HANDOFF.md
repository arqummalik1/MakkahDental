# Figma Handoff Plan

This repository includes design tokens and a Storybook component library to enable a fast, accurate Figma build. I cannot generate a native `.fig` file directly from this environment, but the artifacts below are structured to make the Figma implementation deterministic and audit-ready.

## Included Deliverables (Repo)

- Design tokens JSON: [tokens.json](file:///Users/arqummalik/Software%20Development/vibe%20code/MakkaDental/src/design/tokens.json)
- Style guide: [STYLE_GUIDE.md](file:///Users/arqummalik/Software%20Development/vibe%20code/MakkaDental/docs/STYLE_GUIDE.md)
- Token guide: [DESIGN_TOKENS.md](file:///Users/arqummalik/Software%20Development/vibe%20code/MakkaDental/docs/DESIGN_TOKENS.md)
- Storybook (component library): `npm run storybook`

## How to Build the Figma File (Recommended)

### 1) Create the file structure

- Pages:
  - `00 — Foundations`
  - `01 — Components`
  - `02 — Templates`
  - `03 — Flows / Prototypes`
  - `99 — Archive`

### 2) Import tokens

- Install the “Tokens Studio for Figma” plugin.
- Import JSON from `src/design/tokens.json`.
- Map token groups:
  - `color.*` → Color Styles
  - `typography.*` → Text Styles
  - `space.*` → Spacing tokens
  - `radius.*`, `shadow.*`, `motion.*` → Effect tokens

### 3) Build foundations (auto-layout first)

- Create text styles for:
  - Body (16px / 1.6)
  - H1/H2/H3 (clamp equivalents represented as desktop/mobile sizes)
- Create effects:
  - Surface shadow (`shadow-1`), Hover shadow (`shadow-2`), Neo shadow (`shadow-neo`)
  - Glass blur effect (16px)

### 4) Components (match Storybook)

Build components using Auto Layout and variants:

- Atoms: Button (primary/secondary/outline/ghost), Input, Textarea, Badge, Icon
- Molecules: Card (Header/Body patterns)
- Organisms: Navbar, Footer, ServiceCard, TestimonialCard

Component states:

- Default / Hover / Active / Focus / Disabled

### 5) Templates + Prototypes

Templates to build:

- Marketing pages: Home, Services, About, Contact, Book Appointment, Confirmation
- Patient portal: Login, Dashboard
- Admin portal: Login, Dashboard, Appointments, Patients, Patient Profile

Prototype flows:

- Home → Book Appointment → Confirmation
- Patient Login → Dashboard
- Admin Login → Dashboard → Patients → Profile

## Verification Checklist (Pixel + UX)

- Spacing uses 8px increments throughout.
- Body text is never below 16px.
- Contrast meets WCAG AA (4.5:1 normal text, 3:1 large text).
- Focus style visible for all interactive controls.
- Icon grid is 24px with 2px stroke.
- Motion spec: 200ms ease-out, transforms/opacity only.
