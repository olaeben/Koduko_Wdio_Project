const allureReporter = require('@wdio/allure-reporter').default;
const GetStarted = require('../pageobjects/getstarted.page');
const Home = require('../pageobjects/home.page');
const Statistics = require('../pageobjects/statistics.page');
const Settings = require('../pageobjects/settings.page');
const Tasks = require('../pageobjects/task.page');
const Routines = require('../pageobjects/routine.page');


describe('Koduko Habit Tracker Application', () => {
    it('Landing Page', async () => {
        await GetStarted.landingPageScreens();
    });

    it('Homepage Screen', async () => {
        await Home.dashboardPage();
    })

    it('View Statistics Screen', async () => {
        await Statistics.moreStats();
    })

    it('Change System UI to Dark Mode in Settings Screen', async () => {
        await Settings.settingsUI();
    });

    it('Create New Task in Tasks Screen', async () => {
        await Tasks.tasksUI();
    });

    it('Create New Routine in Routines Screen', async () => { 
        await Routines.routinesUI();
    });
});
