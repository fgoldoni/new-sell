import { ApiServiceBase } from "@/services/ApiServiceBase";
import { usePage } from "@inertiajs/vue3";

export default class NotchPayService extends ApiServiceBase {
    async post(
        email: string,
        amount: string,
        currency: string,
        description: string,
        reference: string,
        callback: string,
    ): Promise<any> {
        return await this.call<any>(`/payments/initialize`, {
            method: "post",
            baseURL: `${usePage().props.notchPayUrl}`,
            body: {
                email: email,
                amount: amount,
                currency: currency,
                description: description,
                reference: reference,
                callback: callback,
            },
            headers: {
                Authorization: usePage().props.team.notch_pay || null,
            },
        });
    }
}
