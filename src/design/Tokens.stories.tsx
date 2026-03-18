import type { Meta, StoryObj } from "@storybook/react";
import { tokens } from "./tokens";

const meta: Meta = {
  title: "Design/Tokens",
};

export default meta;

type Story = StoryObj;

export const Palette: Story = {
  render: () => (
    <div className="grid gap-6">
      <div>
        <div className="font-[var(--font-display)] text-[length:var(--text-h3)] font-semibold text-[var(--color-fg)]">
          Neutral Grays
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-5">
          {Object.entries(tokens.color.gray).map(([k, v]) => (
            <div key={k} className="mdc-surface rounded-[var(--radius-md)] p-4">
              <div className="h-12 w-full rounded-[var(--radius-sm)]" style={{ background: v }} />
              <div className="mt-3 text-base font-medium text-[var(--color-fg)]">{`Gray ${k}`}</div>
              <div className="mt-1 text-base text-[var(--color-muted)]">{v}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="font-[var(--font-display)] text-[length:var(--text-h3)] font-semibold text-[var(--color-fg)]">
          Primary Accent
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="mdc-surface rounded-[var(--radius-md)] p-4">
            <div className="h-12 w-full rounded-[var(--radius-sm)]" style={{ background: tokens.color.primary }} />
            <div className="mt-3 text-base font-medium text-[var(--color-fg)]">Primary</div>
            <div className="mt-1 text-base text-[var(--color-muted)]">{tokens.color.primary}</div>
          </div>
          <div className="mdc-surface rounded-[var(--radius-md)] p-4">
            <div
              className="grid h-12 w-full place-items-center rounded-[var(--radius-sm)]"
              style={{ background: tokens.color.primary, color: tokens.color.primaryForeground }}
            >
              <div className="text-base font-semibold">Primary Foreground</div>
            </div>
            <div className="mt-3 text-base font-medium text-[var(--color-fg)]">Primary Foreground</div>
            <div className="mt-1 text-base text-[var(--color-muted)]">{tokens.color.primaryForeground}</div>
          </div>
        </div>
      </div>
    </div>
  ),
};
