import { defineStore } from "pinia";
import { usePage } from "@inertiajs/vue3";
import Stripe from "stripe";
import { upperCase } from "lodash";
import { Cart, CartItem, Mode } from "@/types/carts";

export const useStripeStore = defineStore("stripeStore", () => {
    const session = async (cart: Cart, method: Mode[]) => {
        const stripe = new Stripe(usePage().props.team.stripe);

        const items = cart?.items.map((item: CartItem) => ({
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

        for (const [key, value] of Object.entries(cart.cart_total_conditions)) {
            discounts.push({
                coupon: key,
            });
        }

        return await stripe.checkout.sessions.create({
            payment_method_types: method,
            mode: "payment",
            discounts: discounts,
            line_items: items,
            success_url: `${route("orders.card", {
                id: cart.id,
            })}?reference={CHECKOUT_SESSION_ID}&mode=${method[0]}`,
            cancel_url: route("orders.cancel"),
        });
    };

    return {
        session,
    };
});
