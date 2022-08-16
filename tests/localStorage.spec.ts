import { test, expect } from '@playwright/test';

test('User able to see data from local storage correctly', async ({ page }) => {
  await page.goto('https://taohuh-pw-local-session-storage.netlify.app/');

  await page.evaluate(() => {
    localStorage.setItem('myLocalStorage', 'Bello')
  })

  // Make magic happen!
  await page.reload()

  await expect(page.locator('[data-testid="local-storage-container"]')).toHaveText(`It's from local storage: Bello`)
})
