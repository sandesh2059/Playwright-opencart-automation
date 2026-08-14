const { test, expect } = require('@playwright/test');
test('open cart homepage loads successfully', async ({ page }) => {
    await page.goto('http://localhost/index.php');
    await expect(page).toHaveTitle(/OpenCart/);
});