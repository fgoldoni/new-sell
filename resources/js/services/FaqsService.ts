import { ApiServiceBase } from "@/services/ApiServiceBase";

export default class FaqsService extends ApiServiceBase {
    async get(): Promise<any> {
        return await this.call<any>(`/faqs`);
    }
}
