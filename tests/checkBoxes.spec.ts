import { test, expect } from "@playwright/test";

// TC1: ตรวจว่า checkbox ตัวแรกไม่ถูกติ๊ก
test("Checkbox 1 should not be checked initially", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/checkboxes");
  const checkbox1 = page.locator("form#checkboxes input").nth(0);
  await expect(checkbox1).not.toBeChecked();
});

// TC2: ตรวจว่า checkbox ตัวที่สองถูกติ๊กอยู่
test("Checkbox 2 should be checked initially", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/checkboxes");
  const checkbox2 = page.locator("form#checkboxes input").nth(1);
  await expect(checkbox2).toBeChecked();
});

// TC3: ติ๊ก checkbox ตัวแรกแล้วตรวจ
test("Check checkbox 1 and verify", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/checkboxes");
  const checkbox1 = page.locator("form#checkboxes input").nth(0);
  await checkbox1.check();
  await expect(checkbox1).toBeChecked();
});
