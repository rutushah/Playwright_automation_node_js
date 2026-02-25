import{test, expect} from '@playwright/test';

test('Selectors Demo', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/',{ waitUntil: 'domcontentloaded' });
    await page.pause();

    //clicking on username , using any object
    await page.click('id=user-name');

    //click on username textbox using locator
    await page.locator('id=user-name').fill('Edison')
    await page.locator('[id="user-name"]').fill('Edison')
    // await page.pause();

    //using css-selector
    await page.locator('#login-button').click();

    //using xpath
    await page.locator('xpath=//input[@id="password"]').fill("rutu");
    await page.locator('//input[@id="password"]').fill("rutudetu");

    //using text
    await page.locator('text=Login').click(); 
    await page.locator('input:has-text("Login")').click();
    await page.locator('input:has-text("Login")').click();
})
