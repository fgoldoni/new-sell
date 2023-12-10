import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { User } from "@/types";
import { useApi } from "@/composable/useApi";

export const useAuthStore = defineStore(
    "useAuthStore",
    () => {
        const api = useApi();
        const user = ref<User | null>(null);
        const isAuthenticated = computed(() => !!user);
        const token = ref<string | null>(null);

        const fetchUser = async (): Promise<any> => {
            user.value = await api.authentication.user();
        };

        const register = async (
            name: string,
            email: string,
            password: string,
            password_confirmation: string,
        ): Promise<any> => {
            await api.authentication.register(
                name,
                email,
                password,
                password_confirmation,
            );
            await fetchUser();

            await router.push(config.public.homeUrl);
        };

        return {
            user,
            isAuthenticated,
            register,
        };
    },
    {
        persist: true,
    },
);
