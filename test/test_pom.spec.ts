import { test, expect } from '../page-objects/fixtures';

test('should login using POM', async ({ page, loginPage }) => {
    await page.goto("https://binaryville.com/account/");

    await loginPage.login("user@example.com", "password124");

    expect(page.url()).toContain("password124");
})



