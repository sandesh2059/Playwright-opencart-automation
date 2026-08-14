import {test, expect} from '@playwright/test';


test('Login with valid credentials', async ({ page }) => {
  await page.goto('http://localhost/index.php');
  await page.getByRole('link', { name: ' My Account ' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('Sandeshchy2059@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Sandesh@12');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/route=account\/account/);
});

test('Login with valid email and invalid password', async ({ page }) => {
  await page.goto('http://localhost/index.php');
  await page.getByRole('link', { name: ' My Account ' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('Sandeshchy2059@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Sandesh@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('.alert-danger')).toBeVisible();
});

test('Login with invalid email and valid password', async ({ page }) => {
  await page.goto('http://localhost/index.php');
  await page.getByRole('link', { name: ' My Account ' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('sandeshsa@gmail.com'); 
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Sandesh@12');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('.alert-danger')).toBeVisible();
});

test('Login with unregistered email and password', async ({ page }) => {
  await page.goto('http://localhost/index.php');
  await page.getByRole('link', { name: ' My Account ' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('sandesh@gmailcom');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Sandesh@12');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('.alert-danger')).toContainText('Warning: No match for E-Mail Address and/or Password.');
});

test('Login with both field empty', async ({ page }) => {
  await page.goto('http://localhost/index.php');
  await page.getByRole('link', { name: ' My Account ' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('.alert-danger')).toContainText('Warning: No match for E-Mail Address and/or Password.');
});

test('Login with email field empty and password filled', async ({ page }) => {
  await page.goto('http://localhost/index.php');
  await page.getByRole('link', { name: ' My Account ' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Sandesh@12');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('.alert-danger')).toContainText('Warning: No match for E-Mail Address and/or Password.');
});

test('Login with email filled and password field empty', async ({ page }) => {
  await page.goto('http://localhost/index.php');
  await page.getByRole('link', { name: ' My Account ' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('Sandeshchy2059@gmail.com');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('.alert-danger')).toContainText('Warning: No match for E-Mail Address and/or Password.');
});

// test('Login with email containing spaces and valid password', async ({ page }) => {
//   await page.goto('http://localhost/index.php');
//   await page.getByRole('link', { name: ' My Account ' }).click();
//   await page.getByRole('link', { name: 'Login' }).click();
//   await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
//   await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('Sandeshchy2059 @gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('Sandesh@12');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await expect(email).toHaveJSProperty('validity.valid', false);
// });
test('Login with email containing spaces and valid password', async ({ page }) => {
  await page.goto('http://localhost/index.php');

  await page.getByRole('link', { name: ' My Account ' }).click();
  await page.getByRole('link', { name: 'Login' }).click();

  const email = page.getByRole('textbox', { name: 'E-Mail Address' });

  await email.fill('Sandeshchy2059 @gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Sandesh@12');

  await page.getByRole('button', { name: 'Login' }).click();

  const actualMessage = await email.evaluate(el => el.validationMessage);
  expect(actualMessage).toBe("A part followed by '@' should not contain the symbol ' '.");
});

test('validate if password is case insensitive', async ({ page }) => {
  await page.goto('http://localhost/index.php');

  await page.getByRole('link', { name: ' My Account ' }).click();
  await page.getByRole('link', { name: 'Login' }).click();

  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('Sandeshchy2059@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('sANDESH@12');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator('.alert-danger')).toContainText('Warning: No match for E-Mail Address and/or Password.');
});

test('validate if email is case insensitive', async ({ page }) => {
  await page.goto('http://localhost/index.php');

  await page.getByRole('link', { name: ' My Account ' }).click();
  await page.getByRole('link', { name: 'Login' }).click();

  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('sandeshCHy2059@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Sandesh@12');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/route=account\/account/);
});

test('validate if password masking is working', async ({ page }) => {
  await page.goto('http://localhost/index.php');

  await page.getByRole('link', { name: ' My Account ' }).click();
  await page.getByRole('link', { name: 'Login' }).click();

  const passwordField = page.getByRole('textbox', { name: 'Password' });
  await passwordField.fill('Sandesh@12');

  const inputType = await passwordField.evaluate(el => el.type);
  expect(inputType).toBe('password');
});

test('validate if password field is accepting special characters', async ({ page }) => {
  await page.goto('http://localhost/index.php');

  await page.getByRole('link', { name: ' My Account ' }).click();
  await page.getByRole('link', { name: 'Login' }).click();

  const passwordField = page.getByRole('textbox', { name: 'Password' });
  await passwordField.fill('!@#$%^&*()_+');

  const inputValue = await passwordField.evaluate(el => el.value);
  expect(inputValue).toBe('!@#$%^&*()_+');
});

test('validate email without @ symbol', async ({ page }) => {
  await page.goto('http://localhost/index.php');

  await page.getByRole('link', { name: ' My Account ' }).click();
  await page.getByRole('link', { name: 'Login' }).click();

  const emailField = page.getByRole('textbox', { name: 'E-Mail Address' });
  await emailField.fill('Sandeshchy2059gmail.com');

  await page.getByRole('button', { name: 'Login' }).click();

  const actualMessage = await emailField.evaluate(el => el.validationMessage);
  expect(actualMessage).toBe("Please include an '@' in the email address. 'Sandeshchy2059gmail.com' is missing an '@'.");
});

test('Validate login after refreshing the page', async ({ page }) => {
  await page.goto('http://localhost/index.php');

  await page.getByRole('link', { name: ' My Account ' }).click();
  await page.getByRole('link', { name: 'Login' }).click();

  await page.getByRole('textbox', { name: 'E-Mail Address' })
    .fill('Sandeshchy2059@gmail.com');

  await page.getByRole('textbox', { name: 'Password' })
    .fill('Sandesh@12');

  await page.getByRole('button', { name: 'Login' }).click();

  // Verify successful login
  await expect(page).toHaveURL(/route=account\/account/);

  // Refresh the page
  await page.reload();

  await expect(page).toHaveURL(/route=account\/account/);
});

test('Validate copy and paste functionality in email field', async ({ page, context }) => {
  await page.goto('http://localhost/index.php');

  await page.getByRole('link', { name: ' My Account ' }).click();
  await page.getByRole('link', { name: 'Login' }).click();

  const emailField = page.getByRole('textbox', { name: 'E-Mail Address' });

  await context.grantPermissions(['clipboard-read', 'clipboard-write']);

  await page.evaluate(() => {
    navigator.clipboard.writeText('Sandeshchy2059@gmail.com');
  });

  await emailField.click();
  await page.keyboard.press('Control+V');

  await expect(emailField).toHaveValue('Sandeshchy2059@gmail.com');
});


test('Login restriction after 20 failed attempts', async ({ page }) => {
  await page.goto('http://localhost/index.php');

  await page.getByRole('link', { name: ' My Account ' }).click();
  await page.getByRole('link', { name: 'Login' }).click();

  const email = page.getByRole('textbox', { name: 'E-Mail Address' });
  const password = page.getByRole('textbox', { name: 'Password' });
  const loginButton = page.getByRole('button', { name: 'Login' });

  for (let i = 1; i <= 101; i++) {
    await email.fill('test@gmail.com');
    await password.fill('WrongPassword123');

    await loginButton.click();

    console.log(`Failed login attempt: ${i}`);

    await expect(page.locator('.alert-danger')).toBeVisible();
  }
});