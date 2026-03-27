import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should have links to all pages', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('nav a[href="/whoami/"]')).toBeVisible();
    await expect(page.locator('nav a[href="/books/"]')).toBeVisible();
    await expect(page.locator('nav a[href="/contact/"]')).toBeVisible();
    await expect(page.locator('nav a[href="https://wiki.sandorvass.xyz"]')).toBeVisible();
  });

  test('should highlight the active page', async ({ page }) => {
    await page.goto('/whoami/');
    await expect(page.locator('nav a[href="/whoami/"]')).toHaveClass(/active/);
  });

  test('should navigate to Who am I page', async ({ page }) => {
    await page.goto('/');
    await page.click('nav a[href="/whoami/"]');
    await expect(page).toHaveURL(/whoami/);
  });

  test('should navigate to Books page', async ({ page }) => {
    await page.goto('/');
    await page.click('nav a[href="/books/"]');
    await expect(page).toHaveURL(/books/);
  });

  test('should navigate to Contact page', async ({ page }) => {
    await page.goto('/');
    await page.click('nav a[href="/contact/"]');
    await expect(page).toHaveURL(/contact/);
  });
});
