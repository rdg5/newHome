import { test, expect } from '@playwright/test';

test.describe('Contact page', () => {
  test('should display GitHub link', async ({ page }) => {
    await page.goto('/contact/');
    await expect(page.locator('a[href="https://github.com/rdg5"]')).toBeVisible();
  });

  test('should display LinkedIn link', async ({ page }) => {
    await page.goto('/contact/');
    await expect(page.locator('a[href="https://www.linkedin.com/in/sandorvass"]')).toBeVisible();
  });

  test('should display Twitter link', async ({ page }) => {
    await page.goto('/contact/');
    await expect(page.locator('a[href="https://twitter.com/not_rdg"]')).toBeVisible();
  });

  test('should open links in new tab', async ({ page }) => {
    await page.goto('/contact/');
    const links = page.locator('.contact-list a');
    const count = await links.count();
    for (let i = 0; i < count; i++) {
      await expect(links.nth(i)).toHaveAttribute('target', '_blank');
    }
  });
});
