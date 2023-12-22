<script setup lang="ts">
import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline";

import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
    <button
        type="button"
        @click="toggleDark()"
        :class="[
            'text-' +
                $page.props.team.color +
                '-700 hover:bg-' +
                $page.props.team.color +
                '-700 hover:text-white focus:outline-none transition duration-700 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:text-' +
                $page.props.team.color +
                '-500 dark:hover:text-white dark:hover:bg-slate-800',
        ]"
    >
        <MoonIcon v-if="isDark" class="h-5 w-5 text-white" aria-hidden="true" />
        <SunIcon v-else class="h-5 w-5 text-white" aria-hidden="true" />
    </button>
</template>

<style scoped></style>
