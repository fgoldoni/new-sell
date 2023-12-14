<template>
    <Siderbar :show="true" @close="close"></Siderbar>
</template>
<script setup lang="ts">
import { router, usePage } from "@inertiajs/vue3";
import { onMounted } from "vue";
import Siderbar from "@/Components/Siderbar.vue";
import { useWizardStore } from "@/stores/useWizardStore";
import { useCartsStore } from "@/stores/useCartsStore";
import { useOrdersStore } from "@/stores/useOrdersStore";
import { storeToRefs } from "pinia";

const wizard = useWizardStore();
const cartsStore = useCartsStore();
const ordersStore = useOrdersStore();
const { order } = storeToRefs(ordersStore);

interface Props {
    id: string;
}

const props = defineProps<Props>();

const close = (value: boolean) => {
    setTimeout(() => {
        wizard.setComponent("Step1");
    }, 2000);

    return router.get(
        usePage().props.basePageRoute,
        {},
        { replace: true, preserveState: true, preserveScroll: true },
    );
};
onMounted(async () => {
    try {
        if (order.value?.id === props.id) {
            await cartsStore.reset();
            return await wizard.setComponent("Step6");
        }

        await wizard.setComponent("Step1");
        return router.get(route("home"), {}, { replace: true });
    } catch (error) {
        console.error(error);
    }
});
</script>
