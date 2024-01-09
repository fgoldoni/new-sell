import { defineStore } from "pinia";
import { computed, ComputedRef, ref } from "vue";
import { useApi } from "@/composable/useApi";
import ApiError from "@/models/ApiError";
import { filter, orderBy } from "lodash";
import { Brand } from "@/types/carts";

export const useBrandsStore = defineStore(
    "brandsStore",
    () => {
        const api = useApi();

        const brands = ref<Brand[]>([]);

        const podiums: ComputedRef<Brand[]> = computed(() =>
            filter(brands.value, (b: Brand) => b.type === "podium"),
        );

        const mcs: ComputedRef<Brand[]> = computed(() =>
            orderBy(
                filter(brands.value, (b: Brand) => b.type === "mc"),
                ["position"],
                ["asc"],
            ),
        );

        const sponsors = computed(() =>
            filter(brands.value, (s) => s.type === "sponsor"),
        );

        const blogs = computed(() =>
            filter(brands.value, (s) => s.type === "blog"),
        );

        const artists = computed(() =>
            filter(brands.value, (s) => s.type === "artist"),
        );

        const djs: ComputedRef<Brand[]> = computed(() =>
            filter(brands.value, (b: Brand) => b.type === "dj"),
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

        return { brands, get, sponsors, blogs, artists, djs, mcs };
    },
    {
        persist: true,
    },
);
