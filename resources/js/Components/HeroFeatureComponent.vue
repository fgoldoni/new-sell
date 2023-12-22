<template>
    <!-- Section 1 -->
    <section class="py-12 sm:py-16">
        <div class="max-w-7xl mx-auto sm:text-center">
            <div class="">
                <Tags v-if="$page.props.team.event?.tags?.length"></Tags>
            </div>
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-10 my-12 sm:my-16">
                <div
                    v-for="item in items"
                    :key="item"
                    class="btn-base cursor-pointer rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-slate-300 dark:border-slate-700"
                >
                    <component
                        :is="item.icon"
                        :class="`mx-auto w-16 h-auto text-${$page.props.team.color}-500 flex-shrink-0`"
                        aria-hidden="true"
                    />
                    <p
                        class="text-slate-800 dark:text-white font-bold mt-4 text-xl sm:text-2xl"
                    >
                        {{ item.name }}
                    </p>
                    <p class="mt-2 text-xl text-gray-500 uppercase">
                        {{ __(item.title) }}
                    </p>
                </div>
            </div>
            <button
                v-if="isLoading && event?.collections.length"
                @click="openModal"
                :class="`uppercase btn-base px-8 py-4 w-full border-2 border-${$page.props.team.color}-500 dark:border-${$page.props.team.color}-200 text-center text-base font-medium inline-block rounded text-slate-900 dark:text-white`"
            >
                <div class="flex items-center justify-center space-x-4">
                    <svg
                        v-if="processing"
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
                    <span v-else>{{ __("labels.add_drinks") }}</span>
                </div>
            </button>
        </div>
    </section>
</template>

<script setup lang="ts">
import {
    BanknotesIcon,
    BuildingLibraryIcon,
    CalendarIcon,
    ClockIcon,
} from "@heroicons/vue/24/outline";
import parseISO from "date-fns/parseISO";
import format from "date-fns/format";
import { de, enUS, fr } from "date-fns/locale";
import { router, usePage } from "@inertiajs/vue3";
import Tags from "@/Components/Tags.vue";
import { storeToRefs } from "pinia";
import { useEventStore } from "@/stores/useEventStore";
import { useWizardStore } from "@/stores/useWizardStore";
import { useCartsStore } from "@/stores/useCartsStore";
import { ref } from "vue";

const wizard = useWizardStore();
const cartsStore = useCartsStore();
const processing = ref(false);

const locale = () =>
    usePage().props.team.locale === "fr"
        ? fr
        : usePage().props.team.locale === "de"
          ? de
          : enUS;

const eventStore = useEventStore();
const { event, isLoading } = storeToRefs(eventStore);

const openModal = async () => {
    processing.value = true;
    await cartsStore.reset();
    await wizard.setComponent("Step2");
    processing.value = false;
    return router.get(route("products.index"), {}, { replace: true });
};

const items = [
    {
        name: format(parseISO(usePage().props.team.event?.start), "dd. MMMM", {
            locale: locale(),
        }),
        title: format(parseISO(usePage().props.team.event?.start), "EEEE", {
            locale: locale(),
        }),
        icon: CalendarIcon,
    },
    {
        name: format(parseISO(usePage().props.team.event?.start), "H:mm", {
            locale: locale(),
        }),
        title: "Begin",
        icon: ClockIcon,
    },
    {
        name: usePage().props.team.event?.city,
        title: "City",
        icon: BuildingLibraryIcon,
    },
    {
        name:
            (usePage().props.team.event?.ticket?.price || 0) +
            " " +
            usePage().props.team.currency?.code,
        title: "Entry",
        icon: BanknotesIcon,
    },
    // More items...
];
</script>
