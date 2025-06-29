import { test, expect } from "@playwright/test";

test("Login, verify title, add to cart using multiple locator styles", async ({
  page,
}) => {
  // เปิดหน้าเว็บ
  await page.goto("https://www.saucedemo.com/");

  // ใช้ getByPlaceholder() เพื่อกรอก Username
  await page.getByPlaceholder("Username").fill("standard_user");

  // ใช้ locator() แบบ CSS เพื่อกรอก Password
  await page
    .locator('.form_input[placeholder="Password"]')
    .fill("secret_sauce");

  // ใช้ getByRole() เพื่อกดปุ่ม Login
  await page.getByRole("button", { name: "Login" }).click();

  // ตรวจสอบข้อความ Swag Labs ด้วย getByText()
  await expect(page.getByText("Swag Labs")).toBeVisible();

  // ตรวจสอบชื่อหน้าว่าเป็น "Products" ด้วย CSS + toHaveText()
  await expect(page.locator(".title")).toHaveText("Products");

  // เพิ่มสินค้าลงตะกร้าโดยใช้ attribute starts with (CSS selector)
  await page.locator('button[data-test^="add-to-cart"]').first().click();

  // ใช้ XPath เพื่อคลิก icon ตะกร้า
  await page.locator('xpath=//a[@class="shopping_cart_link"]').click();

  // ตรวจสอบว่ามีสินค้าในตะกร้าอย่างน้อย 1 ชิ้น
  await expect(page.locator(".cart_item")).toHaveCount(1);
});
