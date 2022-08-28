const { test } = require('@playwright/test');

import { HomePage } from "./pageObjects/homePage";
import { ColorsPage } from "./pageObjects/colorsPage"

test('Verify Color Table Values', async ({ page }) => {
  const homePage = new HomePage(page);
  const colorsPage = new ColorsPage(page);

  await homePage.gotoHome();

  await homePage.clickNavItemByTitle('Tutorials');
  await homePage.clickBarItemByText('Learn Colors');
  await homePage.clickSideBarItemByHref('colors_groups.asp');

  await homePage.verifyUrl(/.*colors_groups.asp/);

  const colorsToVerify = [
    ['000000', 'Black'],
    ['800000', 'Maroon'],
    ['FFD700', 'Gold'],
    ['0000FF', 'Blue'],
    ['C0C0C0', 'Silver'],
    ['8A2BE2', 'BlueViolet'],
    // ['00FFFF', 'Cyan'] // Cor duplicada no site
  ];

  for (let i = 0; i < colorsToVerify.length; i++) {
    await colorsPage.verifyColorTableItems(colorsToVerify[i][0], colorsToVerify[i][1]);
  }
});