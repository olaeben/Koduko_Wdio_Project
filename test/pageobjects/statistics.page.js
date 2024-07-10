const find = require('appium-flutter-finder');
const assert = require('assert');

class StatisticsPage {
    async moreStats() {
        const moreStats = find.byText('More Stats');
        assert.strictEqual(await driver.getElementText(moreStats), 'More Stats');
        await driver.elementClick(moreStats);

        const statisticsTitle = find.byText('Statistics');
        assert.strictEqual(await driver.getElementText(statisticsTitle), 'Statistics');

        const backIcon = find.descendant({ 
            of: find.byType('Row'), 
            matching: find.byType('IconButton')
        });
        await driver.elementClick(backIcon);
    }
}

module.exports = new StatisticsPage();

