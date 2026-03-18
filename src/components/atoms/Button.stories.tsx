import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRight } from "lucide-react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  args: {
    children: "Button",
    size: "md",
    variant: "primary",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Outline: Story = {
  args: { variant: "outline" },
};

export const Secondary: Story = {
  args: { variant: "secondary" },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        Book Appointment <ArrowRight aria-hidden />
      </>
    ),
  },
};

export const Disabled: Story = {
  args: { disabled: true },
};
