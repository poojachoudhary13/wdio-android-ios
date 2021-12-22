import {
    DEFAULT_TIMEOUT
} from '../constants';

export default class Base {

    /**
     * Wait for the element to be visible
     */
    waitForIsShown(selector: string) {
        $(selector).waitForDisplayed(DEFAULT_TIMEOUT);
    }

    /**
    * Returns the required element
    */
    getElement(selector: string) {
        this.waitForIsShown(selector)
        return $(selector)
    }

    waitFor(selector: string, timeout: number): boolean {
        try {
            $(selector).waitForDisplayed(timeout * 1000, false, "Element is still not visible. Tried for " + timeout + "seconds")
            return true;
        } catch (e) {
            console.log("Exception: "+ e)
            return false;
        }
    }


}