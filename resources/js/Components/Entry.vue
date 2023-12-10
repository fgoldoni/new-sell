<script setup lang="ts">
import { Ticket } from "@/models/Ticket";
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";
import { useCartsStore } from "@/stores/useCartsStore";
import { useApi } from "@/composable/useApi";
import ApiError from "@/models/ApiError";
import { storeToRefs } from "pinia";
import { useWizardStore } from "@/stores/useWizardStore";
import { router } from "@inertiajs/vue3";

interface Props {
    item: Ticket;
    index: number;
    modelValue: boolean;
}

const api = useApi();
const props = defineProps<Props>();
const emit = defineEmits<{
    "update:modelValue": [value: boolean];
}>();
const itemRef = ref<HTMLElement>();

const wizard = useWizardStore();
const cartsStore = useCartsStore();
const { payload } = storeToRefs(cartsStore);

useMotion(itemRef, {
    initial: {
        opacity: 0,
        y: 100,
    },
    visibleOnce: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 500 * props.index,
            duration: 1000,
        },
    },
});

const openModal = async (id: string) => {
    await wizard.setComponent("Step1");
    try {
        await api.tickets
            .find(id)
            .then(async (response: any) => {
                cartsStore.setItem(response.data);
                const cartItem = cartsStore.findItem("ticket", id);
                const reset = ref(false);

                if (
                    payload.value.id !== id ||
                    payload.value.model !== response.data.model
                ) {
                    cartsStore.updatePayload("id", id);
                    cartsStore.updatePayload("quantity", 1);
                    cartsStore.updatePayload("entry", "");
                    reset.value = true;
                    cartsStore.updatePayload("model", response.data.model);
                    cartsStore.updatePayload("message", "");
                }

                if (payload.value?.quantity <= 0) {
                    cartsStore.updatePayload("quantity", 1);
                }

                if (cartItem && payload.value.id !== id) {
                    cartsStore.updatePayload("id", id);
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

                return router.get(
                    route("tickets.show", { id: id }),
                    {},
                    {
                        preserveState: false,
                        preserveScroll: true,
                        replace: false,
                    },
                );
                // emit("update:modelValue", true);
            })
            .catch((error: any) => {
                throw new ApiError(error);
            });
    } catch (error) {
        console.error(error);
    }
};
</script>

<template>
    <div
        ref="itemRef"
        :class="[
            item.quantity > 0
                ? `ring-${$page.props.team.color}-500`
                : 'ring-rose-500',
            `flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-800 p-8 shadow-xl ring-1 sm:p-10`,
        ]"
    >
        <div>
            <h3
                id="tier-hobby"
                :class="[
                    item.quantity > 0
                        ? `text-${$page.props.team.color}-600 dark:text-${$page.props.team.color}-400`
                        : 'text-rose-600',
                    `text-base font-semibold leading-7 uppercase`,
                ]"
            >
                {{ item.name }}
            </h3>
            <div class="mt-4 flex items-baseline gap-x-2">
                <span
                    class="text-5xl font-bold tracking-tight text-slate-900 dark:text-white"
                >
                    {{ $page.props.team.currency.code }}
                    {{ item.price }}
                </span>
            </div>
            <p
                class="mt-6 text-base leading-7 text-slate-500 dark:text-slate-400"
                v-html="item.description"
            />
            <ul
                role="list"
                class="mt-10 space-y-4 text-sm leading-6 text-gray-600"
            >
                <li v-for="tag in item.tags" :key="tag" class="flex gap-x-3">
                    <svg
                        :class="`h-6 w-5 flex-none text-${$page.props.team.color}-600`"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                        />
                    </svg>
                    {{ tag }}
                </li>
            </ul>
        </div>
        <a
            href="javascript:;"
            @click="openModal(item.id)"
            aria-describedby="tier-hobby"
            :class="[
                item.quantity > 0
                    ? `btn-base  bg-${$page.props.team.color}-600 hover:bg-${$page.props.team.color}-500`
                    : 'bg-rose-600 hover:bg-rose-500',
                `mt-8 block uppercase rounded-md px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${$page.props.team.color}-600`,
            ]"
        >
            <span v-if="item.quantity > 0">
                {{ __("Noch frei, jetzt reservieren") }}
            </span>
            <span v-else>
                {{ __("Leider schon reserviert") }}
            </span>
        </a>
    </div>
</template>

<style scoped></style>
