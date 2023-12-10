import { defineStore } from "pinia";
import { ref } from "vue";
import { Country } from "@/types";
import { useApi } from "@/composable/useApi";
import ApiError from "@/models/ApiError";

export const useCountriesStore = defineStore(
    "countries",
    () => {
        const api = useApi();
        const countries = ref<Country[] | []>([]);

        const get = async (): Promise<any> => {
            await api.countries
                .get()
                .then((response: any) => {
                    countries.value = response.data as Country[];
                })
                .catch((error: any) => {
                    throw new ApiError(error);
                });
        };

        return {
            countries,
            get,
        };
    },
    {
        persist: true,
    },
);
