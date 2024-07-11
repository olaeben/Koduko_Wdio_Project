# Koduko App Automation

Koduko is a Habit Tracker Application made with Flutter. It's an open-source and free app where you can manage your daily or weekly habits, built by MAZAHIR NAJMI (https://github.com/Mazahir26/koduko).

This project contains detailed instructions on setting up the development environment, running the app, and automating tests using WebdriverIO, 
Appium, and Mocha with the Page Object Model (POM) for both Android and iOS versions, along with generating reports using Allure Report.

## Prerequisites

### Local Machine

#### General Requirements

- **Node.js** (v18.x or later)
- **Java Development Kit (JDK)** (v8 or later)
- **Appium** (v2.0 or later)
- **Allure Commandline** (v2.29.0 or later)

#### iOS Specific Requirements

- **macOS** (latest version)
- **Xcode** (latest version)
- **Xcode Command Line Tools** (install via `xcode-select --install`)
- **CocoaPods** (install via `sudo gem install cocoapods`)

#### Android Specific Requirements

- **Android Studio** (latest version)
- **Android SDK** (configure SDK paths)
- **Android Virtual Device (AVD)** (set up an emulator)

### Jenkins Server

#### General Requirements

- **Jenkins** (latest version)
- **Node.js Plugin** for Jenkins
- **Allure Jenkins Plugin**

## Setup

### Cloning the Repository

Clone the repository to your local machine or Jenkins server:

```sh
git clone https://github.com/yourusername/Koduko_Wdio_Project.git
cd Koduko_Wdio_Project
```

## Installing Dependencies
#### Install the necessary npm dependencies

```sh
npm install
```

## Setting Up Allure
#### Ensure Allure is installed and added to your PATH:

```sh
allure --version
```

#### If Allure is not installed, you can install it via npm:

```sh
npm install -g allure-commandline
```

## Running Tests
### Local Machine
### iOS

#### Boot the iOS Simulator:

```sh
xcrun simctl boot "iPhone 15 Plus"
open -a Simulator
```

#### Run the tests:

```sh
npx wdio run wdio.iOS.conf.js
```

### Android

#### Start the Android Emulator:

```sh
emulator -avd <your_avd_name>
```

#### Run the tests:

```sh
npx wdio run wdio.Android.conf.js
```
### Test Reports

Test results and reports are generated using Allure Report. To generate the test report:

1. Ensure you have Allure Commandline installed:

```bash
npm install -g allure-commandline --save-dev
```

2. Run the tests to generate results in the `allure-results` directory.
3. Generate the Allure report:

```bash
allure generate allure-results --clean -o allure-report
```

4. Open the Allure report:

```bash
allure open allure-report
```

## Running on Jenkins

### Create a New Project in Jenkins
1. Open Jenkins Dashboard: Log in to your Jenkins instance.
2. Create a New Item: Click on New Item in the left-hand menu.
3. Enter Project Name: Give your project a name.
4. Choose Project Type: Select Pipeline and click OK.
5.  Configure Pipeline: In the project configuration page, scroll down to the Pipeline section.

### Add Allure Command Line to PATH
1. Global Tool Configuration:
2. Go to Manage Jenkins > Global Tool Configuration.
3. Scroll down to Allure Commandline and click Add Allure Commandline.
4. Set the name (e.g., Allure) and specify the installation path if necessary.

### Environment Variable:
1. Go to Manage Jenkins > Configure System.
2. Under Global Properties, check the Environment variables box and click Add.
3. Add the following environment variable:
4. Name: PATH
5. Value: /path/to/allure/bin:$PATH
6. Ensure the path to Allure is correct and adjusted to your specific installation.

#### Note: Ensure the Node version is set correctly in Jenkins

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit your changes
5. Push to the branch
6. Open a pull request


This README provides a comprehensive overview and guide to setting up, running, and testing the Koduko with WebdriverIO.
