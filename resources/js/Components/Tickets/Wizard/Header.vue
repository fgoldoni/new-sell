<script setup lang="ts">
import { ArrowLongLeftIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import { DialogTitle } from "@headlessui/vue";
import parseISO from "date-fns/parseISO";
import format from "date-fns/format";
import { enUS, fr } from "date-fns/locale";
import { usePage } from "@inertiajs/vue3";

interface Props {
    title?: string;
    description?: number;
    hasPrevious?: boolean;
}

defineProps<Props>();

const emit = defineEmits<{
    close: [value: boolean];
    previous: [value: any];
}>();

const locale = () => (usePage().props.locale === "fr" ? fr : enUS);

const close = () => {
    emit("close", false);
};

const previous = () => {
    emit("previous", false);
};
</script>

<template>
    <div :class="`px-4 py-6 sm:px-6`">
        <div class="flex items-center justify-between">
            <div class="mr-3 flex h-7 items-center">
                <button
                    v-if="hasPrevious"
                    type="button"
                    :class="`btn-title relative rounded-md text-${$page.props.team.color}-900 dark:text-white hover:text-${$page.props.team.color}-400 focus:outline-none`"
                    @click="previous"
                >
                    <span class="absolute -inset-2.5" />
                    <span class="sr-only">Close panel</span>
                    <ArrowLongLeftIcon class="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <DialogTitle
                :class="`truncate uppercase font-extrabold px-4 text-xl text-transparent bg-clip-text bg-gradient-to-r from-${$page.props.team.color}-200 via-gray-500 to-${$page.props.team.color}-500`"
            >
                {{ title || $page.props.team.event.name }}
            </DialogTitle>
            <div class="ml-3 flex h-7 items-center">
                <button
                    type="button"
                    :class="`btn-title relative rounded-md text-${$page.props.team.color}-900 dark:text-white hover:text-${$page.props.team.color}-400 focus:outline-none`"
                    @click="close"
                >
                    <span class="absolute -inset-2.5" />
                    <span class="sr-only">Close panel</span>
                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
        </div>
        <div class="mt-1 text-center">
            <p class="text-sm text-slate-900 dark:text-white uppercase">
                {{
                    description ||
                    format(
                        parseISO($page.props.team.event?.start),
                        "EEEE, dd. MMMM yyyy  H:mm",
                        { locale: locale() },
                    )
                }}
            </p>
        </div>
    </div>
</template>

<style scoped></style>
