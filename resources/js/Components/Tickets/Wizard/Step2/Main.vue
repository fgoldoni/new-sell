<template>
    <div
        class="flex h-full flex-col divide-y divide-gray-200 bg-white dark:bg-slate-900 shadow-xl"
    >
        <div class="flex min-h-0 flex-1 flex-col overflow-y-scroll">
            <Header
                @previous="() => wizard.setComponent('Step1')"
                :has-previous="true"
                :title="item.name"
            ></Header>
            <div ref="itemRef" class="container mx-auto sm:px-6 lg:px-8">
                <Stepper></Stepper>
                <Body></Body>
            </div>
        </div>

        <Footer @submit-action="nextAction"></Footer>
    </div>
</template>
<script setup lang="ts">
import Header from "@/Components/Tickets/Wizard/Header.vue";
import Body from "@/Components/Tickets/Wizard/Step2/Body.vue";
import Footer from "@/Components/Tickets/Wizard/Footer.vue";
import Stepper from "@/Components/Tickets/Wizard/Stepper.vue";
import { useWizardStore } from "@/stores/useWizardStore";
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";
import { useCartsStore } from "@/stores/useCartsStore";
import { storeToRefs } from "pinia";

const itemRef = ref<HTMLElement>();
const wizard = useWizardStore();
const cartsStore = useCartsStore();
const { payload, item } = storeToRefs(cartsStore);

const emit = defineEmits<{
    close: [value: boolean];
}>();

const nextAction = () => {
    cartsStore.store({ ...{ reset: false }, ...payload.value });
    wizard.setComponent("Step2");
};

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
            duration: 500,
        },
    },
});
</script>
