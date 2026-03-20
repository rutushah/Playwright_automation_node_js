import {test} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4200/');
});

  //in test suite we can have multiple tests, and context between the test suites can be separated
test.describe('Test suite for testing forms', () => {

    test.beforeEach(async ({page}) => {
        await page.getByText('Forms').click();
    });
    
    test('Navigate to form layouts',async  ({page}) => {
        await page.getByText('Form Layouts').click();
    
    });
    
    test('Navigate to date picker page',async  ({page}) => {
        await page.getByText('Datepicker').click();
    
    });

});

  //in test suite we can have multiple tests, and context between the test suites can be separated
  test.describe('Test suite for testing Charts', () => {

    test.beforeEach(async ({page}) => {
        await page.getByText('Charts').click();
    });
    
    test('Navigate to Echarts',async  ({page}) => {
        await page.getByText('Echarts').click();
    
    });
});

//suite for locators syntax rules
test.describe('Test suite for testing locators syntax rules', () => {
test('Loctor syntax rules', async({page}) => {
    //by tag name
    page.locator('input');

    //by id
    page.locator('#inputEmail1');

    //by class value
    page.locator('.shape-rectangle')

    //by attribute name and value
    page.locator([placeholder="Email"])

    //by class value (full)
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

    //by combining different selectors
    page.locator('input[placeholder="Email"][nbinput]');

    // by xpath syntax - it is not recommended to use xpath syntax, but it is possible
    page.locator('')

    // find element by partial text match
    page.locator(':text("Using the Grid")')
});

});

