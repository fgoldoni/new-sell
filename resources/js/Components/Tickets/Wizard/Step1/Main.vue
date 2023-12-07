<template>
    <Dialog as="div" class="relative z-40" @close="close">
        <TransitionChild
            as="template"
            enter="ease-in-out duration-500"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in-out duration-500"
            leave-from="opacity-100"
            leave-to="opacity-0"
        >
            <div
                class="fixed inset-0 bg-slate-900 bg-opacity-80 transition-opacity"
            />
        </TransitionChild>

        <div class="fixed inset-0 overflow-hidden">
            <div class="absolute inset-0 overflow-hidden">
                <div
                    class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full sm:pl-10"
                >
                    <TransitionChild
                        as="template"
                        enter="transform transition ease-in-out duration-500 sm:duration-700"
                        enter-from="translate-x-full"
                        enter-to="translate-x-0"
                        leave="transform transition ease-in-out duration-500 sm:duration-700"
                        leave-from="translate-x-0"
                        leave-to="translate-x-full"
                    >
                        <DialogPanel
                            class="pointer-events-auto w-screen max-w-2xl"
                        >
                            <div
                                class="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl"
                            >
                                <div
                                    class="flex min-h-0 flex-1 flex-col overflow-y-scroll"
                                >
                                    <Header
                                        @close="close"
                                        @previous="previous"
                                        :has-previous="false"
                                    ></Header>
                                    <div
                                        class="container mx-auto sm:px-6 lg:px-8"
                                    >
                                        <Stepper></Stepper>
                                        <Body></Body>
                                    </div>
                                </div>
                                <Footer></Footer>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </div>
    </Dialog>
</template>
<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild } from "@headlessui/vue";
import Header from "@/Components/Tickets/Wizard/Header.vue";
import Body from "@/Components/Tickets/Wizard/Step1/Body.vue";
import Footer from "@/Components/Tickets/Wizard/Step1/Footer.vue";
import Stepper from "@/Components/Tickets/Wizard/Stepper.vue";

const emit = defineEmits<{
    close: [value: boolean];
}>();

const close = () => {
    emit("close", false);
};

const previous = (e: any) => {
    emit("close", false);
};
</script>
