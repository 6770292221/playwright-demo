import { test, expect } from "@playwright/test";

test("Dropdown default value should be empty", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dropdown");
  const dropdown = page.locator("#dropdown");
  const selected = await dropdown.inputValue();
  expect(selected).toBe(""); // dropdown เริ่มต้นไม่มีการเลือก
});

test("Select Option 1 from dropdown", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dropdown");
  const dropdown = page.locator("#dropdown");
  await dropdown.selectOption("1");
  await expect(dropdown).toHaveValue("1");
});

test("Select Option 2 from dropdown", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dropdown");
  const dropdown = page.locator("#dropdown");
  await dropdown.selectOption("2");
  await expect(dropdown).toHaveValue("2");
});
