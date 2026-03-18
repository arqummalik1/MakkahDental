# Style Guide (Light Mode)

## Design Principles

- Minimal layouts with strong hierarchy and generous whitespace.
- Neutral gray foundation with a single primary accent.
- Components follow an 8px spacing system for consistency.
- Motion uses transforms/opacity only and 200ms ease-out transitions.
- WCAG 2.1 AA focus indicators with visible rings.

## Layout & Grid

- Base unit: 8px
- Common section padding:
  - Mobile: 64px (`py-16`)
  - Desktop hero: 96px+ (`lg:py-24`)
- Containers:
  - Primary: `max-w-6xl`
  - Content: `max-w-3xl` / `max-w-2xl`

## Typography

- Body: 16px, line-height 1.6
- Heading scale: fluid via CSS variables (`--text-h1/h2/h3`)
- Recommended usage:
  - H1: `text-[length:var(--text-h1)]`
  - H2: `text-[length:var(--text-h2)]`
  - H3: `text-[length:var(--text-h3)]`

## Color

- Background: Gray 50
- Surfaces: White or translucent surface-2 for glass
- Text: Gray 900, muted Gray 600
- Primary: Teal (`#0A7B83`) as the single accent

## Surfaces & Effects

Utility classes (defined in `globals.css`):

- `mdc-surface`: premium surface with border + layered depth
- `mdc-glass`: glassmorphism surface (blur 16px + translucency)
- `mdc-neo`: subtle neumorphic dual-light depth
- `mdc-animate`: standard interaction transitions (200ms, ease-out)

## Interaction & Motion

- Hover states: `mdc-animate` + subtle translateY or shadow elevation
- Active states: scale `0.99` for tactile feedback
- Respect reduced-motion preferences (transitions/animations minimized)

## Iconography

- Library: Lucide (SVG), consistent 24px grid, 2px stroke
- Use the shared wrapper: [Icon.tsx](file:///Users/arqummalik/Software%20Development/vibe%20code/MakkaDental/src/components/atoms/Icon.tsx)

## Accessibility

- Visible focus rings (3px) on all interactive elements
- Labels connected with `htmlFor` + `id`
- All icons either `aria-hidden` or have an accessible `title`
