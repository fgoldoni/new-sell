<template></template>
<script setup lang="ts">
import { router, usePage } from "@inertiajs/vue3";
import { onMounted } from "vue";
import { useWizardStore } from "@/stores/useWizardStore";
import { useCartsStore } from "@/stores/useCartsStore";
import { useOrdersStore } from "@/stores/useOrdersStore";
import { storeToRefs } from "pinia";

const wizard = useWizardStore();
const cartsStore = useCartsStore();
const ordersStore = useOrdersStore();
const { order } = storeToRefs(ordersStore);
const { cart } = storeToRefs(cartsStore);

interface Props {
    id: string;
}

const props = defineProps<Props>();

onMounted(async () => {
    try {
        if (cart.value?.id === props.id) {
            await ordersStore.store(
                props.id,
                route().params.mode,
                usePage().props.team.currency.code,
                String(cart.value.total),
                route().params.reference,
            );

            wizard.reset();

            await wizard.setComponent("Step6");

            return router.get(
                route("orders.success", cart.value.id),
                {},
                { replace: true },
            );
        }

        await wizard.setComponent("Step1");
        return router.get(route("home"), {}, { replace: true });
    } catch (error) {
        console.error(error);
    }
});
</script>
