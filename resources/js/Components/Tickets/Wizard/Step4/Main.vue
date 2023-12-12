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
                                            Kontaktinfos:
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <form
                                class="w-full my-8 p-4 space-y-8"
                                @submit.prevent="submit"
                                @keydown="(value) => form.errors.clear(value)"
                            >
                                <div class="relative z-0 w-full mb-5 group">
                                    <input
                                        type="text"
                                        name="name"
                                        v-model="form.name"
                                        id="name"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=""
                                        required
                                    />
                                    <label
                                        for="name"
                                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        {{ __("Name") }}
                                    </label>
                                    <InputError
                                        :message="form.errors.get('name')"
                                    />
                                </div>

                                <div class="grid md:grid-cols-2 md:gap-6">
                                    <div class="relative z-0 w-full mb-5 group">
                                        <input
                                            type="email"
                                            name="email"
                                            v-model="form.email"
                                            id="email"
                                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" "
                                            required
                                        />
                                        <label
                                            for="email"
                                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >
                                            {{ __("Email address") }}
                                        </label>
                                        <InputError
                                            :message="form.errors.get('email')"
                                        />
                                    </div>
                                    <div class="relative z-0 w-full mb-5 group">
                                        <input
                                            type="email"
                                            name="email_confirmation"
                                            v-model="form.email_confirmation"
                                            id="email_confirmation"
                                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" "
                                            required
                                        />
                                        <label
                                            for="email_confirmation"
                                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >
                                            {{ __("Email Confirmation") }}
                                        </label>
                                        <p
                                            class="mt-2 text-xs text-slate-400 dark:text-slate-500"
                                        >
                                            Stelle sicher, dass deine
                                            E-Mail-Adresse korrekt ist.
                                        </p>
                                    </div>
                                </div>

                                <div class="relative z-0 w-full mb-5 group">
                                    <span
                                        class="absolute start-0 bottom-3 text-gray-500 dark:text-gray-400"
                                    >
                                        <svg
                                            class="w-4 h-4 rtl:rotate-[270deg]"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 19 18"
                                        >
                                            <path
                                                d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"
                                            />
                                        </svg>
                                    </span>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        v-model="form.phone"
                                        class="block py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        for="phone"
                                        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                                    >
                                        {{ __("Phone") }}
                                    </label>
                                </div>
                                <InputError
                                    :message="form.errors.get('phone')"
                                />
                                <Comboboxes
                                    :options="countries"
                                    v-model="form.country_id"
                                ></Comboboxes>
                                <InputError
                                    :message="form.errors.get('country_id')"
                                />
                                <button
                                    ref="submitRef"
                                    type="submit"
                                    class="hidden"
                                />
                            </form>
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
import { reactive, ref } from "vue";
import { useCartsStore } from "@/stores/useCartsStore";
import { storeToRefs } from "pinia";
import { usePage } from "@inertiajs/vue3";
import { useAuthStore } from "@/stores/useAuthStore";
import { Errors } from "@/plugins/errors";
import ApiError from "@/models/ApiError";
import Comboboxes from "@/Components/Comboboxes.vue";
import { useCountriesStore } from "@/stores/useCountriesStore";
import InputError from "@/Components/InputError.vue";
import { setCookie } from "@/composable/useCookie";
import { COOKIE_MAX_AGE_1_YEAR } from "@/utils/constants";

const itemRef = ref<HTMLElement>();
const submitRef = ref<HTMLElement>();
const wizard = useWizardStore();
const cartsStore = useCartsStore();
const { item } = storeToRefs(cartsStore);
const authStore = useAuthStore();
const { isAuthenticated, user } = storeToRefs(authStore);
const countriesStore = useCountriesStore();
const { countries } = storeToRefs(countriesStore);

const emit = defineEmits<{
    close: [value: boolean];
}>();

const form = reactive({
    name: user.value?.name || "",
    email: user.value?.email || "",
    email_confirmation: user.value?.email || "",
    country_id: user.value?.country_id || 149,
    phone: user.value?.phone || "",
    locale: usePage().props.team.locale,
    terms: true,
    errors: new Errors(),
    is_logged: isAuthenticated.value,
    processing: false,
    payment: null,
    to: route("home"),
});

const submit = async () => {
    try {
        await authStore
            .post(
                form.name,
                form.email,
                form.email_confirmation,
                form.phone,
                form.country_id,
                form.locale,
                form.is_logged,
                form.to,
                form.terms,
            )
            .then(async (response: any) => {
                setCookie("accessToken", response.token, COOKIE_MAX_AGE_1_YEAR);
                authStore.setToken(response.token);
                authStore.setAuth(response.user);
                await wizard.setComponent("Step5");
            })
            .catch((error: any) => {
                form.errors.onFailed(error);
                throw new ApiError(error);
            });
    } catch (error) {
        throw new ApiError(error);
    }
};

const submitAction = () => {
    submitRef.value?.click();
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
