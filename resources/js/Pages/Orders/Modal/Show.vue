<template>
    <Siderbar :show="true" @close="close"></Siderbar>
</template>
<script setup lang="ts">
import { router, usePage } from "@inertiajs/vue3";
import { onMounted } from "vue";
import Siderbar from "@/Components/Siderbar.vue";
import { useWizardStore } from "@/stores/useWizardStore";
import { useCartsStore } from "@/stores/useCartsStore";

const wizard = useWizardStore();
const cartsStore = useCartsStore();

interface Props {
    id?: string;
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
        await cartsStore.reset();
        await wizard.setComponent("Step6");
    } catch (error) {
        console.error(error);
    }
});
</script>
