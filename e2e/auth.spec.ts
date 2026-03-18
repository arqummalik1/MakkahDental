import { test, expect } from "@playwright/test";

test("patient login redirects to dashboard", async ({ page }) => {
  await page.goto("/patient/login");
  await page.getByLabel("Email").fill("patient@demo.com");
  await page.getByLabel("Password").fill("patient123");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page).toHaveURL(/\/patient\/dashboard/);
  await expect(page.getByRole("heading", { name: "My Upcoming Appointments" })).toBeVisible();
});

test("admin login redirects to dashboard", async ({ page }) => {
  await page.goto("/admin/login");
  await page.getByLabel("Email").fill("admin@makkahdentalcare.com");
  await page.getByLabel("Password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page).toHaveURL(/\/admin\/dashboard/);
  await expect(page.getByRole("heading", { name: "Today's Schedule" })).toBeVisible();
});
