import { test, expect } from '@playwright/test';

test('heading on My Account page', async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/account/");
    await expect(page.getByRole("heading", { name: "My account" })).toBeVisible();
})