
import { expect, test, chromium } from '@playwright/test';

test('', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto('https://binaryville.com/account');
    const signInButton = page.getByRole("button", { name: "Sign in" });
    await expect(signInButton).toBeVisible();
    await signInButton.click()

    await page.waitForTimeout(4000)
    await browser.close();
})