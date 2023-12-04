<template>
    <div
        :class="`flex items-center justify-center py-8 border-2 border-slate-200 dark:border-slate-600 shadow-xl`"
    >
        <div class="flex flex-wrap justify-center gap-x-6 gap-y-4">
            <span
                v-for="tag in $page.props.team.event?.tags"
                :class="`btn-title inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-slate-800 text-${$page.props.team.color}-700 dark:text-white ring-1 ring-inset ring-slate-200`"
            >
                <svg
                    :class="`h-1.5 w-1.5 fill-${$page.props.team.color}-500`"
                    viewBox="0 0 6 6"
                    aria-hidden="true"
                >
                    <circle cx="3" cy="3" r="3" />
                </svg>
                {{ tag }}
            </span>
        </div>
    </div>
</template>
<script setup lang="ts"></script>
