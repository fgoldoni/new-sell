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
</script>

<template>
    <div
        class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400"
    >
        <div class="flex -space-x-1 overflow-hidden">
            <img
                v-for="i in quantity * item.quantity"
                class="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-slate-600"
                :src="item.avatar_url"
                :alt="item.name"
            />
        </div>
        {{ quantity }} * {{ item.quantity }} {{ item.name }}
    </div>
</template>

<style scoped></style>
