import { defineStore } from "pinia";
import { ref } from "vue";
import { useApi } from "@/composable/useApi";
import ApiError from "@/models/ApiError";
import { Cart, CartItem, CartPayload } from "@/types/carts";
import { Ticket } from "@/models/Ticket";
import { find } from "lodash";

export const useCartsStore = defineStore(
    "carts",
    () => {
        const api = useApi();

        const cart = ref<Cart | null>(null);
        const item = ref<Ticket | null>(null);
        let payload = ref<CartPayload>({
            id: "",
            model: "",
            quantity: 1,
            message: "",
            entry: "",
            reset: true,
        });

        const updateQuantity = async (quantity: number) => {
            updatePayload("quantity", quantity);
            await store(payload.value);
        };
        const updatePayload = (key: string, value?: string | number | null) =>
            (payload.value[key] = value);

        const store = async (payload: CartPayload) => {
            try {
                await api.carts
                    .store(payload)
                    .then((response: any) => {
                        cart.value = response.data as Cart;
                    })
                    .catch((error: any) => {
                        throw new ApiError(error);
                    });
            } catch (error) {
                console.error(error);
            }
        };

        const setItem = (value: Ticket): void => {
            item.value = value;
        };
        const findItem = (prefix: string, id?: string): CartItem =>
            find(
                cart.value?.items,
                (c: CartItem) => c.id === `${prefix}-${id}`,
            );

        return {
            updatePayload,
            updateQuantity,
            store,
            payload,
            cart,
            item,
            setItem,
            findItem,
        };
    },
    {
        persist: true,
    },
);
