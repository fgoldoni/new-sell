<template>
    <div
        class="flex h-full flex-col divide-y divide-gray-200 bg-white dark:bg-slate-900 shadow-xl"
    >
        <div class="flex min-h-0 flex-1 flex-col overflow-y-scroll">
            <Header
                @close="emit('close', false)"
                @previous="() => wizard.setComponent('Step4')"
                :has-previous="true"
                :title="item?.name"
            ></Header>
            <div ref="itemRef" class="container mx-auto sm:px-6 lg:px-8">
                <Stepper>
                    <template v-slot:step-1>
                        <li
                            class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
                        >
                            <span
                                :class="`flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500`"
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
                            class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
                        >
                            <span
                                :class="`flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500`"
                            >
                                <span
                                    :class="`ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-${$page.props.team.color}-600 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-${$page.props.team.color}-500`"
                                    aria-hidden="true"
                                >
                                    2
                                </span>
                            </span>
                        </li>
                    </template>
                    <template v-slot:step-3>
                        <li
                            class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
                        >
                            <span
                                :class="`flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500`"
                            >
                                <span
                                    :class="`ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-${$page.props.team.color}-600 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-${$page.props.team.color}-500`"
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
                                :class="`ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-${$page.props.team.color}-600 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-${$page.props.team.color}-500`"
                                aria-hidden="true"
                            >
                                4
                            </span>
                        </li>
                    </template>
                </Stepper>
                <div
                    class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8 w-full p-4 sm:p-0"
                >
                    <div class="col-span-3">
                        <div
                            class="flex h-full flex-col bg-slate-50 dark:bg-slate-800 shadow-xl"
                        >
                            <div
                                class="border-b border-slate-200 dark:border-slate-600"
                            >
                                <div class="p-6">
                                    <div
                                        class="flex items-start justify-between"
                                    >
                                        <h2
                                            class="text-xl font-semibold leading-6 text-slate-500 dark:text-white"
                                        >
                                            Wie möchtest du zahlen?
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full my-8 p-4 space-y-8">
                                <div
                                    id="paypal-button"
                                    ref="paypalRef"
                                    class="invisible"
                                ></div>
                                <div class="relative">
                                    <div
                                        class="absolute inset-0 flex items-center"
                                        aria-hidden="true"
                                    >
                                        <div
                                            class="w-full border-t border-gray-200 dark:border-gray-600"
                                        />
                                    </div>
                                    <div class="relative flex justify-center">
                                        <span
                                            class="bg-white dark:bg-slate-800 px-2 text-gray-500"
                                        >
                                            <PlusIcon
                                                class="h-5 w-5 text-gray-500"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </div>
                                </div>
                                <PaymentMethod
                                    v-model="form.payment"
                                ></PaymentMethod>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer @submit-action="submitAction"></Footer>
    </div>
</template>
<script setup lang="ts">
import Header from "@/Components/Tickets/Wizard/Header.vue";
import Footer from "@/Components/Tickets/Wizard/Footer.vue";
import Stepper from "@/Components/Tickets/Wizard/Stepper.vue";
import { useWizardStore } from "@/stores/useWizardStore";
import { useMotion } from "@vueuse/motion";
import { onMounted, reactive, ref } from "vue";
import { useCartsStore } from "@/stores/useCartsStore";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/useAuthStore";
import { Errors } from "@/plugins/errors";
import PaymentMethod from "@/Components/PaymentMethod.vue";
import { usePaypalStore } from "@/stores/usePaypalStore";
import { PlusIcon } from "@heroicons/vue/20/solid";

const itemRef = ref<HTMLElement>();
const wizard = useWizardStore();
const cartsStore = useCartsStore();
const { item, cart } = storeToRefs(cartsStore);
const authStore = useAuthStore();
const { isAuthenticated, user } = storeToRefs(authStore);
const paypalStore = usePaypalStore();

const emit = defineEmits<{
    close: [value: boolean];
}>();

const form = reactive({
    errors: new Errors(),
    is_logged: isAuthenticated.value,
    processing: false,
    payment: null,
    to: route("home"),
});

const submitAction = () => {
    debugger;
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

onMounted(async () => {
    if (paypalStore.isNotEnable()) return;

    const purchaseUnits = cartsStore.paypalPurchaseUnits();

    try {
        const paypal = await paypalStore.loadPaypal();

        if (paypal) {
            try {
                // await window.fbq("track", "InitiateCheckout");

                return await paypalStore.setButtons(
                    paypal,
                    purchaseUnits,
                    cart,
                );
            } catch (error) {
                console.error("failed to render the PayPal Buttons", error);
            }
        }
    } catch (error) {
        form.errors.onFailed(error);
        console.error("failed to load the PayPal JS SDK script", error);
    }
});
</script>
