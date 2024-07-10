const find = require('appium-flutter-finder');
const assert = require('assert');

class RoutinesPage {
    async routinesUI() {
        const navigationBarFinder = find.byType('NavigationBar');
        const routinesIconFinder = find.descendant({
            of: navigationBarFinder,
            matching: find.byText('Routines'),
        });
        await driver.elementClick(routinesIconFinder);

        // Click + Icon to Add a Routine
        const addNewRoutine = find.byType('FloatingActionButton');
        await driver.elementClick(addNewRoutine);

        const createRoutineText = find.byText('Create a Routine');
        assert.strictEqual(await driver.getElementText(createRoutineText), 'Create a Routine');

        await driver.execute('flutter:waitFor', find.byType('TextField'));

        // Enter task details
        const routineInputField = find.byType('TextField');
        await driver.elementSendKeys(routineInputField, 'Dev Mode');

        const nextButton = find.byText('Next');
        assert.strictEqual(await driver.getElementText(nextButton), 'Next');
        await driver.elementClick(nextButton);

        const selectTaskText = find.byText('Select a task and it appears here!');
        assert.strictEqual(await driver.getElementText(selectTaskText), 'Select a task and it appears here!');

        // Add Tasks to Routine
        const createdTask = find.byText('PR Review');
        assert.strictEqual(await driver.getElementText(createdTask), 'PR Review');
        const addTaskRoutine = find.byText('ADD');
        await driver.elementClick(addTaskRoutine);

        const selectedTask = find.byText('Selected (1)');
        assert.strictEqual(await driver.getElementText(selectedTask), 'Selected (1)');

        // Click Next Button
        const nextRoutineButton = find.byText('Next');
        assert.strictEqual(await driver.getElementText(nextRoutineButton), 'Next');
        await driver.elementClick(nextRoutineButton);

        const repeatButton = find.byText('Only on');
        await driver.elementClick(repeatButton);

        // Routine Days
        const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

        for (const day of daysOfWeek) {
            const routineDay = find.byText(day);
            await driver.elementClick(routineDay);
        }


        // Select Time
        const selectTimeRow = find.descendant({
            of: find.byType('ListView'),
            matching: find.byType('Row')
          });
      

        const timeButton = find.descendant({ 
            of: selectTimeRow, 
            matching: find.byType('ElevatedButton')
        });
        await driver.elementClick(timeButton);
        
        // Confirm the time selection
        const okButton = find.byText('OK');
        await driver.elementClick(okButton);

        const createRoutineDone = find.byText('Done');
        assert.strictEqual(await driver.getElementText(createRoutineDone), 'Done');
        await driver.elementClick(createRoutineDone);

        // Today's Routine
        const todaysRoutines = find.byText("Today's Routines");
        assert.strictEqual(await driver.getElementText(todaysRoutines), "Today's Routines");

        const completedRoutine = find.byText('Completed 0 out of 1')
        assert.strictEqual(await driver.getElementText(completedRoutine), 'Completed 0 out of 1');

        // Navigate back home
        const homeIconFinder = find.descendant({
            of: navigationBarFinder,
            matching: find.byText('Home'),
        });
        await driver.elementClick(homeIconFinder);
        await browser.pause(2000);

    }
}

module.exports = new RoutinesPage();



