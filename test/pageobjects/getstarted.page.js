const find = require('appium-flutter-finder');
const assert = require('assert');

class GetStartedPage {

    async landingPageScreens() {
        try {
            await driver.executeScript('mobile: alert', {action: 'accept', buttonLabel: 'Allow'});
        } catch (e) {
            console.log('No alert found to accept');
        }

        const skipButton = find.byText('Skip');

        // Verify and click the Next button
        assert.strictEqual(await driver.getElementText(skipButton), 'Skip');
        await driver.elementClick(skipButton);

        const startButton = find.byText('Start');
        assert.strictEqual(await driver.getElementText(startButton), 'Start');
        await driver.elementClick(startButton);
    }

}

module.exports = new GetStartedPage();