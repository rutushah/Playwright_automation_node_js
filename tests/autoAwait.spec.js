import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('http://uitestingplayground.com/ajax');
    await page.getByText('Button Triggering AJAX Request').click();
    // await page.getByText('Form Layouts').click();
});

test('Auto Await', async({page}) => {

    const successButton = page.locator('.bg-success');

    await successButton.click();

    // const buttonText = await successButton.textContent();

    //allTextContents does not wait for 30 seconds to get the text value visible, hence we need to explicitly defined the wait

    await successButton.waitFor({state: 'attached'});
    const buttonText = await successButton.allTextContents();

    await expect(buttonText).toContain('Data loaded with AJAX get request.');

});