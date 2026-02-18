/**
 * Create a new file
 * import the required module from node_modules - bere loaded test and expect files
 * Create a test block - test(tile, testFunction)
 * 
 * 
 * 
 * The keyword async before function makes the function return a promise.
 * The keyword await before function makes the function wait for a promise.
 * expect for any assertions
 */

const{test, expect} = require('@playwright/test')
// const {hello, helloWorld} = require('./demo/hello')

// can import hello and helloworld instead of require

import {hello, helloWorld} from './demo/hello'

console.log(hello());
console.log(helloWorld());
const midas_url = 'https://gsops-midas-admin-new.pi108.net:9012/login'

test('My first test', async ({page})=> {
    await page.goto(midas_url)
    await expect(page).toHaveURL(midas_url)
    await expect(page).toHaveTitle('Midas')
})