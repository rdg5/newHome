import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test('should display the greeting heading', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toHaveText('Hi, this is my internet thing');
  });

  test('should display the subtitle', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h2')).toContainText('stuff about me');
  });
});
