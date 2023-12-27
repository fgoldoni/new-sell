import { ApiServiceBase } from "@/services/ApiServiceBase";

export default class BrandsService extends ApiServiceBase {
    async get(): Promise<any> {
        return await this.call<any>(`/brands`);
    }
}
