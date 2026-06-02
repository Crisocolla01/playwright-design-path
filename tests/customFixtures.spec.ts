import { test as base, expect } from '@playwright/test';

type Fixtures = {
    testData: { email: string; password: string };
    authneticateUser: void;
};

const test = base.extend<Fixtures>({
    testData: async ({ }, use) => {
        const data = { email: "test@example.com", password: "password123" }
        await use(data);
    },
    authneticateUser: [async ({ page, testData }, use) => {
        await page.goto("https://binaryville.com/account/");

        const emailInput = page.getByRole("textbox", { name: "Email" });
        await emailInput.fill(testData.email);

        const passwordInput = page.getByRole("textbox", { name: "Password" });
        await passwordInput.fill(testData.password);

        const signInButton = page.getByRole("button", { name: "Sign In" });
        await signInButton.click();

        await use(undefined);
    }, { auto: true }]
})

test("should log in with test data", async ({ page, testData }) => {
    const url = page.url();
    expect(url).toContain(testData.password)
    await page.waitForTimeout(5000);
})