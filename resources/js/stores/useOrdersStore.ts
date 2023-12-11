import { defineStore } from "pinia";
import { ref } from "vue";
import { Order } from "@/types";
import { useApi } from "@/composable/useApi";

export const useOrdersStore = defineStore(
    "ordersStore",
    () => {
        const api = useApi();
        const order = ref<Order>();
        const orders = ref<Order[]>();

        const store = async (
            id: string,
            method: string,
            reference?: string,
        ): Promise<any> => {
            await api.orders.store(id, method, reference);
        };

        return {
            order,
            orders,
            store,
        };
    },
    {
        persist: true,
    },
);
