<template>
    <Siderbar :show="true" @close="close"></Siderbar>
</template>
<script setup lang="ts">
import { router, usePage } from "@inertiajs/vue3";
import { onMounted } from "vue";
import Siderbar from "@/Components/Siderbar.vue";
import { useWizardStore } from "@/stores/useWizardStore";
import { storeToRefs } from "pinia";
import { useCartsStore } from "@/stores/useCartsStore";
import { useApi } from "@/composable/useApi";
import { useEventStore } from "@/stores/useEventStore";

const api = useApi();
const wizard = useWizardStore();
const { component } = storeToRefs(wizard);
const cartsStore = useCartsStore();
const { item, payload } = storeToRefs(cartsStore);

const eventStore = useEventStore();
const { isLoading } = storeToRefs(eventStore);

interface Props {}

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
        if (!isLoading) {
            await eventStore.get();
        }

        await wizard.setComponent("Step2");
    } catch (error) {
        console.error(error);
    }
});
</script>
