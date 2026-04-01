import {test, expect} from '@playwright/test';
import {PageManager} from '../page-objects/pageManager.ts';
import {faker} from '@faker-js/faker';
import { FormLayoutsPage } from '../page-objects/formLayoutsPage.ts';

test.beforeEach(async ({page}) => {
    await page.goto('/');
});

test('Navigate to form page', async({page}) => {
    const pm = new PageManager(page);
    await pm.navigateTo().formLayoutsPage();
    
    await pm.navigateTo().datepickerPage();
    await pm.navigateTo().toasterPage();
    await pm.navigateTo().smartTablePage();
    await pm.navigateTo().tooltipPage();
    await pm.navigateTo().chartsPage();
});

test.only('Parameterized methods', async({page}) => {
    const pm = new PageManager(page);

    const randomFullName = faker.person.fullName();
    const randomEmail = `${randomFullName.replace('  ', '')}${faker.number.int(1000)}@test.com`


    await pm.navigateTo().formLayoutsPage();
    await pm.onFormlayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption('test@test.com', 'password', 'Option 1');
    
    await page.screenshot({path:'screenshots/FormLayoutsPage.png'});
    await pm.onFormlayoutsPage().submitInlineFormWithNameEmailAndCheckbox(randomFullName, randomEmail, true);
    await page.screenshot({path:`screenshots/FormLayoutsPage_InlineForm.png`});

    const buffer = await page.screenshot();
    console.log('Screenshot buffer:', buffer.toString('base64'));
    await  pm.navigateTo().datepickerPage();
    await pm.onDatePickPage().selectCommonDatePickerDateFromToday(5);
    await pm.onDatePickPage().selectDatePickerWithRangeFromToday(5, 10);
});


