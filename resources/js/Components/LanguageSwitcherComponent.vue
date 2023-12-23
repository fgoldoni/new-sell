<script setup lang="ts">
interface Props {
    scrolledFromTop: boolean;
}

const props = defineProps<Props>();
</script>

<template>
    <div
        class="flex items-center justify-between text-slate-900 dark:text-white space-x-2"
    >
        <a
            v-for="(currency, key) in $page.props.team.domains"
            :key="key"
            :href="currency.domain"
            :class="[
                scrolledFromTop ? 'scale-75' : 'scale-100',
                'transition duration-700 inline-flex items-center justify-center rounded-md p-2 text-white dark:hover:bg-slate-800 hover:bg-' +
                    $page.props.team.color +
                    '-700 hover:text-white uppercase focus:outline-none`',
            ]"
        >
            <span v-html="currency.emoji"></span>
        </a>
    </div>
</template>

<style scoped></style>
