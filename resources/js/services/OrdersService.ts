import { ApiServiceBase } from "@/services/ApiServiceBase";

export default class OrdersService extends ApiServiceBase {
    async get(): Promise<any> {
        return await this.call<any>(`/orders`);
    }

    async store(
        id: string,
        mode: string,
        currency: string,
        total: string,
        reference: string,
        status: string,
    ): Promise<any> {
        return await this.call<any>(`/orders`, {
            method: "post",
            body: {
                id: id,
                mode: mode,
                currency: currency,
                total: total,
                reference: reference,
                status: status,
            },
        });
    }
}
