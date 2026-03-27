import { test, expect } from '@playwright/test';

test.describe('Books page', () => {
  test('should display the books heading', async ({ page }) => {
    await page.goto('/books/');
    await expect(page.locator('.books-header')).toContainText('Books that I have read');
  });

  test('should display year filter buttons', async ({ page }) => {
    await page.goto('/books/');
    const buttons = page.locator('.btn-year');
    await expect(buttons).toHaveCount(7);
  });

  test('should display a reset button', async ({ page }) => {
    await page.goto('/books/');
    await expect(page.locator('.btn-reset')).toBeVisible();
  });

  test('should display books in the list', async ({ page }) => {
    await page.goto('/books/');
    const books = page.locator('.book-list li');
    await expect(books.first()).toBeVisible();
  });

  test('should filter books when clicking a year button', async ({ page }) => {
    await page.goto('/books/');
    const allBooks = await page.locator('.book-list li').count();

    // Click a year button
    await page.locator('.btn-year').first().click();

    // Visible books should be fewer or equal
    const visibleBooks = await page.locator('.book-list li:visible').count();
    expect(visibleBooks).toBeLessThanOrEqual(allBooks);

    // Clicked button should have active class
    await expect(page.locator('.btn-year').first()).toHaveClass(/active/);
  });

  test('should show all books when clicking reset', async ({ page }) => {
    await page.goto('/books/');
    const allBooks = await page.locator('.book-list li').count();

    // Filter then reset
    await page.locator('.btn-year').first().click();
    await page.locator('.btn-reset').click();

    const visibleBooks = await page.locator('.book-list li:visible').count();
    expect(visibleBooks).toBe(allBooks);
  });
});
