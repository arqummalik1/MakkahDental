# Design Tokens

Source of truth:

- CSS variables: [globals.css](file:///Users/arqummalik/Software%20Development/vibe%20code/MakkaDental/src/app/globals.css)
- Typed export: [tokens.ts](file:///Users/arqummalik/Software%20Development/vibe%20code/MakkaDental/src/design/tokens.ts)
- JSON export (Figma Tokens compatible): [tokens.json](file:///Users/arqummalik/Software%20Development/vibe%20code/MakkaDental/src/design/tokens.json)

## Color Palette (Light Mode Only)

Neutral grays:

- `--gray-50` `#F8F9FA`
- `--gray-100` `#F1F3F5`
- `--gray-200` `#E9ECEF`
- `--gray-300` `#DEE2E6`
- `--gray-400` `#CED4DA`
- `--gray-500` `#ADB5BD`
- `--gray-600` `#6C757D`
- `--gray-700` `#495057`
- `--gray-800` `#343A40`
- `--gray-900` `#212529`

Semantic:

- Background: `--color-bg` (Gray 50)
- Surface: `--color-surface` (White)
- Foreground: `--color-fg` (Gray 900)
- Muted text: `--color-muted` (Gray 600)
- Border: `--color-border` (Gray 300)

Accent:

- Primary: `--color-primary` `#0A7B83`
- Primary foreground: `--color-primary-foreground` `#FFFFFF`

## Typography

Constraints:

- Body text is `16px` with `line-height: 1.6`.
- Headings use fluid sizes via `clamp()`:
  - `--text-h1`, `--text-h2`, `--text-h3`

Fonts:

- Sans: Inter
- Display: Poppins

## Spacing (8px Grid)

Baseline tokens:

- `--space-1` 8px
- `--space-2` 16px
- `--space-3` 24px
- `--space-4` 32px
- `--space-5` 48px
- `--space-6` 64px

Usage guideline:

- Page vertical rhythm: prefer 48/64px section padding.
- Component internal spacing: prefer 16/24/32px.

## Motion

- Transition timing: `--ease-out`
- Standard duration: `--duration-200` (interactive hover/focus)
- Glass blur: `--blur-glass` (16px)

## Shadows

- `--shadow-1`: subtle depth
- `--shadow-2`: elevated hover
- `--shadow-neo`: dual-source “soft” neumorphic depth
