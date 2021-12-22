const appPackage = browser.capabilities.appPackage;
import { testData } from "../../../test-data/linkedin"

export const SearchScreenSelectorsADR = {
    searchEditText: `android=new UiSelector().resourceId("${appPackage}:id/search_bar_edit_text")`,
    backButton: `android=new UiSelector().xpath("//android.widget.ImageButton[@content-desc="Back"]"))`,
    searchResultText: `android=new UiSelector().resourceId("${appPackage}:id/search_typeahead_entity_text").text("${testData.companyName}")`,
    searchResultSubText: `android=new UiSelector().resourceId("${appPackage}:id/search_typeahead_entity_subtext").text("${testData.companyType}")`,
};
