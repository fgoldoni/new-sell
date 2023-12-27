import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useApi } from "@/composable/useApi";
import ApiError from "@/models/ApiError";
import { filter } from "lodash";
import { Brand } from "@/types/carts";

export const useBrandsStore = defineStore(
    "brandsStore",
    () => {
        const api = useApi();

        const brands = ref<Brand[]>([]);

        const podiums = computed(() =>
            filter(brands.value, (s) => s.type === "podium"),
        );

        const sponsors = computed(() =>
            filter(brands.value, (s) => s.type === "sponsor"),
        );
        const artists = computed(() =>
            filter(brands.value, (s) => s.type === "artist"),
        );
        const djs = computed(() =>
            filter(brands.value, (s) => s.type === "dj"),
        );

        const get = async () => {
            try {
                await api.brands
                    .get()
                    .then((response: any) => {
                        brands.value = response.data;
                    })
                    .catch((error: any) => {
                        throw new ApiError(error);
                    });
            } catch (error) {
                console.error(error);
            }
        };

        return { brands, get, sponsors };
    },
    {
        persist: true,
    },
);
