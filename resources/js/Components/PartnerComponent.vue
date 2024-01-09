<script setup lang="ts">
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

interface Props {
    item: any;
    index: number;
}

const props = defineProps<Props>();

const itemRef = ref<HTMLElement>();

useMotion(itemRef, {
    initial: {
        opacity: 0,
        scale: 0,
    },
    visibleOnce: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 100 * props.index,
            duration: 500,
        },
    },
});
</script>

<template>
    <li ref="itemRef" class="rounded-2xl bg-white dark:bg-slate-900 p-4">
        <img
            class="btn-base mx-auto h-24 w-24 rounded-full"
            :src="item.avatar_url"
            :alt="item.name"
        />
        <h3
            class="uppercase mt-6 text-xs font-semibold leading-7 tracking-tight text-slate-900 dark:text-white"
        >
            {{ item.name }}
        </h3>
        <p
            class="uppercase text-xs leading-6 text-slate-500 dark:text-slate-400"
        >
            {{ item.title }}
        </p>
    </li>
</template>

<style scoped></style>
