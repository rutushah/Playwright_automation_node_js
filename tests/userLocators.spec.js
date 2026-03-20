import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4200/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();

});

// test('User Facing locators', async({page}) => {

//     // by role
//     await page.getByRole('textbox', {name: 'Email'}).first().click();

//     await page.getByRole('button', {name: 'Sign in'}).first().click();

//     // by label text
//     await page.getByLabel('Email').first().click();

//     //by placeholder text   
//     // await page.getByPlaceholder('Jan Doe').click();

//     // by text
//     await page.getByText('Using the Grid').click (); 

//     await page.getByText('Iot Dashboard').click ();

//     await page.getByTestId('SignIn').click();

// });

test('Reusing Locators ', async({page}) => {

    const basicForm = page.locator('nb-card').filter({hasText:"Basic Form"});
    const email = basicForm.getByRole('textbox',{name: 'Email'});
    const password = basicForm.getByRole('textbox',{name: 'Password'});
    const submitButton = basicForm.getByRole('button');
    const checkBox = basicForm.locator('nb-checkbox');
    
   await email.fill('mtest@test.com');
   await password.fill('Test123');  
   await checkBox.click();
   await submitButton.click();

   await expect(email).toHaveValue('mtest@test.com');
});

test('Extracting values from locators', async({page}) => {

    //to get single text value
    const basicForm = page.locator('nb-card').filter({hasText:"Basic Form"});
    const submitButton = basicForm.getByRole('button');
    const buttonText = await submitButton.textContent();

    expect(buttonText).toBe('Submit');

    //to get the text values
    const allRadioButtonsLabel = await page.locator('nb-radio').allTextContents();
    expect(allRadioButtonsLabel).toContain('Option 1');

    //to get the value entered in the input field
    const email = basicForm.getByRole('textbox',{name: 'Email'});
    await email.fill('mtest@test.com');
    const emailInput = await email.inputValue();

    expect(emailInput).toEqual('mtest@test.com')

    //to get value from placeholder
    const placeholderText = await email.getAttribute('placeholder');
    expect(placeholderText).toEqual('Email');
});

//playwright has 2 types of assertions : general assertions and locator assertions.
test('Assertions in playwright', async({page}) => {

    const basicForm = page.locator('nb-card').filter({hasText:"Basic Form"});
    const submitButton = basicForm.getByRole('button');
    const buttonText = await submitButton.textContent();

    //General Assertions

    const value = 5;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeLessThan(10);
    expect(value).toEqual(5);

    expect(buttonText).toBe('Submit');
    expect(buttonText).toEqual('Submit');

    //Locator Assertions
    await expect(submitButton).toHaveText("Submit");

    //Software Assertions
    await expect.soft(submitButton).toHaveText("Submit");
    await expect.soft(submitButton).toHaveText("Submit By");

    


});