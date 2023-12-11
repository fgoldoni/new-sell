<script setup lang="ts">
import PaymentMethod from "@/Components/PaymentMethod.vue";
import Comboboxes from "@/Components/Comboboxes.vue";
import { storeToRefs } from "pinia";
import { useCountriesStore } from "@/stores/useCountriesStore";

const countriesStore = useCountriesStore();
const { countries } = storeToRefs(countriesStore);

interface Props {
    modelValue: any;
}

defineProps<Props>();

const emit = defineEmits<{
    "update:modelValue": [key: any, value: any];
}>();
</script>

<template>
    <form class="w-full my-8 p-4 space-y-8">
        <div class="relative z-0 w-full mb-5 group">
            <input
                type="text"
                name="name"
                :value="modelValue.name"
                @input="emit('update:modelValue', 'name', $event.target.value)"
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
        </div>

        <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
                <input
                    type="email"
                    name="email"
                    :value="modelValue.email"
                    @input="
                        emit('update:modelValue', 'email', $event.target.value)
                    "
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
            </div>
            <div class="relative z-0 w-full mb-5 group">
                <input
                    type="email"
                    name="email_confirmation"
                    :value="modelValue.email_confirmation"
                    @input="
                        emit(
                            'update:modelValue',
                            'email_confirmation',
                            $event.target.value,
                        )
                    "
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
                <p class="mt-2 text-xs text-slate-400 dark:text-slate-500">
                    Stelle sicher, dass deine E-Mail-Adresse korrekt ist.
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
                :value="modelValue.phone"
                @input="emit('update:modelValue', 'phone', $event.target.value)"
                class="block py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
            />
            <label
                for="phone"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
                {{ __("Phone") }}
            </label>
        </div>
        <Comboboxes
            :options="countries"
            :model-value="modelValue?.country_id"
            @update:model-value="
                (key, value) => emit('update:modelValue', key, value)
            "
        ></Comboboxes>
        <PaymentMethod></PaymentMethod>
    </form>
</template>

<style scoped></style>
