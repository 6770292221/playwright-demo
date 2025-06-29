import { test, expect } from "@playwright/test";

test("Add 3 elements", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
  const addButton = page.locator("button", { hasText: "Add Element" });

  // กดปุ่ม Add 3 ครั้ง
  await addButton.click();
  await addButton.click();
  await addButton.click();

  // ตรวจสอบว่ามีปุ่ม Delete 3 ปุ่ม
  const deleteButtons = page.locator("button.added-manually");
  await expect(deleteButtons).toHaveCount(3);
});

test("Add 2 elements and delete 1", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
  const addButton = page.locator("button", { hasText: "Add Element" });

  // Add 2 ปุ่ม
  await addButton.click();
  await addButton.click();

  // Delete 1 ปุ่ม
  const deleteButtons = page.locator("button.added-manually");
  await deleteButtons.nth(0).click();

  // เหลือปุ่ม Delete 1 ปุ่ม
  await expect(deleteButtons).toHaveCount(1);
});
