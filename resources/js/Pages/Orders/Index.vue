<template>
    <AppLayout>
        <Loading v-if="processing"></Loading>
        <div v-else>
            <OrdersHistory :items="orders"></OrdersHistory>
            <FooterComponent></FooterComponent>
        </div>
    </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from "@/Layouts/AppLayout.vue";
import FooterComponent from "@/Components/FooterComponent.vue";
import OrdersHistory from "@/Components/OrdersHistory.vue";

import { useOrdersStore } from "@/stores/useOrdersStore";

import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import Loading from "@/Components/Loading.vue";

const ordersStore = useOrdersStore();
const { orders, processing } = storeToRefs(ordersStore);

onMounted(async () => {
    await ordersStore.get();
});
</script>
