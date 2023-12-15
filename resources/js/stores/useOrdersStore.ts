import { defineStore } from "pinia";
import { ref } from "vue";
import { Order } from "@/types";
import { useApi } from "@/composable/useApi";
import ApiError from "@/models/ApiError";
import { useCartsStore } from "@/stores/useCartsStore";
import { useTicketsStore } from "@/stores/useTicketsStore";

export const useOrdersStore = defineStore(
    "orders",
    () => {
        const cartsStore = useCartsStore();
        const ticketsStore = useTicketsStore();
        const api = useApi();
        const order = ref<Order>();
        const orders = ref<Order[]>();

        const reset = async () => (order.value = null);

        const store = async (
            id: string,
            mode: string,
            currency: string,
            total: string,
            reference: string,
            status: string,
        ): Promise<any> => {
            await api.orders
                .store(id, mode, currency, total, reference, status)
                .then(async (response: any) => {
                    order.value = response.data as Order;
                })
                .catch((error: any) => {
                    throw new ApiError(error);
                });
        };

        return {
            order,
            orders,
            reset,
            store,
        };
    },
    {
        persist: true,
    },
);
