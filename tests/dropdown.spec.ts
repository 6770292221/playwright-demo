import { test, expect, Page } from "@playwright/test";

// ฟังก์ชันช่วยเปิดหน้า dropdown
const gotoDropdownPage = async (page: Page) => {
  await page.goto("https://the-internet.herokuapp.com/dropdown");
};

// ฟังก์ชันช่วยเลือก dropdown
const dropdown = (page: Page) => page.locator("#dropdown");

test("Dropdown default value should be empty", async ({ page }) => {
  await gotoDropdownPage(page);
  const selected = await dropdown(page).inputValue();
  expect(selected).toBe(""); // ตัวแรกไม่มี value
});

// TC2: เลือก Option 1
test("Select Option 1 from dropdown", async ({ page }) => {
  await gotoDropdownPage(page);
  await dropdown(page).selectOption("1");
  await expect(dropdown(page)).toHaveValue("1");
});

// TC3: เลือก Option 2
test("Select Option 2 from dropdown", async ({ page }) => {
  await gotoDropdownPage(page);
  await dropdown(page).selectOption("2");
  await expect(dropdown(page)).toHaveValue("2");
});
