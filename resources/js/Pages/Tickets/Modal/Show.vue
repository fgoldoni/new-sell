<template>
    <Siderbar :show="true" @close="close"></Siderbar>
</template>
<script setup lang="ts">
import { router, usePage } from "@inertiajs/vue3";
import { onMounted, ref } from "vue";
import Siderbar from "@/Components/Siderbar.vue";
import { useWizardStore } from "@/stores/useWizardStore";
import { storeToRefs } from "pinia";
import { useCartsStore } from "@/stores/useCartsStore";
import ApiError from "@/models/ApiError";
import { useApi } from "@/composable/useApi";

const api = useApi();
const wizard = useWizardStore();
const { component } = storeToRefs(wizard);
const cartsStore = useCartsStore();
const { item, payload } = storeToRefs(cartsStore);

interface Props {
    id: string;
}

const props = defineProps<Props>();

const close = async (value: boolean) => {
    return router.get(
        usePage().props.basePageRoute,
        {},
        { replace: true, preserveState: true, preserveScroll: true },
    );
};
onMounted(async () => {
    try {
        if (!item.value) {
            await api.tickets
                .find(props.id)
                .then(async (response: any) => {
                    cartsStore.setItem(response.data);
                    const cartItem = cartsStore.findItem("ticket", props.id);
                    const reset = ref(false);

                    if (
                        payload.value.id !== props.id ||
                        payload.value.model !== response.data.model
                    ) {
                        cartsStore.updatePayload("id", props.id);
                        cartsStore.updatePayload("quantity", 1);
                        cartsStore.updatePayload("entry", "");
                        reset.value = true;
                        cartsStore.updatePayload("model", response.data.model);
                        cartsStore.updatePayload("message", "");
                    }

                    if (
                        payload.value?.quantity &&
                        payload.value?.quantity <= 0
                    ) {
                        cartsStore.updatePayload("quantity", 1);
                    }

                    if (cartItem && payload.value.id !== props.id) {
                        cartsStore.updatePayload("id", props.id);
                        cartsStore.updatePayload("quantity", cartItem.quantity);
                        cartsStore.updatePayload(
                            "entry",
                            cartItem.attributes?.entry,
                        );
                        cartsStore.updatePayload(
                            "message",
                            cartItem.attributes?.message,
                        );
                        cartsStore.updatePayload("model", response.data.model);
                    }

                    await cartsStore.store({
                        ...payload.value,
                        ...{ reset: reset.value },
                    });

                    if (component.value !== "Step1") {
                        await wizard.setComponent("Step1");
                    }
                })
                .catch((error: any) => {
                    throw new ApiError(error);
                });
        } else {
            if (component.value !== "Step1") {
                await wizard.setComponent("Step1");
            }
        }
    } catch (error) {
        console.error(error);
    }
});
</script>
