import { test, expect } from '@playwright/test';

test('search with exact product name', async ({ page }) => {
  await page.goto('http://localhost/index.php');
  await page.getByRole('link', { name: ' My Account ' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('Sandeshchy2059@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Sandesh@12');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/route=account\/account/);
  await page.getByRole('link', { name: 'Your Store' }).click();
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('iphone');
  await expect(page.getByRole('link', { name: 'iPhone' }).last()).toBeVisible();
    
});

test('search with partial product name', async ({ page }) => {
  await page.goto('http://localhost/index.php');
  await page.getByRole('link', { name: ' My Account ' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('Sandeshchy2059@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Sandesh@12');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/route=account\/account/);
  await page.getByRole('link', { name: 'Your Store' }).click();
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('iph');
  await expect(page.getByRole('link', { name: 'iPhone' }).last()).toBeVisible();
});