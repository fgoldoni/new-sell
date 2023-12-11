<template>
    <div
        class="flex h-full flex-col divide-y divide-gray-200 bg-white dark:bg-slate-900 shadow-xl"
    >
        <div class="flex min-h-0 flex-1 flex-col overflow-y-scroll">
            <Header
                @close="emit('close', false)"
                @previous="() => wizard.setComponent('Step3')"
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
                                class="ml-auto w-9 min-w-max whitespace-nowrap rounded-full px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-slate-900 dark:text-white ring-1 ring-inset ring-slate-200 dark:ring-slate-700"
                                aria-hidden="true"
                            >
                                4
                            </span>
                        </li>
                    </template>
                </Stepper>
                <Body :model-value="form" @update:model-value="update"></Body>
            </div>
        </div>

        <div
            id="toast-default"
            class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
            role="alert"
        >
            <div
                class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200"
            >
                <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 20"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z"
                    />
                </svg>
                <span class="sr-only">Fire icon</span>
            </div>
            <div class="ms-3 text-sm font-normal">Set yourself free.</div>
            <button
                type="button"
                class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                data-dismiss-target="#toast-default"
                aria-label="Close"
            >
                <span class="sr-only">Close</span>
                <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                </svg>
            </button>
        </div>

        <Footer @submit-action="register"></Footer>
    </div>
</template>
<script setup lang="ts">
import Header from "@/Components/Tickets/Wizard/Header.vue";
import Body from "@/Components/Tickets/Wizard/Step4/Body.vue";
import Footer from "@/Components/Tickets/Wizard/Footer.vue";
import Stepper from "@/Components/Tickets/Wizard/Stepper.vue";
import { useWizardStore } from "@/stores/useWizardStore";
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";
import { useCartsStore } from "@/stores/useCartsStore";
import { storeToRefs } from "pinia";
import { usePage } from "@inertiajs/vue3";
import { useAuthStore } from "@/stores/useAuthStore";
import { useApi } from "@/composable/useApi";
import { Errors } from "@/plugins/errors";
import ApiError from "@/models/ApiError";

const itemRef = ref<HTMLElement>();
const wizard = useWizardStore();
const cartsStore = useCartsStore();
const { item } = storeToRefs(cartsStore);
const authStore = useAuthStore();
const { isAuthenticated, user } = storeToRefs(authStore);

const api = useApi();

const emit = defineEmits<{
    close: [value: boolean];
}>();

const form = ref({
    name: user.value?.name || "",
    email: user.value?.email || "",
    email_confirmation: user.value?.email || "",
    country_id: user.value?.country_id,
    phone: user.value?.phone || "",
    locale: usePage().props.team.locale,
    terms: true,
    errors: new Errors(),
    is_logged: isAuthenticated.value,
    processing: false,
    to: route("home"),
});

const register = async () => {
    try {
        await api.authentication.register(
            form.value.name,
            form.value.email,
            form.value.email_confirmation,
            form.value.phone,
            form.value.country_id,
            form.value.locale,
            form.value.is_logged,
            form.value.to,
            form.value.terms,
        );
    } catch (error) {
        throw new ApiError(error);
    }
};
const update = (key: any, value: any) => {
    form.value[key] = value;
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
