import { Cart } from "@/types/carts";
import { useStripeStore } from "@/stores/useStripeStore";
import { useNotchPayStore } from "@/stores/useNotchPayStore";
import { useAuthStore } from "@/stores/useAuthStore";
import { useStripeTerminalStore } from "@/stores/useStripeTerminalStore";
import { storeToRefs } from "pinia";
import { Errors } from "@/plugins/errors";
import ApiError from "@/models/ApiError";

const enum Mode {
    CARD = "card",
    KLARNA = "klarna",
    SOFORT = "sofort",
}

export const usePayment = () => {
    const stripeStore = useStripeStore();
    const notchPayStore = useNotchPayStore();
    const authStore = useAuthStore();
    const stripeTerminalStore = useStripeTerminalStore();
    const { user, isAuthenticated } = storeToRefs(authStore);
    const errors = new Errors();

    const onStripe = async (cart: Cart) => {
        try {
            const session = await stripeStore.session(cart, [Mode.CARD]);

            // await window.fbq("track", "InitiateCheckout");

            return window.location.replace(session.url as string);
        } catch (error) {
            errors.onFailed(error);
            console.error(error);
            throw new ApiError(error);
        } finally {
        }
    };

    const onSofort = async (cart: Cart) => {
        try {
            const session = await stripeStore.session(cart, [Mode.SOFORT]);

            // await window.fbq("track", "InitiateCheckout");

            return window.location.replace(session.url as string);
        } catch (error) {
            errors.onFailed(error);
            console.error(error);
            throw new ApiError(error);
        } finally {
        }
    };
    const onKlarna = async (cart: Cart) => {
        try {
            const session = await stripeStore.session(cart, [Mode.KLARNA]);

            // await window.fbq("track", "InitiateCheckout");

            return window.location.replace(session.url as string);
        } catch (error) {
            errors.onFailed(error);
            console.error(error);
            throw new ApiError(error);
        } finally {
        }
    };

    const onNotchPay = async (cart: Cart) => {
        try {
            if (!isAuthenticated.value) return;

            await notchPayStore.initialize(cart, user.value);
        } catch (error) {
            errors.onFailed(error);
            console.error(error);
            throw new ApiError(error);
        } finally {
        }
    };

    const onStripeTerminal = async (cart: Cart) => {
        try {
            if (!isAuthenticated.value) return;

            const terminal = await stripeTerminalStore.stripeTerminal();
            await stripeTerminalStore.connectReaderHandler(true);
            await stripeTerminalStore.setSimulatorConfiguration();
            console.log(terminal);
        } catch (error) {
            errors.onFailed(error);
            console.error(error);
            throw new ApiError(error);
        } finally {
        }
    };

    return {
        onStripe,
        onSofort,
        onKlarna,
        onNotchPay,
        onStripeTerminal,
    };
};
