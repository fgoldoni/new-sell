import {ApiServiceBase} from "@/services/ApiServiceBase";

export default class TicketsService extends ApiServiceBase {
    async get(): Promise<any> {
        return await this.call<any>(`/tickets`);
    }
}
