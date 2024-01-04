import { defineStore } from "pinia";
import { computed, ref } from "vue";
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

        const cart = ref<Cart | {}>({});

        const item = ref<Ticket | {}>({});
        const processing = ref<boolean>(false);
        const paiements = computed(() => {
            let data = [];

            if (usePage().props.team.stripe) {
                data.push({
                    id: "card",
                    title: "Credit/Debit/ATM Card",
                    images: [
                        "/images/payments/visa.png",
                        "/images/payments/master.png",
                        "/images/payments/ae.png",
                    ],
                });
            }

            if (usePage().props.team.sofort) {
                data.push({
                    id: "sofort",
                    title: "Sofort",
                    images: ["/images/payments/sofort.png"],
                });
            }

            if (usePage().props.team.klarna) {
                data.push({
                    id: "klarna",
                    title: "Klarna",
                    images: ["/images/payments/klarna.svg"],
                });
            }

            if (usePage().props.team.notch_pay) {
                data.push({
                    id: "notchPay",
                    title: "Orange | MTN",
                    images: [
                        "/images/payments/cm.orange.png",
                        "/images/payments/cm.mtn.png",
                    ],
                });
            }

            if (usePage().props.team.terminal) {
                data.push({
                    id: "terminal",
                    title: "Terminal",
                    images: ["/images/payments/terminal.png"],
                });
            }

            return data;
        });

        let payload = ref<CartPayload>({
            id: "",
            model: "",
            quantity: 1,
            message: "",
            entry: "",
            reset: false,
        });

        const reset = async () => {
            item.value = null;
            payload.value = {
                id: "",
                model: "",
                quantity: 1,
                message: "",
                entry: "",
                reset: false,
            };
            await handle();
        };

        const handle = async () => {
            try {
                await api.carts
                    .get()
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
                processing.value = true;
                await api.carts
                    .store(payload)
                    .then((response: any) => {
                        cart.value = response.data as Cart;
                    })
                    .catch((error: any) => {
                        throw new ApiError(error);
                    })
                    .finally(async () => {
                        processing.value = false;
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
            processing,
            paypalPurchaseUnits,
            updatePayload,
            updateQuantity,
            store,
            destroy,
            payload,
            cart,
            paiements,
            reset,
            item,
            setItem,
            findItem,
        };
    },
    {
        persist: true,
    },
);
