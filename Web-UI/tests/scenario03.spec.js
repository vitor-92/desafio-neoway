const { test, expect } = require('@playwright/test');

test('Verify submited values', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.w3schools.com/');
  await page.locator('[title="Tutorials"]').click();
  await page.locator('.w3-bar-item:has-text("Learn HTML")').click();
  await page.locator('[href="html_forms.asp"]').first().click();

  await expect(page).toHaveURL(/.*html_forms.asp/);

  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('[href="tryit.asp?filename=tryhtml_form_submit"]') // Opens a new tab
  ])
  await newPage.waitForLoadState();
  const iframe = newPage.frameLocator('#iframeResult');
  await iframe.locator('#fname').fill('vitor');
  await iframe.locator('#lname').fill('silva');
  await iframe.locator('[type="submit"]').click();
  await expect(iframe.locator('div.w3-container')).toHaveText('fname=vitor&lname=silva');
});