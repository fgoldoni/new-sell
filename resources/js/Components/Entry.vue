<script setup lang="ts">
import { Ticket } from "@/models/Ticket";
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

interface Props {
    item: Ticket;
    index: number;
    processing: string | null;
}

const props = defineProps<Props>();
const emit = defineEmits<{
    open: [value: Ticket];
}>();
const itemRef = ref<HTMLElement>();

useMotion(itemRef, {
    initial: {
        opacity: 0,
        y: 100,
    },
    visibleOnce: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 500 * props.index,
            duration: 1000,
        },
    },
});
</script>

<template>
    <div
        @click="emit('open', item)"
        ref="itemRef"
        :class="[
            item.quantity > 0
                ? `ring-${$page.props.team.color}-500`
                : 'ring-rose-500',
            `cursor-pointer btn-title flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-800 p-8 shadow-xl ring-1 sm:p-10`,
        ]"
    >
        <div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <h3
                    :class="[
                    item.quantity > 0
                        ? `text-${$page.props.team.color}-600 dark:text-${$page.props.team.color}-400`
                        : 'text-rose-600',
                    `col-span-2 text-base font-semibold leading-7 uppercase`,
                ]"
                >
                    {{ item.name }}
                </h3>
                <p v-if="item.quantity > 0 && item.quantity < 5" class="text-center uppercase animate-pulse rounded-full  ring-1 ring-inset ring-rose-600 px-2.5 py-1 text-xs font-semibold leading-5 text-rose-600">
                    {{ item.quantity }}  {{ __("labels.action.left") }}
                </p>
            </div>

            <div class="mt-4 flex items-baseline gap-x-2">
                <span
                    class="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white"
                >
                    {{ $page.props.team.currency.code }}
                    {{ item.price }}
                </span>
            </div>
            <p
                class="mt-6 text-base leading-7 text-slate-500 dark:text-slate-400"
                v-html="item.description"
            />
            <ul
                role="list"
                class="mt-10 space-y-4 text-sm leading-6 text-gray-600"
            >
                <li
                    v-for="tag in item.tags"
                    :key="tag"
                    class="flex gap-x-3 justify-between  uppercase"
                >
                    <svg
                        :class="`h-6 w-5 flex-none text-${$page.props.team.color}-600`"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                        />
                    </svg>
                    <span class="truncate">{{ tag }}</span>
                </li>
                <li
                    v-for="product in item.products"
                    :key="product.id"
                    class="flex justify-between gap-x-3 uppercase"
                >
                    <div class="flex -space-x-1">
                        <img v-for="i in product.quantity" :key="i" class="inline-block h-6 w-6 rounded-full ring-2 ring-slate-200 dark:ring-slate-700"
                             :src="product.avatar"
                             :alt="product.name"
                        />
                    </div>
                    <span class="truncate"> {{ product.quantity }} * {{ product.name }}</span>
                </li>
            </ul>
        </div>
        <button
            aria-describedby="tier-hobby"
            :class="[
                item.quantity > 0
                    ? `btn-base  bg-${$page.props.team.color}-600 hover:bg-${$page.props.team.color}-500`
                    : 'bg-rose-600 hover:bg-rose-500',
                `mt-8 block uppercase rounded-md px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${$page.props.team.color}-600`,
            ]"
        >
            <svg
                v-if="processing === item.id"
                class="animate-spin h-5 w-5 inline-flex text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                ></circle>
                <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
            </svg>
            <span v-else-if="item.quantity > 0">
                {{ __("labels.action.book") }}
            </span>
            <span v-else>
                {{ __("labels.action.sold") }}
            </span>
        </button>
    </div>
</template>

<style scoped></style>
