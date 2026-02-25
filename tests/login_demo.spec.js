import {test, expect} from '@playwright/test';

// login test for applitools demo app
test('Login to Applitools Demo App', async({page}) => {
    await page.goto("https://demo.applitools.com/");
    await page.locator('id=username').fill('rutu');
    await page.locator('id=password').fill('rutu123');
    await page.locator('a:has-text("Sign in")').click();

    await expect(page).toHaveTitle('ACME demo app');


})