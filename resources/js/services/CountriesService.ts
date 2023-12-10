import { ApiServiceBase } from "@/services/ApiServiceBase";

export default class CountriesService extends ApiServiceBase {
    async get(): Promise<any> {
        return await this.call<any>("/countries");
    }
}
