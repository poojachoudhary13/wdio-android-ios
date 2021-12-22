import Base from '../../base';
import Search from "../index"
import { SearchScreenSelectorsADR } from "./selectors"
import {testData} from "../../../test-data/linkedin";

export default class SearchAppScreenADR extends Base implements Search {

    searchCompany(): void {
        this.getElement(SearchScreenSelectorsADR.searchEditText).click()
        this.getElement(SearchScreenSelectorsADR.searchEditText).setValue(testData.companyName)
        browser.hideKeyboard()
    }

    clickCompany(name?: string): void {
        this.getElement(SearchScreenSelectorsADR.searchResultText).click()
    }

    isCompanyFound(): boolean {
        if (this.waitFor(SearchScreenSelectorsADR.searchResultText, 5)
            && this.waitFor(SearchScreenSelectorsADR.searchResultSubText, 5)) {
            return true
        } else return false
    }
}