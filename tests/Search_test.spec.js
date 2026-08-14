import { test, expect } from '@playwright/test';

test('search with exact product name', async ({ page }) => {
  await page.goto('http://localhost/index.php');
  // await page.getByRole('link', { name: ' My Account ' }).click();
  // await page.getByRole('link', { name: 'Login' }).click();
  // await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  // await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('Sandeshchy2059@gmail.com');
  // await page.getByRole('textbox', { name: 'Password' }).click();
  // await page.getByRole('textbox', { name: 'Password' }).fill('Sandesh@12');
  // await page.getByRole('button', { name: 'Login' }).click();
  // await expect(page).toHaveURL(/route=account\/account/);
  // await page.getByRole('link', { name: 'Your Store' }).click();
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('iphone');
  await page.locator('button[type="submit"].btn-light.btn-lg').click();
  await expect(page.getByRole('link', { name: 'iPhone' }).last()).toBeVisible();
    
});

test('search with partial product name', async ({ page }) => {
  await page.goto('http://localhost/index.php');
  // await page.getByRole('link', { name: ' My Account ' }).click();
  // await page.getByRole('link', { name: 'Login' }).click();
  // await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  // await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('Sandeshchy2059@gmail.com');
  // await page.getByRole('textbox', { name: 'Password' }).click();
  // await page.getByRole('textbox', { name: 'Password' }).fill('Sandesh@12');
  // await page.getByRole('button', { name: 'Login' }).click();
  // await expect(page).toHaveURL(/route=account\/account/);
  // await page.getByRole('link', { name: 'Your Store' }).click();
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('iph');
  await page.locator('button[type="submit"].btn-light.btn-lg').click();
  await expect(page.getByRole('link', { name: 'iPhone' }).last()).toBeVisible();
});

test('search with complete product name', async ({ page }) => {
    await page.goto('http://localhost/index.php');
    // await page.getByRole('link', { name: ' My Account ' }).click();
    // await page.getByRole('link', { name: 'Login' }).click();
    // await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
    // await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('Sandeshchy2059@gmail.com');
    // await page.getByRole('textbox', { name: 'Password' }).click();
    // await page.getByRole('textbox', { name: 'Password' }).fill('Sandesh@12');
    // await page.getByRole('button', { name: 'Login' }).click();
    // await expect(page).toHaveURL(/route=account\/account/);
    // await page.getByRole('link', { name: 'Your Store' }).click();
    await page.getByRole('textbox', { name: 'Search' }).click();
    await page.getByRole('textbox', { name: 'Search' }).fill('Samsung SyncMaster 941BW');
    await page.locator('button[type="submit"].btn-light.btn-lg').click();
    await expect(page.getByRole('link', { name: 'Samsung SyncMaster 941BW' }).last()).toBeVisible();
})

test('search with product name in lowercase', async ({ page }) => {
    await page.goto('http://localhost/index.php');
    await page.getByRole('textbox', { name: 'Search' }).click();
    await page.getByRole('textbox', { name: 'Search' }).fill('samsung syncmaster 941bw');
    await page.locator('button[type="submit"].btn-light.btn-lg').click();
    await expect(page.getByRole('link', { name: 'Samsung SyncMaster 941BW' }).last()).toBeVisible();
})

test('search with product name in uppercase', async ({ page }) => {
    await page.goto('http://localhost/index.php');
    await page.getByRole('textbox', { name: 'Search' }).click();
    await page.getByRole('textbox', { name: 'Search' }).fill('SAMSUNG SYNCMASTER 941BW');
    await page.locator('button[type="submit"].btn-light.btn-lg').click();
    await expect(page.getByRole('link', { name: 'Samsung SyncMaster 941BW' }).last()).toBeVisible();
})

test('search with product name in mixed case', async ({ page }) => {
    await page.goto('http://localhost/index.php');
    await page.getByRole('textbox', { name: 'Search' }).click();
    await page.getByRole('textbox', { name: 'Search' }).fill('SaMsUnG sYnCmAsTeR 941Bw');
    await page.locator('button[type="submit"].btn-light.btn-lg').click();
    await expect(page.getByRole('link', { name: 'Samsung SyncMaster 941BW' }).last()).toBeVisible();
})

test('search with product name with leading spaces', async ({ page }) => {
    await page.goto('http://localhost/index.php');
    await page.getByRole('textbox', { name: 'Search' }).click();
    await page.getByRole('textbox', { name: 'Search' }).fill('   Samsung SyncMaster 941BW');
    await page.locator('button[type="submit"].btn-light.btn-lg').click();
    await expect(page.getByRole('link', { name: 'Samsung SyncMaster 941BW' }).last()).toBeVisible();
})

test('search with product name with trailing spaces', async ({ page }) => {
    await page.goto('http://localhost/index.php');
    await page.getByRole('textbox', { name: 'Search' }).click();
    await page.getByRole('textbox', { name: 'Search' }).fill('Samsung SyncMaster 941BW   ');
    await page.locator('button[type="submit"].btn-light.btn-lg').click();
    await expect(page.getByRole('link', { name: 'Samsung SyncMaster 941BW' }).last()).toBeVisible();
})  

test('search with product name containing multiple words', async ({ page }) => {
    await page.goto('http://localhost/index.php');
    await page.getByRole('textbox', { name: 'Search' }).click();
    await page.getByRole('textbox', { name: 'Search' }).fill('Samsung SyncMaster');
    await page.locator('button[type="submit"].btn-light.btn-lg').click();
    await expect(page.getByRole('link', { name: 'Samsung SyncMaster' }).last()).toBeVisible();
})

test('search with only one word of the product name', async ({ page }) => {
    await page.goto('http://localhost/index.php');
    await page.getByRole('textbox', { name: 'Search' }).click();
    await page.getByRole('textbox', { name: 'Search' }).fill('Samsung');
    await page.locator('button[type="submit"].btn-light.btn-lg').click();
    await expect(page.getByRole('link', { name: 'Samsung' }).last()).toBeVisible();
})

test('search with no matching product name', async ({ page }) => {
    await page.goto('http://localhost/index.php');
    await page.getByRole('textbox', { name: 'Search' }).click();
    await page.getByRole('textbox', { name: 'Search' }).fill('NonExistingProduct');
    await page.locator('button[type="submit"].btn-light.btn-lg').click();
    await expect(page.getByText('There is no product that matches the search criteria.')).toBeVisible();
})