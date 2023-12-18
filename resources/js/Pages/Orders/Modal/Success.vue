<template>
    <template>
        <Siderbar :show="true" @close="close" v-if="order"></Siderbar>
        <div
            v-else
            class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-slate-900 opacity-90 flex flex-col items-center justify-center"
        >
            <div
                class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"
            ></div>
            <h2
                class="text-center text-white text-xl font-semibold animate-pulse"
            >
                {{ __("labels.loading") }}
            </h2>
            <p class="w-1/3 text-center text-white">
                {{ __("labels.loading.message") }}
            </p>
        </div>
    </template>
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
