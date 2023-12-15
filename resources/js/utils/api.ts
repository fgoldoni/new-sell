import { ofetch } from "ofetch";
import { useCookie } from "@/composable/useCookie";
import { usePage } from "@inertiajs/vue3";
import { API_BASE_URL } from "@/utils/constants";
import ApiError from "@/models/ApiError";

const VALIDATION_ERROR_STATUS = 422;

export const $api = ofetch.create({
    baseURL: API_BASE_URL || "/api",
    retry: false,
    async onRequest({ options }) {
        const accessToken = useCookie("accessToken").value;
        const teamId = usePage().props.team?.id;
        const eventId = usePage().props.team?.event?.id;
        const locale = usePage().props.team?.locale;
        const cartId = usePage().props.cart?.id;

        if (accessToken && !options.headers?.hasOwnProperty("Authorization")) {
            options.headers = {
                ...options.headers,
                Authorization: `Bearer ${accessToken}`,
            };
        }
        if (teamId) {
            options.headers = {
                ...options.headers,
                "x-team-id": `${teamId}`,
            };
        }
        if (eventId) {
            options.headers = {
                ...options.headers,
                "x-event-id": `${eventId}`,
            };
        }
        if (locale) {
            options.headers = {
                ...options.headers,
                "x-locale-id": `${locale}`,
            };
        }
        if (cartId) {
            options.headers = {
                ...options.headers,
                "x-cart-id": `${cartId}`,
            };
        }
    },
    async onResponseError({ response }) {
        if (response.status === VALIDATION_ERROR_STATUS) {
            throw new ApiError(response._data);
        }
    },
});
