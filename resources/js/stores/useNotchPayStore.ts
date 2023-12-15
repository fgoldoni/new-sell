import { defineStore } from "pinia";
import { ref } from "vue";
import { usePage } from "@inertiajs/vue3";
import { Cart } from "@/types/carts";
import { User } from "@/types";
import { useApi } from "@/composable/useApi";
import ApiError from "@/models/ApiError";
import { Errors } from "@/plugins/errors";

export const useNotchPayStore = defineStore("notchPayStore", () => {
    const processing = ref(false);
    const api = useApi();
    const errors = new Errors();
    const initialize = async (cart: Cart, user: User) => {
        processing.value = true;

        await api.notchPay
            .post(
                user?.email,
                cart.total,
                usePage().props.team.currency.code,
                cart.id,
                cart.id + "-" + Date.now(),
                route("orders.notch-pay", cart.id),
            )
            .then((response: any) => {
                return window.location.replace(response.authorization_url);
            })
            .catch((error: any) => {
                errors.onFailed(error);
                console.error(error);
                throw new ApiError(error);
            })
            .finally(() => (processing.value = false));
    };

    return {
        initialize,
    };
});
