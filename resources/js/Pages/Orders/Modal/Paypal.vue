<template>
    <div
        class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-slate-900 opacity-90 flex flex-col items-center justify-center"
    >
        <div
            class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"
        ></div>
        <h2 class="text-center text-white text-xl font-semibold animate-pulse">
            Loading...
        </h2>
        <p class="w-1/3 text-center text-white">
            This may take a few seconds, please don't close this page.
        </p>
    </div>
</template>
<script setup lang="ts">
import { router } from "@inertiajs/vue3";
import { onMounted } from "vue";
import { useWizardStore } from "@/stores/useWizardStore";
import { useCartsStore } from "@/stores/useCartsStore";
import { useOrdersStore } from "@/stores/useOrdersStore";
import { storeToRefs } from "pinia";

const wizard = useWizardStore();
const cartsStore = useCartsStore();
const ordersStore = useOrdersStore();
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
                route().params.currency,
                route().params.total,
                route().params.reference,
                route().params.status,
            );

            wizard.reset();

            await wizard.setComponent("Step6");

            return router.get(
                route("orders.success", cart.value.id),
                {},
                { replace: true },
            );
        }

        await wizard.setComponent(null);
        return router.get(route("home"), {}, { replace: true });
    } catch (error) {
        console.error(error);
        await wizard.setComponent(null);
        return router.get(route("home"), {}, { replace: true });
    }
});
</script>
