<template>
    <div
        class="flex h-full flex-col divide-y divide-slate-200 bg-white dark:bg-slate-900 shadow-xl"
    >
        <div class="flex min-h-0 flex-1 flex-col overflow-y-scroll">
            <Header
                @close="emit('close', false)"
                @previous="() => wizard.setComponent('Step1')"
                :has-previous="item ? true : false"
                :title="item?.name"
            ></Header>
            <div ref="itemRef" class="container mx-auto sm:px-6 lg:px-8">
                <Stepper>
                    <template v-slot:step-1>
                        <li
                            class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-slate-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-slate-700"
                        >
                            <span
                                :class="`flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-slate-200 dark:after:text-slate-500`"
                            >
                                <span
                                    :class="`ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-${$page.props.team.color}-600 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-${$page.props.team.color}-500`"
                                    aria-hidden="true"
                                >
                                    1
                                </span>
                            </span>
                        </li>
                    </template>
                    <template v-slot:step-2>
                        <li
                            class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-slate-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-slate-700"
                        >
                            <span
                                class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-slate-200 dark:after:text-slate-500"
                            >
                                <span
                                    class="ml-auto w-9 min-w-max whitespace-nowrap rounded-full px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-slate-900 dark:text-white ring-1 ring-inset ring-slate-200 dark:ring-slate-700"
                                    aria-hidden="true"
                                >
                                    2
                                </span>
                            </span>
                        </li>
                    </template>
                    <template v-slot:step-3>
                        <li
                            class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-slate-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-slate-700"
                        >
                            <span
                                class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-slate-200 dark:after:text-slate-500"
                            >
                                <span
                                    class="ml-auto w-9 min-w-max whitespace-nowrap rounded-full px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-slate-900 dark:text-white ring-1 ring-inset ring-slate-200 dark:ring-slate-700"
                                    aria-hidden="true"
                                >
                                    3
                                </span>
                            </span>
                        </li>
                    </template>
                    <template v-slot:step-4>
                        <li class="flex items-center">
                            <span
                                class="ml-auto w-9 min-w-max whitespace-nowrap rounded-full px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-slate-900 dark:text-white ring-1 ring-inset ring-slate-200 dark:ring-slate-700"
                                aria-hidden="true"
                            >
                                4
                            </span>
                        </li>
                    </template>
                </Stepper>
                <Body :collections="collections"></Body>
            </div>
        </div>

        <Footer
            @submit-action="submitAction"
            :processing="processing"
            :label="__('wizard.step_2.continue')"
        ></Footer>
    </div>
</template>
<script setup lang="ts">
import Header from "@/Components/Tickets/Wizard/Header.vue";
import Body from "@/Components/Tickets/Wizard/Step2/Body.vue";
import Footer from "@/Components/Tickets/Wizard/Footer.vue";
import Stepper from "@/Components/Tickets/Wizard/Stepper.vue";
import { useWizardStore } from "@/stores/useWizardStore";
import { useMotion } from "@vueuse/motion";
import { computed, ref } from "vue";
import { useCartsStore } from "@/stores/useCartsStore";
import { storeToRefs } from "pinia";
import { useEventStore } from "@/stores/useEventStore";

const itemRef = ref<HTMLElement>();
const wizard = useWizardStore();
const eventStore = useEventStore();
const cartsStore = useCartsStore();
const { item, processing, cart } = storeToRefs(cartsStore);
const { event } = storeToRefs(eventStore);

const emit = defineEmits<{
    close: [value: boolean];
}>();

const collections = computed(() => {
    if (item.value?.collections.length) return item.value?.collections;
    if (event.value?.collections.length) return event.value?.collections;

    return [];
});

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

const submitAction = () => {
    if (!cart.value.total_quantity) return;

    return wizard.setComponent("Step3");
};
</script>
