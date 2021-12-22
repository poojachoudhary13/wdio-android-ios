import Base from '../../base';
import Search from "../index"

export default class SearchAppScreenIOS extends Base implements Search {

    searchCompany(): void {
        throw new Error("Method not implemented.");
    }

    clickCompany(name?: string): void {
        throw new Error("Method not implemented.");
    }

    isCompanyFound(): boolean {
        throw new Error("Method not implemented.");
    }
}