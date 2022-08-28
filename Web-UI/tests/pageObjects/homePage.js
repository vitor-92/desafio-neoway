const { expect } = require('@playwright/test');

const baseUrl = 'https://www.w3schools.com/'

class HomePage {
    constructor(page) {
        this.page = page;
    }

    async gotoHome() {
        await this.page.goto(baseUrl);
    }

    async verifyUrl(regex) {
        await expect(this.page).toHaveURL(regex);
    }

    async clickNavItemByTitle(title) {
        await this.page.locator('[title="' + title + '"]').click();
    }

    async clickBarItemByText(text) {
        await this.page.locator('.w3-bar-item:has-text("' + text + '")').click();
    }

    async clickSideBarItemByHref(href) {
        await this.page.locator('[href="' + href + '"]').first().click();
    }

    async verifyTitleText(text) {
        await expect(this.page).toHaveTitle(text);
    }
}

module.exports = { HomePage }