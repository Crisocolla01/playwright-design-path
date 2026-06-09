import { test, expect } from '@playwright/test';

test("has title 2", async ({ page }) => {
    await page.goto("https://www.playwright.dev/", { waitUntil: "commit" });
    // await expect(page).toHaveTitle(/Playwright/);
    expect(await page.title()).toBe("Fast and reliable end-to-end testing for modern web apps | Playwright");
})
test("get started link", async ({ page }) => {
    await page.goto("https://www.playwright.dev/");
    await page.getByRole("link", { name: "Get started" }).click();
    await expect(page.getByRole("heading", { name: "Installation" })).toBeVisible();
})