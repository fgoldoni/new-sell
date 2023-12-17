import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { usePage } from "@inertiajs/vue3";
import { useApi } from "@/composable/useApi";
import ApiError from "@/models/ApiError";
import { Event } from "@/models/Ticket";

export const useEventStore = defineStore(
    "event",
    () => {
        const api = useApi();

        const event = ref<Event | null>(null);

        const isLoading = computed(() => !!event.value);

        const get = async () => {
            try {
                await api.events
                    .get(usePage().props.team?.event?.id)
                    .then((response: any) => {
                        event.value = response.data as Event;
                    })
                    .catch((error: any) => {
                        throw new ApiError(error);
                    });
            } catch (error) {
                console.error(error);
            }
        };

        return { event, isLoading, get };
    },
    {
        persist: true,
    },
);
