import { test, expect } from '@playwright/test';

test('User able to see data from local storage correctly', async ({ page }) => {
  await page.goto('https://62fbc34c077e321b567b44f4--bespoke-mandazi-61ffc9.netlify.app/');

  await page.evaluate(() => JSON.stringify('Bello'))

  await page.reload()

  // Before click button
  await expect(page.locator('[data-testid="local-storage-text"]')).toHaveText('tao')

  // After click button
});
