const find = require('appium-flutter-finder');
const assert = require('assert');

class SettingsPage {

    async settingsUI() {

        const navigationBarFinder = find.byType('NavigationBar');
        const settingsIconFinder = find.descendant({
            of: navigationBarFinder,
            matching: find.byText('Settings'),
        });
        await driver.elementClick(settingsIconFinder);

        
        const pageTitleFinder = find.descendant({
            of: find.byType('ListView'), 
            matching: find.byText('Settings'),
        });
        assert.strictEqual(await driver.getElementText(pageTitleFinder), 'Settings');

        const darkModeTextFinder = find.byText('Dark Mode');
        assert.strictEqual(await driver.getElementText(darkModeTextFinder), 'Dark Mode');
        for (let i = 0; i < 4; i++) {
            await driver.elementClick(darkModeTextFinder);
            await driver.pause(500); 
        } 
    }



}

module.exports = new SettingsPage();