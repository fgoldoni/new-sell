import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { User } from "@/types";
import { useApi } from "@/composable/useApi";

export const useAuthStore = defineStore(
    "useAuthStore",
    () => {
        const api = useApi();
        const user = ref<User | null>(null);
        const isAuthenticated = computed(() => !!user.value);
        const token = ref<string | null>(null);

        const fetchUser = async (): Promise<any> => {
            user.value = await api.authentication.user();
        };

        const register = async (
            name: string,
            email: string,
            email_confirmation: string,
            phone: string,
            country_id: number,
            locale: string,
            is_logged: boolean,
            to: string,
            terms: boolean,
        ): Promise<any> => {
            return await api.authentication.register(
                name,
                email,
                email_confirmation,
                phone,
                country_id,
                locale,
                is_logged,
                to,
                terms,
            );
        };

        return {
            user,
            isAuthenticated,
            register,
            fetchUser,
        };
    },
    {
        persist: true,
    },
);
