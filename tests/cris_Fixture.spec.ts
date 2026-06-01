
import { expect, test } from '@playwright/test';

test('Sign In button is visible', async ({ page }) => {

    await page.goto('https://binaryville.com/account');
    const signInButton = page.getByRole("button", { name: "Sign in" });
    await expect(signInButton).toBeVisible();
    await signInButton.click()

    await page.waitForTimeout(4000)
})