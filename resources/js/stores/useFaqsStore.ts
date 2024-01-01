import { defineStore } from "pinia";
import { ref } from "vue";
import { useApi } from "@/composable/useApi";
import ApiError from "@/models/ApiError";

export const useFaqsStore = defineStore(
    "faqsStore",
    () => {
        const api = useApi();

        const faqs = ref<any>(null);

        const get = async () => {
            try {
                await api.faqs
                    .get()
                    .then((response: any) => {
                        faqs.value = response.data;
                    })
                    .catch((error: any) => {
                        throw new ApiError(error);
                    });
            } catch (error) {
                console.error(error);
            }
        };

        return { faqs, get };
    },
    {
        persist: true,
    },
);
