<script setup lang="ts">
import Entries from "@/Components/Tickets/Wizard/Step1/Entries.vue";
</script>

<template>
    <div
        class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8 w-full p-4 sm:p-0"
    >
        <div class="col-span-3">
            <div class="flex flex-col items-center justify-center space-y-2">
                <h3 class="text-xl font-bold text-gray-900 sm:text-2xl">
                    Okay, los gehts...
                </h3>
                <form class="max-w-xs mx-auto">
                    <label
                        for="counter-input"
                        class="block mb-1 text-xl font-medium text-gray-500 dark:text-white"
                        >Wie viele Personen seid ihr?</label
                    >
                    <div class="relative flex items-center justify-center">
                        <button
                            type="button"
                            id="decrement-button"
                            data-input-counter-decrement="counter-input"
                            class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                        >
                            <svg
                                class="w-2.5 h-2.5 text-gray-900 dark:text-white"
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
                            id="counter-input"
                            data-input-counter
                            class="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
                            placeholder=""
                            value="12"
                            required
                        />
                        <button
                            type="button"
                            id="increment-button"
                            data-input-counter-increment="counter-input"
                            class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                        >
                            <svg
                                class="w-2.5 h-2.5 text-gray-900 dark:text-white"
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
        </div>
        <div class="col-span-3">
            <Entries></Entries>
        </div>
        <div class="col-span-3">
            <label
                for="description"
                class="block text-xl font-medium leading-6 text-center text-gray-500"
                >Hinweise</label
            >
            <div class="mt-2">
                <textarea
                    id="description"
                    name="description"
                    placeholder="Hinweise für uns..."
                    rows="4"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
