import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../browserSetup';
import { LoginPage } from '../page-objects/login-page-new.pom';

let loginPage: LoginPage;

Given("the user is on the login page", async () => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
})

When("the user enters valid email and password", async () => {
    await loginPage.emailLocator.fill("user@example.com");
    await loginPage.passwordLocator.fill("password124");
    await loginPage.signInButtonLocator.click()
})

Then("the user should see their email and password in the URL", async () => {
    await expect(page).toHaveURL(/user%40example.com/);
    await expect(page).toHaveURL(/password124/);
})
