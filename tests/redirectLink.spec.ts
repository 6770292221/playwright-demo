import { test, expect } from "@playwright/test";

test("Redirect from /redirector to /status_codes", async ({ page }) => {
  // เริ่มที่หน้า redirector
  await page.goto("https://the-internet.herokuapp.com/redirector");

  // คลิกลิงก์ที่มีข้อความว่า "here"
  await page.click('a[href="redirect"]');

  // รอ redirect และตรวจว่าไปยัง /status_codes
  await expect(page).toHaveURL(
    "https://the-internet.herokuapp.com/status_codes"
  );

  // ตรวจข้อความบนหน้าสุดท้ายว่ามีคำว่า "Status Codes"
  await expect(page.locator("h3")).toHaveText("Status Codes");
});
