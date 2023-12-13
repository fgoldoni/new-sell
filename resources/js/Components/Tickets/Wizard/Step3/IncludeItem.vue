<script setup lang="ts">
import { CartProduct } from "@/types/carts";
import { computed } from "vue";

interface Props {
    item: CartProduct;
    index: number;
    quantity: number;
}

const props = defineProps<Props>();

const limit = computed(() => {
    let total = props.item?.quantity * props.quantity;

    if (total > 2) {
        return 2;
    } else {
        return total;
    }
});

const rest = computed(() => {
    let total = props.item?.quantity * props.quantity;

    if (total > 2) {
        return total - 2;
    } else {
        return 0;
    }
});
</script>

<template>
    <div class="flex items-center justify-between">
        <div class="isolate flex -space-x-1">
            <img
                v-for="l in limit"
                class="relative z-30 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                :src="item.avatar_url"
                :alt="item.name"
            />
            <span
                v-if="rest > 0"
                class="z-30 inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700"
            >
                <span
                    class="text-sm font-medium leading-none text-slate-500 dark:text-slate-300"
                    >+{{ rest }}</span
                >
            </span>
        </div>
        <div class="text-slate-500 text-xs uppercase ml-4 flex-1 truncate">
            {{ quantity }} * {{ item.quantity }}
            {{ item.name }}
        </div>
    </div>
</template>

<style scoped></style>
