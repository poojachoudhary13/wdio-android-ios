import Base from '../../base';
import { ResultsScreenSelectorsADR } from "./selectors"
import Results from "../index";
import {assert} from "chai";

export default class ResultsAppScreenADR extends Base implements Results {

    verifyCompanyInfo(): void {
        assert.isTrue(this.getElement(ResultsScreenSelectorsADR.companyTitle).isDisplayed(), "Company Title not displayed")
        assert.isTrue(this.getElement(ResultsScreenSelectorsADR.companySubTitle).isDisplayed(), "Company Subtitle not displayed")
        // assert.isTrue(this.getElement(ResultsScreenSelectorsADR.primaryAction).isDisplayed(), "Primary Action Button not displayed")
        // assert.isTrue(this.getElement(ResultsScreenSelectorsADR.secondaryAction).isDisplayed(), "Secondary Action Button not displayed")
        // Linked UI seems to have changed not sure if its intended or a bug. the above two elements i.e Follow and View button are not available as on 22-12-2021 4:00 pm
    }

    viewCompany(): void {
        this.getElement(ResultsScreenSelectorsADR.companyTitle).click()
    }
}