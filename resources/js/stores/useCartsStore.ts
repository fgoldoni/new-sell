import { defineStore } from "pinia";
import { ref } from "vue";
import { useApi } from "@/composable/useApi";
import ApiError from "@/models/ApiError";
import { Cart, CartItem, CartPayload } from "@/types/carts";
import { Ticket } from "@/models/Ticket";
import { find } from "lodash";
import { usePage } from "@inertiajs/vue3";

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
            reset: false,
        });
        const paypalItems = () => {
            return cart.value?.items.map((item) => ({
                name: item.name,
                quantity: item.quantity,
                unit_amount: {
                    value: item.price_with_conditions,
                    currency_code: usePage().props.team.currency.code,
                },
            }));
        };

        const paypalCoupon = () => {
            let couponAmount = 0;

            for (const [key, value] of Object.entries(
                cart.value?.cart_total_conditions,
            )) {
                couponAmount += value.amount;
            }

            return couponAmount;
        };

        const paypalPurchaseUnits = () => {
            return {
                purchase_units: [
                    {
                        description: "description",
                        items: paypalItems(),
                        amount: {
                            value: cart.value?.total,
                            currency_code: usePage().props.team.currency.code,
                            breakdown: {
                                item_total: {
                                    value: cart.value?.sub_total,
                                    currency_code:
                                        usePage().props.team.currency.code,
                                },
                                discount: {
                                    currency_code:
                                        usePage().props.team.currency.code,
                                    value: `${paypalCoupon()}`,
                                },
                            },
                        },
                    },
                ],
            };
        };

        const updateQuantity = async (quantity: number) => {
            if (quantity <= 0) {
                updatePayload("quantity", quantity);
                await destroy("ticket-" + item.value?.id);
            }
            if (quantity > 0) {
                updatePayload("quantity", quantity);
                await store(payload.value);
            }
        };
        const updatePayload = (
            key: string,
            value?: string | number | null | boolean,
        ) => (payload.value[key] = value);

        const destroy = async (id: string) => {
            try {
                await api.carts
                    .destroy(id)
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
            paypalPurchaseUnits,
            updatePayload,
            updateQuantity,
            store,
            destroy,
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
