<template>
    <AppLayout>
        <div>
            <LoginComponent></LoginComponent>
            <FooterComponent></FooterComponent>
        </div>
    </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from "@/Layouts/AppLayout.vue";
import FooterComponent from "@/Components/FooterComponent.vue";

import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/useAuthStore";
import LoginComponent from "@/Components/LoginComponent.vue";

const authStore = useAuthStore();
const { isAuthenticated } = storeToRefs(authStore);

onMounted(async () => {});
</script>
