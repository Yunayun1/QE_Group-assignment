import { test, expect } from '@playwright/test';

test('E2E-001 User Login', async ({ page }) => {
  await page.goto('http://localhost:3000/login');

  await page.getByPlaceholder('Email').fill('yuna1@gmail.com');
  await page.getByPlaceholder('Password').fill('123456');

  await page.getByRole('button').click();

  await page.waitForLoadState('networkidle');

  await expect(page).not.toHaveURL(/login/);
});