import { defineStore } from "pinia";
import { ref } from "vue";
import { useApi } from "@/composable/useApi";
import ApiError from "@/models/ApiError";
import { Cart, CartItem, CartPayload } from "@/types/carts";
import { find } from "lodash";
import { Ticket } from "@/models/Ticket";

export const useCartsStore = defineStore(
    "carts",
    () => {
        const api = useApi();

        const cart = ref<Cart | null>(null);
        const cartItem = ref<CartItem | null>(null);
        const item = ref<Ticket>();

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
            cartItem.value = findItem("ticket", item.value.id);
        };
        const findItem = (prefix: string, id: string): CartItem =>
            find(
                cart.value?.items,
                (c: CartItem) => c.id === `${prefix}-${id}`,
            );

        return { store, cart, item, setItem, cartItem, findItem, update };
    },
    {
        persist: true,
    },
);
