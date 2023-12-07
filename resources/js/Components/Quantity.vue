<script setup lang="ts">
const props = defineProps<{
    modelValue: number;
}>();
const emit = defineEmits<{
    "update:modelValue": [value: boolean];
}>();
</script>

<template>
    <div class="relative flex items-center justify-center">
        <button
            type="button"
            id="decrement-button"
            @click="$emit('update:modelValue', modelValue - 1)"
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
            :value="modelValue"
            @input="$emit('update:modelValue', parseInt($event.target.value))"
            required
        />
        <button
            type="button"
            id="increment-button"
            @click="$emit('update:modelValue', modelValue + 1)"
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
</template>

<style scoped></style>
