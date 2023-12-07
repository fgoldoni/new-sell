<template>
    <div
        class="flex h-full flex-col divide-y divide-gray-200 bg-white dark:bg-slate-900 shadow-xl"
    >
        <div class="flex min-h-0 flex-1 flex-col overflow-y-scroll">
            <Header @close="close" :has-previous="false"></Header>
            <div ref="itemRef" class="container mx-auto sm:px-6 lg:px-8">
                <Stepper></Stepper>
                <Body></Body>
            </div>
        </div>

        <Footer @submit-action="() => wizard.setComponent('Step2')"></Footer>
    </div>
</template>
<script setup lang="ts">
import Header from "@/Components/Tickets/Wizard/Header.vue";
import Body from "@/Components/Tickets/Wizard/Step1/Body.vue";
import Footer from "@/Components/Tickets/Wizard/Footer.vue";
import Stepper from "@/Components/Tickets/Wizard/Stepper.vue";
import { useWizardStore } from "@/stores/useWizardStore";
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

const emit = defineEmits<{
    close: [value: boolean];
}>();

const wizard = useWizardStore();

const close = () => {
    emit("close", false);
};

const itemRef = ref<HTMLElement>();

useMotion(itemRef, {
    initial: {
        opacity: 0,
        y: 100,
    },
    enter: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 100,
            duration: 700,
        },
    },
});
</script>
