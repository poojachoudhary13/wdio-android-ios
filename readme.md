## Getting Started



## Test Framework

- This Framework supports both android and iOS mobile app automation.
- This Framework supports parallel execution for iOS and android.
- This Framework is totally compatible with Jenkins.
- This Framework is a data driven framework.
- This Framework supports runtime config based execution


## Pre-requisites
- Java is installed and JAVA_HOME is set-up
- Node is installed https://changelog.com/posts/install-node-js-with-homebrew-on-os-x
- For Android - Android sdk and platform-tools installed. Setup ANDROID_HOME
- For iOS - Xcode, Xocde command line and carthage

## Setup

```sh
npm install
```

## Running Tests
Run all tests. Mocha will look for test folder. If you need to use another folder, please specify it in package.json file.

Note -   
- Please update the mobile device udid before execution in src/config/android.js > config.capabilities > udid
(you can get it by running `adb devices` command in terminal) 
- Have the Linkedin application installed and logged in before execution.
- Enable USB debugging on your mobile and connect via a USB cable to you machine.

To run app test case on android please run :

```sh
npm run android.app
```

Sample config is provided for IOS.

For prallel execution (one android device and one ios simulator) sample config is provided


To generate Allure Report please run :

```sh
npm run report
```

## Assignment Details :
- A Basic framework with above-mentioned capabilities for mobile app
- A sample testcase for android app
- Same testcase can be executed for ios (No need to have two separate test/spec files for Android and iOS)
- Based on the execution command the factory class initialises the android or ios screen classes to get required UI elements

### Test case details - 
- Due to the lack of staging app availability the test case is automated for production app of Linkedin
- Due to security reasons the username and password can not be shared so the testcase runs for an already logged in user scenario
- The scenario automated contains a use case for searching "Gorillas" cpmpany page on Linkedin
- Dummy classes and locators are provided for same scenario in case of iOS app
