const { expect } = require('@playwright/test');

class HowToPage {
    constructor(page) {
        this.page = page;
        this.btnOpenModal = this.page.locator(`//button[contains(text(),'Open Modal')]`);
        this.btnCloseModal = this.page.locator('//header/span[1]');
        this.modal = this.page.locator('#id01');
    }

    async verifyModalVisible() {
        expect(await this.modal.isVisible()).toBeTruthy();
    }

    async verifyModalNotVisible() {
        expect(await this.modal.isVisible()).toBeFalsy();
    }
}

module.exports = { HowToPage }