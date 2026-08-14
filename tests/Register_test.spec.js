import { test, expect } from '@playwright/test';

test('Register account by filling all the mandatory fields', async ({ page }) => {
  await page.goto('http://localhost/index.php');
  await page.getByRole('link', { name: ' My Account ' }).click();
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByRole('textbox', { name: '* First Name' }).click();
  await page.getByRole('textbox', { name: '* First Name' }).fill('Hari');
  await page.getByRole('textbox', { name: '* First Name' }).press('Enter');
  await page.getByRole('textbox', { name: '* Last Name' }).click();
  await page.getByRole('textbox', { name: '* Last Name' }).fill('Ram');
  await page.getByRole('textbox', { name: '* E-Mail' }).click();
  await page.getByRole('textbox', { name: '* E-Mail' }).fill('Hariram@gmail.com');
  await page.getByRole('textbox', { name: '* Password' }).click();
  await page.getByRole('textbox', { name: '* Password' }).fill('Hariram@12');
  await page.locator('input[name="agree"]').check();
  await page.getByRole('button', { name: 'Continue' }).click();
});

test('Register account by leaving all the mandatory fields empty', async ({ page }) => {
  await page.goto('http://localhost/index.php');
  await page.getByRole('link', { name: ' My Account ' }).click();
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByText('First Name must be between 1 and 32 characters!')).toBeVisible();
  await expect(page.getByText('Last Name must be between 1 and 32 characters!')).toBeVisible();
  await expect(page.getByText('E-Mail Address does not appear to be valid!')).toBeVisible();
  await expect(page.getByText('Password must contain a uppercase, lowercase, number, symbol and be between 8 and 40 characters!')).toBeVisible();
  await expect(page.getByText(' Warning: You must agree to the Privacy Policy!')).toBeVisible();
});


test('Register account by only filling first name field', async ({ page }) => {
  await page.goto('http://localhost/index.php');
  await page.getByRole('link', { name: ' My Account ' }).click();
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByRole('textbox', { name: '* First Name' }).click();
  await page.getByRole('textbox', { name: '* First Name' }).fill('sandesh');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByText('Last Name must be between 1 and 32 characters!')).toBeVisible();
  await expect(page.getByText('E-Mail Address does not appear to be valid!')).toBeVisible();
  await expect(page.getByText('Password must contain a uppercase, lowercase, number, symbol and be between 8 and 40 characters!')).toBeVisible();
  await expect(page.getByText(' Warning: You must agree to the Privacy Policy!')).toBeVisible();
});

test('Register account by only filling last name field', async ({ page }) => {
  await page.goto('http://localhost/index.php');
  await page.getByRole('link', { name: ' My Account ' }).click();
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByRole('textbox', { name: '* Last Name' }).click();
  await page.getByRole('textbox', { name: '* Last Name' }).fill('sandesh');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByText('First Name must be between 1 and 32 characters!')).toBeVisible();
  await expect(page.getByText('E-Mail Address does not appear to be valid!')).toBeVisible();
  await expect(page.getByText('Password must contain a uppercase, lowercase, number, symbol and be between 8 and 40 characters!')).toBeVisible();
  await expect(page.getByText(' Warning: You must agree to the Privacy Policy!')).toBeVisible();
});

test('Register account by only filling email field', async ({ page }) => {
  await page.goto('http://localhost/index.php');
  await page.getByRole('link', { name: ' My Account ' }).click();
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByRole('textbox', { name: '* E-Mail' }).click();
  await page.getByRole('textbox', { name: '* E-Mail' }).fill('sandeshchy2059@gmail.com');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByText('First Name must be between 1 and 32 characters!')).toBeVisible();
  await expect(page.getByText('Last Name must be between 1 and 32 characters!')).toBeVisible();
  await expect(page.getByText('Password must contain a uppercase, lowercase, number, symbol and be between 8 and 40 characters!')).toBeVisible();
  await expect(page.getByText(' Warning: You must agree to the Privacy Policy!')).toBeVisible();
}); 

test('Register account by only filling password field', async ({ page }) => {
  await page.goto('http://localhost/index.php');
  await page.getByRole('link', { name: ' My Account ' }).click();
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByRole('textbox', { name: '* Password' }).click();
  await page.getByRole('textbox', { name: '* Password' }).fill('sandesh@12');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByText('First Name must be between 1 and 32 characters!')).toBeVisible();
  await expect(page.getByText('Last Name must be between 1 and 32 characters!')).toBeVisible();
  await expect(page.getByText('E-Mail Address does not appear to be valid!')).toBeVisible();
  await expect(page.getByText(' Warning: You must agree to the Privacy Policy!')).toBeVisible();
});

test('Register account by using numbers and special characters in first name', async ({ page }) => {
    await page.goto('http://localhost/index.php');
    await page.getByRole('link', { name: ' My Account ' }).click();
    await page.getByRole('link', { name: 'Register' }).click();
    await page.getByRole('textbox', { name: '* First Name' }).click();
    await page.getByRole('textbox', { name: '* First Name' }).fill('Sandesh@2059');
    await page.getByRole('button', { name: 'Continue' }).click();
    await expect(page.getByText('First name should not contain numbers or special characters!')).toBeVisible();
    await expect(page.getByText('Last Name must be between 1 and 32 characters!')).toBeVisible();
    await expect(page.getByText('E-Mail Address does not appear to be valid!')).toBeVisible();
    await expect(page.getByText('Password must contain a uppercase, lowercase, number, symbol and be between 8 and 40 characters!')).toBeVisible();
    await expect(page.getByText(' Warning: You must agree to the Privacy Policy!')).toBeVisible();
});

test('Register account by using numbers and special characters in last name', async ({ page }) => {
    await page.goto('http://localhost/index.php');
    await page.getByRole('link', { name: ' My Account ' }).click();
    await page.getByRole('link', { name: 'Register' }).click();
    await page.getByRole('textbox', { name: '* Last Name' }).click();
    await page.getByRole('textbox', { name: '* Last Name' }).fill('Chaudhary@2059');        
    await page.getByRole('button', { name: 'Continue' }).click();
    await expect(page.getByText('Last name should not contain numbers or special characters!')).toBeVisible();
    await expect(page.getByText('First Name must be between 1 and 32 characters!')).toBeVisible();
    await expect(page.getByText('E-Mail Address does not appear to be valid!')).toBeVisible();
    await expect(page.getByText('Password must contain a uppercase, lowercase, number, symbol and be between 8 and 40 characters!')).toBeVisible();
    await expect(page.getByText(' Warning: You must agree to the Privacy Policy!')).toBeVisible();
});

test('Register account by not including @ in email address', async ({ page }) => {
    await page.goto('http://localhost/index.php');
    await page.getByRole('link', { name: ' My Account ' }).click();
    await page.getByRole('link', { name: 'Register' }).click();
    const email = page.getByRole('textbox', { name: '* E-Mail' });
    await email.fill('sandeshchy2059gmail.com');
    await page.getByRole('button', { name: 'Continue' }).click();
    await expect(email).toHaveJSProperty('validity.valid', false);
    // await expect(page.getByText('First Name must be between 1 and 32 characters!')).toBeVisible();
    // await expect(page.getByText('Last Name must be between 1 and 32 characters!')).toBeVisible();
    // await expect(page.getByText('Password must contain a uppercase, lowercase, number, symbol and be between 8 and 40 characters!')).toBeVisible();
    // await expect(page.getByText(' Warning: You must agree to the Privacy Policy!')).toBeVisible();
});

test('Validate privacy policy link opens the privacy policy modal', async ({ page }) => {

    await page.goto('http://localhost/index.php?route=account/register&language=en-gb');

    await page.locator('#form-register').getByRole('link', { name: 'Privacy Policy' }).click();

    await expect(
    page.getByRole('dialog')
        .getByRole('heading', { name: 'Privacy Policy' })
).toBeVisible();
});

test('Register account with a valid email that includes surrounding spaces', async ({ page }) => {
  await page.goto('http://localhost/index.php');
  await page.getByRole('link', { name: ' My Account ' }).click();
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByRole('textbox', { name: '* First Name' }).click();
  await page.getByRole('textbox', { name: '* First Name' }).fill('Sandesh');
  await page.getByRole('textbox', { name: '* Last Name' }).click();
  await page.getByRole('textbox', { name: '* Last Name' }).fill('Chaudhary');
  await page.getByRole('textbox', { name: '* E-Mail' }).click();
  await page.getByRole('textbox', { name: '* E-Mail' }).fill(' Sandesh4@gmail.com ');
  await page.getByRole('textbox', { name: '* Password' }).click();
  await page.getByRole('textbox', { name: '* Password' }).fill('Sandesh@12');
  await page.locator('input[name="agree"]').check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page).toHaveURL(/route=account\/success/)
});