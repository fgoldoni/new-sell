import {ofetch} from 'ofetch'
import {useCookie} from "@/composable/useCookie";
import {usePage} from "@inertiajs/vue3";
import {API_BASE_URL} from "@/utils/constants";

export const $api = ofetch.create({
    baseURL: API_BASE_URL || '/api',
    retry: false,
    async onRequest({options}) {
        const accessToken = useCookie('accessToken').value
        const teamId = usePage().props.team?.id
        const eventId = usePage().props.team?.event?.id
        if (accessToken) {
            options.headers = {
                ...options.headers,
                Authorization: `Bearer ${accessToken}`,
            }
        }
        if (teamId) {
            options.headers = {
                ...options.headers,
                'x-team-id': `${teamId}`,
            }
        }
        if (eventId) {
            options.headers = {
                ...options.headers,
                'x-event-id': `${eventId}`,
            }
        }
    },
})
