const { test, expect } = require('@playwright/test');

test('Verify Color Table Values', async ({ page }) => {
  await page.goto('https://www.w3schools.com/');
  await page.locator('[title="Tutorials"]').click();
  await page.locator('.w3-bar-item:has-text("Learn Colors")').click();
  await page.locator('[href="colors_groups.asp"]').first().click();

  await expect(page).toHaveURL(/.*colors_groups.asp/);

  const row = page.locator('[href="color_tryit.asp?hex=000000"]').locator('..').locator('..');
  await expect(row.locator('[href="color_tryit.asp?color=Black"]')).toHaveText('Black');
  expect(await row.locator('[bgcolor="#000000"]').isVisible()).toBeTruthy();
});