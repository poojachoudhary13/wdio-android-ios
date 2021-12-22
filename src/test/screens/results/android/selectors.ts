const appPackage = browser.capabilities.appPackage;
import { testData } from "../../../test-data/linkedin"

export const ResultsScreenSelectorsADR = {
    companyTitle: `android=new UiSelector().resourceId("${appPackage}:id/search_results_hero_entity_title")`,
    companySubTitle: `android=new UiSelector().resourceId("${appPackage}:id/search_results_hero_entity_primary_subtitle").text("${testData.companySubTitle}")`,
    // companyTitle: `android=new UiSelector().resourceId("${appPackage}:id/search_results_kcard_v2_hero_entity_title")`,
    // companySubTitle: `android=new UiSelector().resourceId("${appPackage}:id/search_results_kcard_v2_hero_entity_primary_subtitle").text("${testData.companySubTitle}")`,
    primaryAction: `android=new UiSelector().resourceId("${appPackage}:id/search_results_kcard_v2_hero_entity_primary_action").text("${testData.primaryAction}")`,
    secondaryAction: `android=new UiSelector().resourceId("${appPackage}:id/search_results_kcard_v2_hero_entity_secondary_action").text("${testData.secondaryAction}")`
};