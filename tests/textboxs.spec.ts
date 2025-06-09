import { test, expect, Page } from "@playwright/test";

const gotoInputPage = async (page: Page) => {
  await page.goto("https://the-internet.herokuapp.com/inputs");
};
// ฟังก์ชันช่วยหา input
const numberInput = (page) => page.locator("input[type='number']");

// TC1: พิมพ์เลข 123 แล้วตรวจ
test("Input accepts number 123", async ({ page }) => {
  await gotoInputPage(page);
  await numberInput(page).fill("123");
  await expect(numberInput(page)).toHaveValue("123");
});

// TC2: ลบค่า แล้วพิมพ์ -99
test("Input accepts negative number -99", async ({ page }) => {
  await gotoInputPage(page);
  await numberInput(page).fill("-99");
  await expect(numberInput(page)).toHaveValue("-99");
});

// TC3: กด ArrowUp แล้วตรวจว่าเลขเพิ่ม
test("ArrowUp increases the number", async ({ page }) => {
  await gotoInputPage(page);
  await numberInput(page).fill("10");
  await numberInput(page).press("ArrowUp");
  await expect(numberInput(page)).toHaveValue("11");
});

// TC4: กด ArrowDown แล้วตรวจว่าเลขลด
test("ArrowDown decreases the number", async ({ page }) => {
  await gotoInputPage(page);
  await numberInput(page).fill("10");
  await numberInput(page).press("ArrowDown");
  await expect(numberInput(page)).toHaveValue("9");
});
