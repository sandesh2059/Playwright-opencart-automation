import { test, expect } from '@playwright/test';

test('Logout test', async ({ page }) => {
    await page.goto('http://localhost/index.php?route=account/login');
    await page.getByPlaceholder('E-Mail Address').click();
    await page.getByPlaceholder('E-Mail Address').fill('Sandeshchy2059@gmail.com');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('Sandesh@12');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: ' My Account ' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
    await expect(page).toHaveURL(/route=account\/logout/);
});

test('Browser back after logout', async ({ page }) => {
    await page.goto('http://localhost/index.php?route=account/login');
    await page.getByPlaceholder('E-Mail Address').click();
    await page.getByPlaceholder('E-Mail Address').fill('Sandeshchy2059@gmail.com');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('Sandesh@12');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: ' My Account ' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
    await page.goBack();
    await expect(page).toHaveURL(/route=account\/login/);
    
}); 

test('Login again after logout', async ({ page }) => {
    await page.goto('http://localhost/index.php?route=account/login');
    await page.getByPlaceholder('E-Mail Address').click();
    await page.getByPlaceholder('E-Mail Address').fill('Sandeshchy2059@gmail.com');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('Sandesh@12');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: ' My Account ' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
    await page.getByRole('link', { name: 'Login' }).click();
    await expect(page).toHaveURL(/route=account\/login/);
    await page.goto('http://localhost/index.php?route=account/login');
    await page.getByPlaceholder('E-Mail Address').click();
    await page.getByPlaceholder('E-Mail Address').fill('Sandeshchy2059@gmail.com');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('Sandesh@12');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/route=account\/account/);
});

test('Session after closing browser', async ({ browser }) => {

  // Open browser and create session
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('http://localhost/index.php?route=account/login');

  await page.getByPlaceholder('E-Mail Address')
    .fill('Sandeshchy2059@gmail.com');

  await page.getByPlaceholder('Password')
    .fill('Sandesh@12');

  await page.getByRole('button', { name: 'Login' }).click();

  // Verify successful login
  await expect(page).toHaveURL(/route=account\/account/);
  await page.getByRole('link', { name: ' My Account ' }).click();

  await page.locator('#top').getByRole('link', { name: 'Logout' }).click();

  // Close browser/session
  await context.close();

  // Open a new browser context
  const newContext = await browser.newContext();
  const newPage = await newContext.newPage();

  // Try to access protected page directly
  await newPage.goto(
    'http://localhost/index.php?route=account/account'
  );

  // User should be redirected to login page
  await expect(newPage).toHaveURL(/route=account\/login/);

  await newContext.close();
});



test('new tab after login has logged in validation', async ({ page }) => {
  await page.goto('http://localhost/index.php');
  await page.getByRole('link', { name: ' My Account ' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('sandeshchy2059@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Sandesh@12');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/route=account\/account/);

  const page1 = await page.context().newPage();

  await page1.goto('http://localhost/index.php');

  await page1.getByRole('link', { name: ' My Account ' }).click();


  await expect(page1.locator('#top').getByRole('link', { name: 'Logout' })).toBeVisible();
});
