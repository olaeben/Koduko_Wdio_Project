const find = require('appium-flutter-finder');
const assert = require('assert');
const { format } = require('date-fns');

class HomePage{

    async dashboardPage() {
        // Determine the greeting based on the time of day
        const currentHour = new Date().getHours();
        let greeting;
        if (currentHour < 12) {
            greeting = 'Good Morning 👋';
        } else if (currentHour < 17) {
            greeting = 'Good Afternoon 👋';
        } else {
            greeting = 'Good Evening 👋';
        }

        // Find the Text element with the greeting and assert it matches the expected greeting
        const greetingTextFinder = find.byText(greeting);
        assert.strictEqual(await driver.getElementText(greetingTextFinder), greeting);

        // Format and verify the displayed date
        const formattedDate = format(new Date(), 'EEEE, MMMM d');
        const dateTextFinder = find.byText(formattedDate);
        assert.strictEqual(await driver.getElementText(dateTextFinder), formattedDate);
    }

}

module.exports = new HomePage();