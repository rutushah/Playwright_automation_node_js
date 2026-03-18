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

