import {test, expect} from '@playwright/test';
import {PageManager} from '../page-objects/pageManager.ts';
import {faker} from '@faker-js/faker';

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4200/');
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

    await pm.navigateTo().formLayoutsPage();
    await pm.onFormlayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption('test@test.com', 'password', 'Option 1');
    await pm.onFormlayoutsPage().submitInlineFormWithNameEmailAndCheckbox('John Doe', 'john@test.com', true);

    await  pm.navigateTo().datepickerPage();
    await pm.onDatePickPage().selectCommonDatePickerDateFromToday(5);
    await pm.onDatePickPage().selectDatePickerWithRangeFromToday(5, 10);
});


