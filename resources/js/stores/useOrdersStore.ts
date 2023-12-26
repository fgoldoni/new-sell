import { defineStore } from "pinia";
import { ref } from "vue";
import { Order } from "@/types";
import { useApi } from "@/composable/useApi";
import ApiError from "@/models/ApiError";

export const useOrdersStore = defineStore(
    "orders",
    () => {
        const processing = ref(false);
        const api = useApi();
        const order = ref<Order>();
        const orders = ref<Order[]>();

        const reset = async () => (order.value = null);

        const get = async (): Promise<any> => {
            processing.value = true;

            await api.orders
                .get()
                .then(async (response: any) => {
                    orders.value = response.data as Order[];
                })
                .catch((error: any) => {
                    throw new ApiError(error);
                })
                .finally(() => {
                    processing.value = false;
                });
        };

        const store = async (
            id: string,
            mode: string,
            currency: string,
            total: string,
            reference: string,
            status: string,
        ): Promise<any> => {
            processing.value = true;

            await api.orders
                .store(id, mode, currency, total, reference, status)
                .then(async (response: any) => {
                    order.value = response.data as Order;
                })
                .catch((error: any) => {
                    throw new ApiError(error);
                })
                .finally(() => {
                    processing.value = false;
                });
        };

        const find = async (id: string): Promise<any> => {
            processing.value = true;

            await api.orders
                .find(id)
                .then(async (response: Order) => (order.value = response))
                .catch((error: any) => {
                    throw new ApiError(error);
                })
                .finally(() => {
                    processing.value = false;
                });
        };

        return {
            order,
            processing,
            orders,
            find,
            reset,
            get,
            store,
        };
    },
    {
        persist: true,
    },
);
