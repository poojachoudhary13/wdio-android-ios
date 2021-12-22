
import Main from "./main/index"
import MainAppScreenADR from "./main/android/main"
import MainAppScreenIOS from "./main/ios/main"
import Search from "./search/index"
import SearchAppScreenADR from "./search/android/search"
import SearchAppScreenIOS from "./search/ios/search"
import ResultsAppScreenADR from "./results/android/results";
import ResultsAppScreenIOS from "./results/ios/results";
import Results from "./results";

/**
 * All the pages that are available over the App
 * Android and iOS pages are to be implemented as per the contract of the respective page
 * Respective implementation will be picked up dynamically over the runtime
 * @export
 */
export default class PageFactory {
    mainScreen: Main = (browser.isAndroid) ? new MainAppScreenADR : new MainAppScreenIOS
    searchScreen: Search = (browser.isAndroid) ? new SearchAppScreenADR : new SearchAppScreenIOS
    resultsScreen: Results = (browser.isAndroid) ? new ResultsAppScreenADR() : new ResultsAppScreenIOS()
}
