<script setup lang="ts">
import { ArrowLongLeftIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import { DialogTitle } from "@headlessui/vue";

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

const close = () => {
    emit("close", false);
};

const previous = () => {
    emit("previous", false);
};
</script>

<template>
    <div
        :class="`bg-${$page.props.team.color}-700 dark:bg-slate-900 px-4 py-6 sm:px-6`"
    >
        <div class="flex items-center justify-between">
            <div class="mr-3 flex h-7 items-center">
                <button
                    v-if="hasPrevious"
                    type="button"
                    :class="`relative rounded-md text-${$page.props.team.color}-200 hover:text-white focus:outline-none`"
                    @click="previous"
                >
                    <span class="absolute -inset-2.5" />
                    <span class="sr-only">Close panel</span>
                    <ArrowLongLeftIcon class="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <DialogTitle
                class="text-base font-semibold leading-6 text-white uppercase"
            >
                {{ title || $page.props.team.event.name }}
            </DialogTitle>
            <div class="ml-3 flex h-7 items-center">
                <button
                    type="button"
                    :class="`relative rounded-md text-${$page.props.team.color}-200 hover:text-white focus:outline-none`"
                    @click="close"
                >
                    <span class="absolute -inset-2.5" />
                    <span class="sr-only">Close panel</span>
                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
        </div>
        <div class="mt-1 text-center">
            <p class="text-sm text-indigo-300">
                {{ description || $page.props.team.event.address }}
            </p>
        </div>
    </div>
</template>

<style scoped></style>
