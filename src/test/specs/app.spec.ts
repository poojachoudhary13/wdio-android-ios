import PageFactory from "../screens/factory"
import { assert } from "chai"

describe(`Linked In`, () => {
    let pageFactory = new PageFactory()

    before(() => {
        // utils.clearAppData()
        // utils.allowPermissions()
        // commented as i am are using a logged in app otherwise there would be a login everytime
    });

    it('Already logged in user searching for a company', () => {

        assert.isTrue(pageFactory.mainScreen.isMainScreenOpen(), "Main screen is not open. User might not be logged in")
        pageFactory.mainScreen.isSearchIconVisible()
        pageFactory.mainScreen.clickSearch()
        pageFactory.searchScreen.searchCompany()
        assert.isTrue(pageFactory.searchScreen.isCompanyFound(), "Searched company not found")
        pageFactory.searchScreen.clickCompany()
        pageFactory.resultsScreen.verifyCompanyInfo()
        pageFactory.resultsScreen.viewCompany()
    });

    after(() => {
        browser.closeApp()
    })
})