<template>
    <!-- Section 1 -->
    <section
        class="box-border leading-7 border-0 border-slate-200 border-solid sm:py-2 md:py-16 lg:py-14"
    >
        <div
            class="box-border max-w-6xl px-4 pb-12 mx-auto border-solid sm:px-6 md:px-6 lg:px-4"
        >
            <div
                class="flex flex-col items-center leading-7 text-center text-slate-900"
            >
                <h2
                    v-motion-fade
                    class="box-border m-0 text-2xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white border-solid sm:text-3xl uppercase"
                >
                    Packages & Lounges
                </h2>
            </div>
            <div
                class="grid max-w-md mx-auto gap-8 mt-8 overflow-hidden leading-7 text-slate-900 md:max-w-lg lg:max-w-none sm:mt-16 lg:grid-cols-2"
            >
                <Package
                    v-for="(item, index) in packages"
                    :key="item.id"
                    :index="index"
                    :item="item"
                    :processing="processing"
                    @open="open"
                ></Package>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTicketsStore } from "@/stores/useTicketsStore";
import { storeToRefs } from "pinia";
import Package from "@/Components/Package.vue";
import { Ticket } from "@/models/Ticket";
import { router } from "@inertiajs/vue3";
import ApiError from "@/models/ApiError";
import { useApi } from "@/composable/useApi";
import { useCartsStore } from "@/stores/useCartsStore";
import { useWizardStore } from "@/stores/useWizardStore";

const processing = ref<string | null>(null);

const ticketsStore = useTicketsStore();
const { packages } = storeToRefs(ticketsStore);
const api = useApi();
const cartsStore = useCartsStore();
const wizard = useWizardStore();
const { payload } = storeToRefs(cartsStore);

const open = async (item: Ticket) => {
    if (item.quantity <= 0) return;

    try {
        processing.value = item.id;

        await api.tickets
            .find(item.id)
            .then(async (response: any) => {
                if (response.data.quantity <= 0) return;
                await wizard.setComponent("Step1");
                cartsStore.setItem(response.data);
                const reset = ref(false);

                if (
                    payload.value.id !== item.id ||
                    payload.value.model !== response.data.model
                ) {
                    cartsStore.updatePayload("id", item.id);
                    cartsStore.updatePayload("quantity", 1);
                    cartsStore.updatePayload("entry", "");
                    reset.value = true;
                    cartsStore.updatePayload("model", response.data.model);
                    cartsStore.updatePayload("message", "");
                }

                if (payload.value?.quantity <= 0) {
                    cartsStore.updatePayload("quantity", 1);
                }

                await cartsStore.store({
                    ...payload.value,
                    ...{ reset: reset.value },
                });

                return router.get(
                    route("tickets.show", { id: item.id }),
                    {},
                    {
                        preserveState: false,
                        preserveScroll: true,
                        replace: false,
                    },
                );
            })
            .catch((error: any) => {
                throw new ApiError(error);
            })
            .finally(() => {
                processing.value = null;
            });
    } catch (error) {
        console.error(error);
    }
};
</script>
