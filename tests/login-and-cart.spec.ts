import { test, expect } from "@playwright/test";

test("Login, verify title, add to cart using multiple locator styles", async ({
  page,
}) => {
  // ข้อ 1: เปิดหน้าเว็บ
  await page.goto("https://www.saucedemo.com/");

  // ข้อ 2: กรอก Username ด้วย getByPlaceholder()
  await page.getByPlaceholder("Username").fill("standard_user");

  // ข้อ 3: กรอก Password ด้วย locator(css) ที่ใช้ attribute
  await page
    .locator('.form_input[placeholder="Password"]')
    .fill("secret_sauce");

  // ข้อ 4: คลิกปุ่ม Login โดยใช้ getByRole()
  await page.getByRole("button", { name: "Login" }).click();

  // ข้อ 5: ตรวจสอบว่ามีข้อความ "Swag Labs" แสดงอยู่ด้วย getByText()
  await expect(page.getByText("Swag Labs")).toBeVisible();

  // ข้อ 6: ตรวจสอบชื่อหน้าว่าเป็น "Products" ด้วย .title + toHaveText()
  await expect(page.locator(".title")).toHaveText("Products");

  // ข้อ 7: กดปุ่ม "Add to cart" โดยใช้ CSS ที่ data-test เริ่มต้นด้วย "add-to-cart"
  await page.locator('button[data-test^="add-to-cart"]').first().click();

  // ข้อ 8: คลิกไอคอนตะกร้าโดยใช้ xpath
  await page.locator('xpath=//a[@class="shopping_cart_link"]').click();

  // ข้อ 9: ตรวจสอบว่ามีสินค้าในตะกร้าอย่างน้อย 1 ชิ้น ด้วย .cart_item
  await expect(page.locator(".cart_item")).toHaveCount(1);
});
