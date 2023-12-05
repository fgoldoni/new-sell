<template>
    <div class="mx-auto max-w-4xl sm:px-6 lg:px-8">
        <div
            class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow"
        >
            <div class="px-4 py-5 sm:px-6 text-center">
                <h2>Okay, los gehts...</h2>
            </div>
            <div class="px-4 py-5 sm:p-6">
                <form class="flex items-center justify-center flex-col">
                    <label
                        for="quantity-input"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Wie viele Personen seid ihr?
                    </label>
                    <div class="relative flex items-center max-w-[8rem]">
                        <button
                            type="button"
                            id="decrement-button"
                            data-input-counter-decrement="quantity-input"
                            class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                        >
                            <svg
                                class="w-3 h-3 text-gray-900 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 2"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 1h16"
                                />
                            </svg>
                        </button>
                        <input
                            type="text"
                            id="quantity-input"
                            data-input-counter
                            aria-describedby="helper-text-explanation"
                            class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="999"
                            required
                        />
                        <button
                            type="button"
                            id="increment-button"
                            data-input-counter-increment="quantity-input"
                            class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                        >
                            <svg
                                class="w-3 h-3 text-gray-900 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 18"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 1v16M1 9h16"
                                />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
            <div class="px-4 py-4 sm:px-6">
                <div>
                    <div class="flex items-center justify-center">
                        <h2 class="text-sm font-medium leading-6 text-gray-900">
                            Und wann plant ihr ca. zu kommen?
                        </h2>
                    </div>

                    <RadioGroup v-model="mem" class="mt-2">
                        <RadioGroupLabel class="sr-only"
                            >Choose a memory option
                        </RadioGroupLabel>
                        <div class="grid grid-cols-3 gap-3">
                            <RadioGroupOption
                                as="template"
                                v-for="option in memoryOptions"
                                :key="option.name"
                                :value="option"
                                :disabled="!option.inStock"
                                v-slot="{ active, checked }"
                            >
                                <div
                                    :class="[
                                        option.inStock
                                            ? 'cursor-pointer focus:outline-none'
                                            : 'cursor-not-allowed opacity-25',
                                        active
                                            ? 'ring-2 ring-indigo-600 ring-offset-2'
                                            : '',
                                        checked
                                            ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                                            : 'ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50',
                                        'flex items-center justify-center rounded-md py-3 px-3 text-sm font-semibold uppercase sm:flex-1',
                                    ]"
                                >
                                    <RadioGroupLabel as="span"
                                        >{{ option.name }}
                                    </RadioGroupLabel>
                                </div>
                            </RadioGroupOption>
                        </div>
                    </RadioGroup>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTicketsStore } from "@/stores/useTicketsStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";

const ticketsStore = useTicketsStore();
const { ticket } = storeToRefs(ticketsStore);

const memoryOptions = [
    { name: "4 GB", inStock: true },
    { name: "8 GB", inStock: true },
    { name: "16 GB", inStock: true },
    { name: "32 GB", inStock: true },
    { name: "64 GB", inStock: true },
    { name: "128 GB", inStock: false },
];

const mem = ref(memoryOptions[2]);
</script>

<style scoped></style>
