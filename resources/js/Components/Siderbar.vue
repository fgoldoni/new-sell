<template>
    <TransitionRoot as="template" :show="open">
        <component :is="wizard.mapComponent()" @close="close" />
    </TransitionRoot>
</template>

<script setup lang="ts">
import { TransitionRoot } from "@headlessui/vue";
import { useWizardStore } from "@/stores/useWizardStore";

const wizard = useWizardStore();

const props = defineProps({
    open: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(["close"]);

const close = () => {
    emit("close", false);
};
</script>
