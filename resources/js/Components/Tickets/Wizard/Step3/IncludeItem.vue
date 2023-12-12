<script setup lang="ts">
import { CartProduct } from "@/types/carts";
import { computed } from "vue";
import { truncate } from "lodash";

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

    if (total > 4) {
        return total - 4;
    } else {
        return 0;
    }
});
</script>

<template>
    <div class="flex items-center justify-between">
        <div class="isolate flex -space-x-1">
            <img
                v-for="q in limit"
                class="relative z-30 inline-block h-8 w-8 rounded-full ring-2 ring-white"
                :src="item.avatar_url"
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
        <div class="text-slate-500">
            {{ item.quantity * quantity }} *
            {{
                truncate(item.name, {
                    length: 24,
                })
            }}
        </div>
    </div>
</template>

<style scoped></style>
