<script setup lang="ts">
import { CartItem } from "@/types/carts";
import { computed } from "vue";

interface Props {
    item: CartItem;
    index: number;
}

const props = defineProps<Props>();

const limit = computed(() => {
    let total = props.item?.quantity;

    if (total > 2) {
        return 2;
    } else {
        return total;
    }
});

const rest = computed(() => {
    let total = props.item?.quantity;

    if (total > 2) {
        return total - 2;
    } else {
        return 0;
    }
});
</script>

<template>
    <li
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{
            y: 0,
            opacity: 1,
            transition: {
                delay: 100 * index,
                duration: 500 * index,
            },
        }"
        :delay="200"
    >
        <div class="group relative flex items-center px-5 py-6">
            <a href="javascript:;" class="-m-1 block flex-1 p-1">
                <div
                    class="absolute inset-0 group-hover:bg-slate-200 dark:group-hover:bg-slate-900"
                    aria-hidden="true"
                />
                <div class="relative flex min-w-0 flex-1 items-center">
                    <div class="isolate flex -space-x-1">
                        <img
                            v-for="l in limit"
                            class="relative z-30 inline-block h-8 w-8 rounded-full ring-2 ring-white"
                            :src="item.attributes.item.avatar_url"
                            :alt="item.name"
                        />
                        <span
                            v-if="rest > 0"
                            class="z-30 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700"
                        >
                            <span
                                class="text-sm font-medium leading-none text-slate-500 dark:text-slate-300"
                                >+{{ rest }}</span
                            >
                        </span>
                    </div>
                    <div class="ml-4 truncate">
                        <p
                            class="truncate text-xs font-medium text-slate-900 dark:text-white"
                        >
                            {{ $page.props.team.currency.symbol }}
                            {{ item.price }}
                        </p>
                        <p
                            class="truncate text-xs text-slate-500 dark:text-slate-400 uppercase"
                        >
                            {{ item.quantity }} * {{ item.name }}
                        </p>
                    </div>
                </div>
            </a>
        </div>
    </li>
</template>

<style scoped></style>
