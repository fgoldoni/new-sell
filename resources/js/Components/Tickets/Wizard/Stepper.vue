<script setup lang="ts"></script>

<template>
    <div class="relative mt-6 flex-1 px-4 sm:px-6">
        <ol
            class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base"
        >
            <slot name="step-1"></slot>
            <slot name="step-2"></slot>
            <slot name="step-3"></slot>
            <slot name="step-4"></slot>
        </ol>
    </div>
</template>

<style scoped></style>
