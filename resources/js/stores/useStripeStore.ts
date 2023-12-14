import { defineStore } from "pinia";
import { usePage } from "@inertiajs/vue3";
import Stripe from "stripe";
import { upperCase } from "lodash";

export const stripeStore = defineStore("stripeStore", () => {
    const session = async (carts, method = ["card"]) => {
        const stripe = new Stripe(usePage().props.stripe);

        const items = carts.value?.items.map((item) => ({
            quantity: item.quantity,
            price_data: {
                currency: usePage().props.team.currency.code,
                product_data: {
                    name: upperCase(item.name),
                },
                unit_amount: item.price_with_conditions * 100,
            },
        }));

        const discounts = [];

        for (const [key, value] of Object.entries(
            carts.value.cart_total_conditions,
        )) {
            discounts.push({
                coupon: key,
            });
        }

        return await stripe.checkout.sessions.create({
            payment_method_types: method,
            mode: "payment",
            discounts: discounts,
            line_items: items,
            success_url: `${route(
                "payments.index",
            )}?session_id={CHECKOUT_SESSION_ID}&order_id=${
                carts.value.id
            }&method=${method[0]}`,
            cancel_url: route("payments.cancel"),
        });
    };

    return {
        session,
    };
});
