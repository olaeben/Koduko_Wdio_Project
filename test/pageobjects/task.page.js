const find = require('appium-flutter-finder');
const assert = require('assert');

class TasksPage {

    async tasksUI() {
        
        const navigationBarFinder = find.byType('NavigationBar');
        const tasksIconFinder = find.descendant({
            of: navigationBarFinder,
            matching: find.byText('Tasks'),
        });
        await driver.elementClick(tasksIconFinder);

        // Verify the "My Task" text
        const myTaskText = find.byText('My Task');
        assert.strictEqual(await driver.getElementText(myTaskText), 'My Task');

        const createNewTaskButton = find.byText('Create One');
        await driver.elementClick(createNewTaskButton);
        await driver.execute('flutter:waitFor', find.byType('TextField'));

        // Enter task details
        const taskInputField = find.byType('TextField');
        await driver.elementSendKeys(taskInputField, 'PR Review');

        const nextTaskButton = find.byText('Next');
        assert.strictEqual(await driver.getElementText(nextTaskButton), 'Next');
        await driver.elementClick(nextTaskButton);

        // Verify and select task duration
        const selectDurationText = find.byText('Select a Duration');
        assert.strictEqual(await driver.getElementText(selectDurationText), 'Select a Duration');
        
        const durationOption = find.byText('30 mins');
        await driver.elementClick(durationOption);

        // Navigate to the next step
        const nextDurationButton = find.byText('Next');
        assert.strictEqual(await driver.getElementText(nextDurationButton), 'Next');
        await driver.elementClick(nextDurationButton);

        // Verify and pick a color
        const colorPickerText = find.byText('Pick a Color');
        assert.strictEqual(await driver.getElementText(colorPickerText), 'Pick a Color');
        
        const firstColorContainer = find.descendant({
            of: find.byType('Wrap'),
            matching: find.byType('AnimatedContainer'),
            firstMatchOnly: true,
        });
        await driver.elementClick(firstColorContainer);

        // Complete task creation
        const doneButton = find.byText('Done');
        assert.strictEqual(await driver.getElementText(doneButton), 'Done');
        await driver.elementClick(doneButton);

        // Verify the created task
        const createdTask = find.byText('PR Review');
        assert.strictEqual(await driver.getElementText(createdTask), 'PR Review');
    }

}

module.exports = new TasksPage();