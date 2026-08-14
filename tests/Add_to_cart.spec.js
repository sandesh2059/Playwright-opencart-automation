import { test, expect } from '@playwright/test';

test('Add a single product to the cart', async ({ page }) => {
  await page.goto('http://localhost/index.php');

  await page.getByRole('link', { name: ' My Account ' }).click();

  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('sandeshchy2059@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Sandesh@12');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/route=account\/account/);
  await page.goto('http://localhost/index.php');



  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('samsung');
  await page.locator('button[type="submit"].btn-light.btn-lg').click();

  await page.locator('#product-list').getByText('Samsung SyncMaster 941BW').click();

  // Now there's only one "Add to Cart" button on the page
  await page.getByRole('button', { name: 'Add to Cart' }).click();

  await expect(page.getByText('Success: You have added')).toBeVisible();
  await page.getByRole('link', { name: ' Shopping Cart' }).click();
  await expect(page.getByRole('heading', { name: 'Shopping Cart' })).toBeVisible();
  await expect(page.locator('#output-cart').getByText('Samsung SyncMaster 941BW')).toBeVisible();



});