<template>
    <div
        class="flex h-full flex-col divide-y divide-gray-200 bg-white dark:bg-slate-900 shadow-xl"
    >
        <div class="flex min-h-0 flex-1 flex-col overflow-y-scroll">
            <Header
                @close="close"
                @previous="() => wizard.setComponent('Step1')"
                :has-previous="true"
            ></Header>
            <div ref="itemRef" class="container mx-auto sm:px-6 lg:px-8">
                <Stepper></Stepper>
                <Body></Body>
            </div>
        </div>

        <Footer @submit-action="close"></Footer>
    </div>
</template>
<script setup lang="ts">
import Header from "@/Components/Tickets/Wizard/Header.vue";
import Footer from "@/Components/Tickets/Wizard/Footer.vue";
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";
import Stepper from "@/Components/Tickets/Wizard/Stepper.vue";
import Body from "@/Components/Tickets/Wizard/Step1/Body.vue";
import { useWizardStore } from "@/stores/useWizardStore";

const emit = defineEmits<{
    close: [value: boolean];
}>();

const itemRef = ref<HTMLElement>();

const wizard = useWizardStore();

const close = () => {
    emit("close", false);
};

const previous = (e: any) => {
    emit("close", false);
};

useMotion(itemRef, {
    initial: {
        opacity: 0,
        y: 100,
    },
    visibleOnce: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 700,
            duration: 1000,
        },
    },
});
</script>
