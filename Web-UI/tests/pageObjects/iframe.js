const { expect } = require('@playwright/test');

class Iframe {
    constructor(page) {
        this.page = page;
        this.iframe = this.page.frameLocator('#iframeResult');;
    }

    async iframeFillFieldById(text, id) {
        await this.iframe.locator(id).fill(text);
    }

    async iframeClickSubmit() {
        await this.iframe.locator('[type="submit"]').click();
    }

    async iframeVerifyAnswer(text) {
        await expect(this.iframe.locator('div.w3-container')).toHaveText(text);
    }
}

module.exports = { Iframe }