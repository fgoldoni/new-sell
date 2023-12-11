import { ApiServiceBase } from "@/services/ApiServiceBase";
import { CartPayload } from "@/types/carts";

export default class CartsService extends ApiServiceBase {
    async store(payload: CartPayload): Promise<any> {
        return await this.call<any>(`/carts`, {
            method: "post",
            body: payload,
        });
    }

    async destroy(id: string): Promise<any> {
        return await this.call<any>(`/carts/${id}`, {
            method: "delete",
        });
    }

    async get(): Promise<any> {
        return await this.call<any>(`/carts`);
    }
}
