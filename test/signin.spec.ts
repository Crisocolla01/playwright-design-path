import { test, expect } from "@playwright/test"

test("My fraagile locator test", async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");
    // await page.click('#navbarSupportedContent > ul > li:nth-child(4) > a');
    await page.getByRole("link", { name: "Sign In" }).click();
    await expect(page).toHaveURL("https://practicesoftwaretesting.com/auth/login")
})

// #navbarSupportedContent > ul > li:nth-child(4) > a
