const { test, expect } = require('@playwright/test');

test('Verify Open Modal Box', async ({ page }) => {
  await page.goto('https://www.w3schools.com/');
  await page.locator('[title="Tutorials"]').click();
  await page.locator('.w3-bar-item:has-text("Learn How To")').click();
  await page.locator('[href="howto_css_modals.asp"]').first().click();

  await expect(page).toHaveURL(/.*howto_css_modals.asp/);
  await expect(page).toHaveTitle('How To Make a Modal Box With CSS and JavaScript');

  const btnModal = page.locator(`//button[contains(text(),'Open Modal')]`);
  await btnModal.click();

  expect(page.locator('w3-modal').isVisible()).toBeTruthy();

  await expect(btnModal).toHaveAttribute('class', 'ws-btn w3-dark-grey');
});

test('Verify Close Modal Box', async ({ page }) => {
  await page.goto('https://www.w3schools.com/');
  await page.locator('[title="Tutorials"]').click();
  await page.locator('.w3-bar-item:has-text("Learn How To")').click();
  await page.locator('[href="howto_css_modals.asp"]').first().click();

  await expect(page).toHaveURL(/.*howto_css_modals.asp/);
  await expect(page).toHaveTitle('How To Make a Modal Box With CSS and JavaScript');

  await page.locator(`//button[contains(text(),'Open Modal')]`).click();

  await page.locator('//header/span[1]').click();
  expect(await page.locator('w3-modal').isVisible()).toBeFalsy();
});
