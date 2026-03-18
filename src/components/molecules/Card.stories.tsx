import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/atoms/Button";
import { Card, CardBody, CardHeader } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Molecules/Card",
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="max-w-xl">
      <CardHeader
        title="Appointment Details"
        description="A premium surface with depth and a clean 8px grid."
        actions={<Button size="sm">Action</Button>}
      />
      <CardBody>
        <div className="grid gap-4">
          <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--gray-50)] px-4 py-4">
            <div className="text-base font-medium text-[var(--color-fg)]">Root Canal Consultation</div>
            <div className="mt-2 text-base text-[var(--color-muted)]">Mon–Sat · 10:00 AM – 8:00 PM</div>
          </div>
        </div>
      </CardBody>
    </Card>
  ),
};
