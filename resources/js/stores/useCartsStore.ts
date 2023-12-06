import { defineStore } from "pinia";
import { ref } from "vue";
import { useApi } from "@/composable/useApi";
import ApiError from "@/models/ApiError";
import { CartPayload } from "@/types/carts";

export const useCartsStore = defineStore(
    "carts",
    () => {
        const api = useApi();

        const cart = ref(null);

        const store = async (payload: CartPayload) => {
            try {
                await api.carts
                    .store(payload)
                    .then((response: any) => {
                        cart.value = response.data;
                    })
                    .catch((error: any) => {
                        throw new ApiError(error);
                    });
            } catch (error) {
                console.error(error);
            }
        };

        return { store };
    },
    {
        persist: true,
    },
);
