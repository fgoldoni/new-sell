<template>
    <div
        :class="`isolate overflow-hidden bg-${$page.props.team.color}-900 dark:bg-slate-900`"
    >
        <div
            class="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8"
        >
            <div class="mx-auto max-w-4xl">
                <h2 class="text-base font-semibold leading-7 text-indigo-400">
                    {{ $page.props.team.event.name }}
                </h2>
                <p
                    class="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl uppercase"
                >
                    {{
                        __("labels.one_person_pass", {
                            team: $page.props.team.name,
                        })
                    }}
                </p>
            </div>
            <div class="relative mt-6">
                <p class="mx-auto max-w-2xl text-lg leading-8 text-white/60">
                    {{ $page.props.team.event.address }}
                </p>
                <svg
                    viewBox="0 0 1208 1024"
                    class="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
                >
                    <ellipse
                        cx="604"
                        cy="512"
                        fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)"
                        rx="604"
                        ry="512"
                    />
                    <defs>
                        <radialGradient
                            id="6d1bd035-0dd1-437e-93fa-59d316231eb0"
                        >
                            <stop stop-color="#7775D6" />
                            <stop offset="1" stop-color="#E935C1" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </div>
        <div :class="`flow-root bg-slate-50 ${bgColor} pb-14 sm:pb-24`">
            <div class="-mt-80">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                        class="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2"
                    >
                        <Entry
                            v-for="(item, index) in entries"
                            :key="item.id"
                            :index="index"
                            :item="item"
                            :processing="processing"
                            @open="open"
                        ></Entry>

                        <div
                            class="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 dark:ring-gray-100/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center"
                        >
                            <div class="lg:min-w-0 lg:flex-1">
                                <h3
                                    class="text-lg font-semibold leading-8 tracking-tight text-slate-900 dark:text-white"
                                >
                                    {{ __("labels.cta_title") }}
                                </h3>
                                <p
                                    class="mt-1 text-base leading-7 text-slate-500 dark:text-slate-400"
                                >
                                    {{ __("labels.cta_description") }}
                                </p>
                            </div>
                            <a
                                v-if="isLoading && event?.collections.length"
                                @click="openModal"
                                :class="`rounded-md cursor-pointer px-3.5 py-2 text-sm font-semibold leading-6 text-${$page.props.team.color}-600 dark:text-white ring-1 ring-inset ring-${$page.props.team.color}-200 dark:ring-white hover:ring-${$page.props.team.color}-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${$page.props.team.color}-600`"
                            >
                                <div
                                    class="flex items-center justify-center space-x-4"
                                >
                                    <svg
                                        v-if="process"
                                        :class="`animate-spin h-6 w-6 inline-flex text-${$page.props.team.color}-600`"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            class="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            stroke-width="4"
                                        ></circle>
                                        <path
                                            class="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    <span v-else
                                        >{{ __("labels.cta_action") }}
                                        <span aria-hidden="true">&rarr;</span>
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <component
            v-bind="$page.props"
            v-if="$root.modalComponent"
            :is="$root.modalComponent"
        />
    </div>
</template>

<script setup lang="ts">
import Entry from "@/Components/Entry.vue";
import { useTicketsStore } from "@/stores/useTicketsStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import ApiError from "@/models/ApiError";
import { useApi } from "@/composable/useApi";
import { useWizardStore } from "@/stores/useWizardStore";
import { useCartsStore } from "@/stores/useCartsStore";
import { router } from "@inertiajs/vue3";
import { Ticket } from "@/models/Ticket";
import { useEventStore } from "@/stores/useEventStore";

const { entries } = storeToRefs(useTicketsStore());

const api = useApi();
const processing = ref<string | null>(null);
const process = ref(false);

const eventStore = useEventStore();
const { event, isLoading } = storeToRefs(eventStore);

const wizard = useWizardStore();
const cartsStore = useCartsStore();
const { payload } = storeToRefs(cartsStore);

defineProps({
    bgColor: {
        type: String,
        default: "bg-slate-50 dark:bg-slate-800",
    },
});

const openModal = async () => {
    process.value = true;
    await cartsStore.reset();
    await wizard.setComponent("Step2");
    process.value = false;
    return router.get(route("products.index"), {}, { replace: true });
};

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
                    cartsStore.updatePayload("reservation", item.reservation_options[0]?.name);
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
