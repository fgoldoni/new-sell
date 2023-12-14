import { defineStore } from "pinia";
import { router, usePage } from "@inertiajs/vue3";
import { loadScript } from "@paypal/paypal-js";
import { useOrdersStore } from "@/stores/useOrdersStore";
import { useWizardStore } from "@/stores/useWizardStore";

export const usePaypalStore = defineStore("paypalStore", () => {
    const ordersStore = useOrdersStore();
    const wizard = useWizardStore();
    const isNotEnable = () => {
        return (
            !usePage().props.team.paypal ||
            !document.getElementById("paypal-button")
        );
    };

    const loadPaypal = async () => {
        return await loadScript({
            "client-id": usePage().props.team.paypal,
            currency: usePage().props.team.currency.code,
        });
    };

    const setButtons = async (paypal, purchaseUnits, cart) => {
        await paypal
            .Buttons({
                style: {
                    layout: "horizontal",
                    color: "gold",
                    shape: "rect",
                    label: "paypal",
                    tagline: false,
                    height: 50,
                },
                // Sets up the transaction when a payment button is clicked
                createOrder: (data, actions) => {
                    return actions.order.create(purchaseUnits);
                },
                // Finalize the transaction after payer approval
                onApprove: async (data, actions) => {
                    const capture = await actions.order.capture();

                    await ordersStore.store(
                        cart.value.id,
                        "paypal",
                        capture.purchase_units[0].amount.currency_code,
                        capture.purchase_units[0].amount.value,
                        capture.id,
                    );

                    wizard.reset();

                    return router.get(
                        route("orders.success", cart.value.id),
                        {},
                        { replace: true },
                    );
                },
                onError: (data, actions) => {
                    return (err) => {
                        console.error(err);
                        return router.get(route("home"), {}, { replace: true });
                    };
                },
            })
            .render("#paypal-button");
    };

    return {
        isNotEnable,
        setButtons,
        loadPaypal,
    };
});
