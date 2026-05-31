import { test, expect } from '@playwright/test';

test('E2E-002 Create Article', async ({ page }) => {

  // 1. LOGIN FIRST
  await page.goto('http://localhost:3000/login');

  await page.locator('input').first().fill('yuna1@gmail.com');
  await page.locator('input').nth(1).fill('123456');

  await page.locator('button').click();

  await page.waitForTimeout(2000);

  // 2. GO TO EDITOR
  await page.goto('http://localhost:3000/editor');

  // 3. FILL ARTICLE FORM
  await page.locator('input').first().fill('Playwright Test Article');

  await page.locator('input').nth(1).fill('What this article is about');

  await page.locator('textarea').fill(
    'This is the body of the article created by Playwright automation test.'
  );

  // 4. CLICK PUBLISH
  await page.locator('button').click();

  await page.waitForTimeout(3000);

  // 5. VERIFY REDIRECT TO ARTICLE PAGE
  await expect(page).toHaveURL(/article/);
});