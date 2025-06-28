import { test, expect } from "@playwright/test";

// TC1: พิมพ์เลข 123 แล้วตรวจ
test("Input accepts number 123", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/inputs");
  const input = page.locator("input[type='number']");
  await input.fill("123");
  await expect(input).toHaveValue("123");
});

// TC2: ลบค่า แล้วพิมพ์ -99
test("Input accepts negative number -99", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/inputs");
  const input = page.locator("input[type='number']");
  await input.fill("-99");
  await expect(input).toHaveValue("-99");
});

// TC3: กด ArrowUp แล้วตรวจว่าเลขเพิ่ม
test("ArrowUp increases the number", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/inputs");
  const input = page.locator("input[type='number']");
  await input.fill("10");
  await input.press("ArrowUp");
  await expect(input).toHaveValue("11");
});

// TC4: กด ArrowDown แล้วตรวจว่าเลขลด
test("ArrowDown decreases the number", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/inputs");
  const input = page.locator("input[type='number']");
  await input.fill("10");
  await input.press("ArrowDown");
  await expect(input).toHaveValue("9");
});
