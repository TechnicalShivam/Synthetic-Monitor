import { test, expect } from '@playwright/test';

test('Check if Google is available', async ({ page }) => {
  try {
    await page.goto('https://www.trustwares.com'); // Replace with your actual URL
    await expect(page).toHaveTitle(/trustwares/); // Adjust assertion for your app
    await page.screenshot({ path: 'screenshot.png' });
    console.log('App is up');
  } catch (error) {
    console.error('App is down:', error);
    await page.screenshot({ path: 'screenshot.png' });
    throw error;
  }
});
