const { test } = require('@playwright/test');

import { HomePage } from "./pageObjects/homePage";
import { Iframe } from "./pageObjects/iframe";

test('Verify submited values', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  const homePage = new HomePage(page);

  await homePage.gotoHome();

  await homePage.clickNavItemByTitle('Tutorials');
  await homePage.clickBarItemByText('Learn HTML');
  await homePage.clickSideBarItemByHref('html_forms.asp');

  await homePage.verifyUrl(/.*html_forms.asp/);

  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('[href="tryit.asp?filename=tryhtml_form_submit"]')
  ]);

  const iframe = new Iframe(newPage);
  await iframe.iframeFillFieldById('vitor', '#fname');
  await iframe.iframeFillFieldById('silva', '#lname');

  await iframe.iframeClickSubmit();

  await iframe.iframeVerifyAnswer('fname=vitor&lname=silva');
});