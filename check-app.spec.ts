import { test, expect } from '@playwright/test';

test('Login to GitHub and open a repo', async ({ page }) => {
  try {
    // Navigate to GitHub homepage
    await page.goto('https://github.com');

    // Click on "Sign in"
    await page.click('text=Sign in');

    // Enter username
    await page.fill('input[name="login"]', 'TechnicalShivam');

    // Enter password
    await page.fill('input[name="password"]', 'Bibha9234#');

    // Click "Sign in" button
    await page.click('input[name="commit"]');

    // Wait for navigation after login
    await page.waitForURL('**/github.com/**');

    // Navigate to a specific repo
    await page.goto('https://github.com/TechnicalShivam/Synthetic-Monitor');

    // Expect to see the repo title
    await expect(page).toHaveURL(/.*github.com\/TechnicalShivam\/Synthetic-Monitor/);

    // Take a screenshot
    await page.screenshot({ path: 'screenshot.png' });

    console.log('GitHub login and repo check passed');
  } catch (error) {
    console.error('Test failed:', error);
    await page.screenshot({ path: 'screenshot.png' });
    throw error;
  }
});
