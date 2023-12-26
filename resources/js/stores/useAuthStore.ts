import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { User } from "@/types";
import { useApi } from "@/composable/useApi";
import { setCookie } from "@/composable/useCookie";
import { COOKIE_MAX_AGE_1_YEAR } from "@/utils/constants";

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

        const setToken = (bearerToken: string) => {
            token.value = bearerToken;
            setCookie("accessToken", bearerToken, COOKIE_MAX_AGE_1_YEAR);
        };
        const setAuth = (auth: User) => (user.value = auth);

        const post = async (
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
            return await api.authentication.post(
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

        async function logout(): Promise<any> {
            return await api.authentication.logout();
        }

        async function reset(): Promise<any> {
            if (isAuthenticated.value === false) {
                return;
            }

            user.value = null;
        }

        return {
            user,
            token,
            isAuthenticated,
            reset,
            post,
            fetchUser,
            setToken,
            setAuth,
            logout,
        };
    },
    {
        persist: true,
    },
);
