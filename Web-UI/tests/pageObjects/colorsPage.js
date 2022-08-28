const { expect } = require('@playwright/test');

class ColorsPage {
    constructor(page) {
        this.page = page;
    }

    async verifyColorTableItems(hex, colorName) {
        const row = this.page.locator('[href="color_tryit.asp?hex=' + hex + '"]').locator('..').locator('..');
        expect(await row.count()).toEqual(1);
        await expect(row.locator('[href="color_tryit.asp?color=' + colorName + '"]')).toHaveText(colorName);
        expect(await row.locator('[bgcolor="#' + hex + '"]').isVisible()).toBeTruthy();
    }
}

module.exports = { ColorsPage }