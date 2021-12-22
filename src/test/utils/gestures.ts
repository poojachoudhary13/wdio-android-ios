import * as constants from "../constants";

export function swipeUp(elem: WebdriverIO.Element) {
    let x = elem.getLocation('x')
    let y = elem.getLocation("y")

    browser.touchPerform([{
        action: 'press',
        options: {
            x: x,
            y: y
        }
    }, { action: 'wait', options: { ms: 500 } }, {
        action: 'moveTo',
        options: {
            x: x,
            y: y / 2
        }
    }, {
        action: 'release'
    }]);
}

export function switchToWebView() {
    browser.pause(constants.WAIT_TIMEOUT)
    let contexts = browser.getContexts()
    if (contexts.length > 1) {
        browser.switchContext(contexts[1])
    } else {
        console.log("No webview found")
    }
}

export function switchToNativeContext() {
    browser.pause(constants.WAIT_TIMEOUT)
    let contexts = browser.getContexts()
    browser.switchContext(contexts[0])
}