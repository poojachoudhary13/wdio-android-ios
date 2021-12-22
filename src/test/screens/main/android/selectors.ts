const appPackage = browser.capabilities.appPackage;

export const MainScreenSelectorsADR = {
    search: `android=new UiSelector().resourceId("${appPackage}:id/search_bar_text").text("Search")`,
    searchIcon: `android=new UiSelector().resourceId("${appPackage}:id/search_icon")`,
    profileImage: `android=new UiSelector().resourceId("${appPackage}:id/me_launcher")`,
};