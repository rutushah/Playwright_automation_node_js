import {test} from '@playwright/test';

//in test suite we can have multiple tests, and context between the test suites can be separated

test('First test',  (page) => {

    page.goto()
});

test.describe('Test suite 1', ()=>{
    test('First test',  () => {});

    test('First test',  () => {});

    test('First test',  () => {});
})



test.describe('Test suite 2', ()=>{
    test('First test',  () => {});

    test('First test',  () => {});

    test('First test',  () => {});
})