<script setup lang="ts">
defineProps<{
    message?: string;
}>();
</script>

<template>
    <div v-show="message">
        <p class="mt-2 text-xs text-red-400">
            {{ message }}
        </p>
    </div>
</template>
