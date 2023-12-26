<script setup lang="ts">
import { useAuthStore } from "@/stores/useAuthStore";
import { onMounted } from "vue";
import { router } from "@inertiajs/vue3";
import Loading from "@/Components/Loading.vue";

const authStore = useAuthStore();

interface Props {
    hash: string;
}

const props = defineProps<Props>();

onMounted(async () => {
    try {
        authStore.setToken(props.hash);

        await authStore.fetchUser();

        return router.get(
            route().params.to || route("home"),
            {},
            { replace: true },
        );
    } catch (error: any) {
        return router.get(route("home"), {}, { replace: true });
    }
});
</script>

<template>
    <Loading></Loading>
</template>
