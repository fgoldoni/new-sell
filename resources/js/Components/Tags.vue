<template>
    <div :class="`flex items-center justify-center bg-${$page.props.team.color}-900 py-8`">
        <div class="flex flex-wrap justify-center gap-x-6 gap-y-4">
            <span class="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-200">
                <svg :class="`h-1.5 w-1.5 fill-${$page.props.team.color}-500`" viewBox="0 0 6 6" aria-hidden="true">
                  <circle cx="3" cy="3" r="3" />
                </svg>
                Badge
           </span>
            <span class="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-200">
                <svg class="h-1.5 w-1.5 fill-pink-500" viewBox="0 0 6 6" aria-hidden="true">
                  <circle cx="3" cy="3" r="3" />
                </svg>
                Badge
           </span>
            <span class="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-200">
                <svg class="h-1.5 w-1.5 fill-pink-500" viewBox="0 0 6 6" aria-hidden="true">
                  <circle cx="3" cy="3" r="3" />
                </svg>
                Badge
           </span>
            <span class="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-200">
                <svg class="h-1.5 w-1.5 fill-pink-500" viewBox="0 0 6 6" aria-hidden="true">
                  <circle cx="3" cy="3" r="3" />
                </svg>
                Badge
           </span>
            <span class="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-200">
                <svg class="h-1.5 w-1.5 fill-pink-500" viewBox="0 0 6 6" aria-hidden="true">
                  <circle cx="3" cy="3" r="3" />
                </svg>
                Badge
           </span>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
