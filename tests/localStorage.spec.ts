import { test, expect } from '@playwright/test';

test('User able to see data from local storage correctly', async ({ page }) => {
  await page.goto('https://playwright.dev/');
});
