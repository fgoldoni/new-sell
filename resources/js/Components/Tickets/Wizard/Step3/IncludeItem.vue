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
        <div class="text-slate-500 text-xs uppercase flex-1 truncate">
            {{ quantity }} * {{ item.quantity }}
            {{ item.name }}
        </div>
    </div>
</template>

<style scoped></style>
