import { test, expect } from '@playwright/test';

test.describe('Projects page', () => {
  test('should display the projects heading', async ({ page }) => {
    await page.goto('/projects/');
    await expect(page.locator('.books-header')).toContainText('Stuff I have built');
  });

  test('should display a project linking out', async ({ page }) => {
    await page.goto('/projects/');
    const link = page.locator('.project-list a').first();
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', 'https://draftpivot.com');
    await expect(link).toHaveAttribute('target', '_blank');
  });

  test('should show a blurb for each project', async ({ page }) => {
    await page.goto('/projects/');
    await expect(page.locator('.project-list p').first()).not.toBeEmpty();
  });

  test('should have a Projects nav link', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.nav-link', { hasText: 'Projects' })).toBeVisible();
  });
});
