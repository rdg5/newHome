import { test, expect } from '@playwright/test';

test.describe('Who am I page', () => {
  test('should display bio with name and location', async ({ page }) => {
    await page.goto('/whoami/');
    await expect(page.locator('.whoami-content')).toContainText('sanyi');
    await expect(page.locator('.whoami-content')).toContainText('Budapest');
  });

  test('should link to employer', async ({ page }) => {
    await page.goto('/whoami/');
    await expect(page.locator('a[href="https://bobcatscoding.com"]')).toBeVisible();
  });

  test('should link to books page', async ({ page }) => {
    await page.goto('/whoami/');
    await expect(page.locator('.whoami-content a[href="/books/"]')).toBeVisible();
  });
});
