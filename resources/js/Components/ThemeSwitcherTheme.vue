<script setup lang="ts">
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline'

import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
    <button
        type="button"
        @click="toggleDark()"
        class="rounded-full p-2 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
        :class="{'hover:bg-slate-700': isDark, 'hover:bg-slate-200': !isDark}"
    >
        <MoonIcon v-if="isDark" class="h-5 w-5 text-white" aria-hidden="true" />
        <SunIcon v-else class="h-5 w-5 text-slate-800" aria-hidden="true" />
    </button>
</template>

<style scoped>

</style>
