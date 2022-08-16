import { test, expect } from '@playwright/test';

test('User able to see data from session storage correctly', async ({ page }) => {
  await page.goto('https://taohuh-pw-local-session-storage.netlify.app/');

  await page.evaluate(() => {
    sessionStorage.setItem('mySessionStorage', 'Hungry!! 🍖')
  })

  // Make magic happen!
  await page.reload()

  await expect(page.locator('[data-testid="session-storage-container"]')).toHaveText(`It's from session storage: Bello`)
})
