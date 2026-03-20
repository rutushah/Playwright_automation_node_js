import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
      await page.goto('http://localhost:4200/');
   await page.getByText('Forms').click();
          await page.getByText('Form Layouts').click();
    // await page.getByText('Form Layouts').click();
});

test('Input field test', async({page}) => {

      const basicForm = page.locator('nb-card').filter({hasText:"Basic Form"});
      const email = basicForm.getByRole('textbox',{name: 'Email'});

       await email.fill('mtest@test.com');
       await email.clear();
       await email.type('test@test2.com');


    });

    