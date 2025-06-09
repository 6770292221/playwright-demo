import { test, expect, Page } from "@playwright/test";

// helper function: ไปยังหน้า checkbox
const gotoCheckboxPage = async (page: Page) => {
  await page.goto("https://the-internet.herokuapp.com/checkboxes");
};

// helper function: ดึง checkbox ตามลำดับ
const getCheckbox = (page: Page, index: number) => {
  return page.locator("form#checkboxes input").nth(index);
};

// TC1: ตรวจว่า checkbox ตัวแรกไม่ถูกติ๊ก
test("Checkbox 1 should not be checked initially", async ({ page }) => {
  await gotoCheckboxPage(page);
  const checkbox1 = getCheckbox(page, 0);
  await expect(checkbox1).not.toBeChecked();
});

// TC2: ตรวจว่า checkbox ตัวที่สองถูกติ๊กอยู่
test("Checkbox 2 should be checked initially", async ({ page }) => {
  await gotoCheckboxPage(page);
  const checkbox2 = getCheckbox(page, 1);
  await expect(checkbox2).toBeChecked();
});

// TC3: ติ๊ก checkbox ตัวแรกแล้วตรวจ
test("Check checkbox 1 and verify", async ({ page }) => {
  await gotoCheckboxPage(page);
  const checkbox1 = getCheckbox(page, 0);
  await checkbox1.check();
  await expect(checkbox1).toBeChecked();
});
