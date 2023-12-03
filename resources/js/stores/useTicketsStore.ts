import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {usePage} from "@inertiajs/vue3";
import {useApi} from "@/composable/useApi";
import ApiError from "@/models/ApiError";

export const useTicketsStore = defineStore('tickets', () => {
    const api = useApi();

    const event = ref(null)

    const isLoading = computed(() => !!event.value)

    const get = async () => {
        try {
            await api.tickets.get()
                .then((response: any) => {
                    event.value = response.data
                }).catch((error: any) => {
                    throw new ApiError(error);
                })
        } catch (error) {
            console.error(error)
        }
    }

    return {get}
},{
    persist: true,
})
