import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {usePage} from "@inertiajs/vue3";
import {useApi} from "@/composable/useApi";
import ApiError from "@/models/ApiError";

export const useEventStore = defineStore('event', () => {
    const api = useApi();

    const event = ref(null)

    const isLoading = computed(() => !!event.value)

    const load = async () => {
        try {
            await api.events.find(usePage().props.team?.event_id)
                .then(response => {
                    event.value = response.data
                }).catch(error => {
                    throw new ApiError(error);
                })
        } catch (error) {
            console.error(error)
        }
    }

    return {event, isLoading, load}
},{
    persist: true,
})
