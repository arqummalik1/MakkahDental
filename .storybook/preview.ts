import type { Preview } from "@storybook/react";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "App",
      values: [
        { name: "App", value: "#F8F9FA" },
        { name: "Surface", value: "#FFFFFF" },
      ],
    },
    a11y: {
      element: "#storybook-root",
      manual: false,
    },
    controls: { expanded: true },
  },
};

export default preview;
