import { test, expect } from '@playwright/test';

test.describe('Analytics', () => {
  test('should have Umami script tag on home page', async ({ page }) => {
    await page.goto('/');
    const script = page.locator('script[src="https://cloud.umami.is/script.js"]');
    await expect(script).toHaveAttribute('data-website-id', '3cf8a72d-cb14-4c3e-91a5-da69d92c3612');
  });

  test('should have Umami script tag on all pages', async ({ page }) => {
    const pages = ['/', '/whoami/', '/books/', '/contact/'];
    for (const url of pages) {
      await page.goto(url);
      await expect(page.locator('script[src="https://cloud.umami.is/script.js"]')).toBeAttached();
    }
  });
});
