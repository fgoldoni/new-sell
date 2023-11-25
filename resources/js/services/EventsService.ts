import {ApiServiceBase} from "@/services/ApiServiceBase";

export default class EventsService extends ApiServiceBase {
    async find(id: string): Promise<any> {
        return await this.call<any>(`/events/${id}`);
    }
}
