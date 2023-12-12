<template>
    <div
        class="flex h-full flex-col divide-y divide-gray-200 bg-white dark:bg-slate-900 shadow-xl"
    >
        <div class="flex min-h-0 flex-1 flex-col overflow-y-scroll">
            <Header
                @close="emit('close', false)"
                :has-previous="false"
                title="Success"
            ></Header>
            <Body ref="itemRef"></Body>
        </div>
    </div>
</template>
<script setup lang="ts">
import Header from "@/Components/Tickets/Wizard/Header.vue";
import Body from "@/Components/Tickets/Wizard/Step6/Body.vue";
import { useWizardStore } from "@/stores/useWizardStore";
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

const itemRef = ref<HTMLElement>();
const wizard = useWizardStore();

const emit = defineEmits<{
    close: [value: boolean];
}>();

useMotion(itemRef, {
    initial: {
        opacity: 0,
        y: 100,
    },
    enter: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 500,
            duration: 2000,
        },
    },
});
</script>
