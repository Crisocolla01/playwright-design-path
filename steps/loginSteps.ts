import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../browserSetup';


Given("the user is on the login page", async () => {
    await page.goto('https://binaryville.com/account');
})

When("the user enters valid email and password", async () => {
    await page.getByRole("textbox", { name: "Email" }).fill("user@example.com");
    await page.getByRole("textbox", { name: "Password" }).fill("password124");
    await page.getByRole("button", { name: "Sign in" }).click();
})

Then("the user should see their email and password in the URL", async () => {
    await expect(page).toHaveURL(/user%40example.com/);
    await expect(page).toHaveURL(/password124/);
})
