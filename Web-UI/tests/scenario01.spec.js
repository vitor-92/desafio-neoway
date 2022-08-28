const { test } = require('@playwright/test');

import { HomePage } from "./pageObjects/homePage";
import { HowToPage } from "./pageObjects/howToPage";

test('Verify Open Modal Box', async ({ page }) => {
  const homePage = new HomePage(page);
  const howToPage = new HowToPage(page);

  await homePage.gotoHome();

  await homePage.clickNavItemByTitle('Tutorials');
  await homePage.clickBarItemByText('Learn How To');
  await homePage.clickSideBarItemByHref('howto_css_modals.asp');

  await homePage.verifyTitleText('How To Make a Modal Box With CSS and JavaScript');

  await howToPage.btnOpenModal.click();
  await howToPage.verifyModalVisible();
});

test('Verify Close Modal Box', async ({ page }) => {
  const homePage = new HomePage(page);
  const howToPage = new HowToPage(page);

  await homePage.gotoHome();

  await homePage.clickNavItemByTitle('Tutorials');
  await homePage.clickBarItemByText('Learn How To');
  await homePage.clickSideBarItemByHref('howto_css_modals.asp');

  await homePage.verifyUrl(/.*howto_css_modals.asp/);

  await howToPage.btnOpenModal.click();
  await howToPage.verifyModalVisible();
  await howToPage.btnCloseModal.click();
  await howToPage.verifyModalNotVisible();
});
