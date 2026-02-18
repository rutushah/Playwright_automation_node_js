import { test, expect } from '@playwright/test';

test('Midas login text', async ({ page, context }) => {

  await context.tracing.start(
    { 
      snapshots: true, 
      screenshots: true 
    });
  await page.goto('https://gsops-midas-admin-new.pi108.net:9012/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Rutus');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('TapanDetu@123');
  await page.getByRole('textbox', { name: 'Password' }).press('Tab');
  await page.getByRole('textbox', { name: 'Station' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Station' }).fill('DAL-STATION-1');
  await page.getByRole('textbox', { name: 'Station' }).press('CapsLock');
  await page.getByRole('button', { name: 'Login' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('div:nth-child(3) > .home-management').click();
  const page1 = await page1Promise;
  await page1.locator('.home-management').first().click();

  await context.tracing.stop({path:'login_trace.zip'})
});