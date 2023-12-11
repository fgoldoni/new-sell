import { ApiServiceBase } from "@/services/ApiServiceBase";

export default class OrdersService extends ApiServiceBase {
    async store(id: string, method: string, reference?: string): Promise<any> {
        return await this.call<any>(`/orders`, {
            method: "post",
            body: { id: id, method: method, reference: reference },
        });
    }
}
