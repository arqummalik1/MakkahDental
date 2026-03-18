import { test, expect } from "@playwright/test";

test("home page renders hero heading", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", {
      name: "World-Class Dental Care in the Heart of Jammu",
    }),
  ).toBeVisible();
});
