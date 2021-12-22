import Base from '../../base';
import Main from '..';
import { MainScreenSelectorsADR } from "./selectors"

export default class MainAppScreenADR extends Base implements Main {

    isMainScreenOpen(): boolean {
        return this.waitFor(MainScreenSelectorsADR.profileImage, 30)
    }

    isSearchIconVisible(): boolean {
        return this.waitFor(MainScreenSelectorsADR.searchIcon, 30)
    }

    clickSearch(): void {
        this.getElement(MainScreenSelectorsADR.search).click()
    }

}