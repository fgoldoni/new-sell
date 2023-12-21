<template>
    <li
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{
            y: 0,
            opacity: 1,
            transition: {
                delay: 100 * index,
                duration: 1000 * index,
            },
        }"
        class="col-span-1 flex flex-col rounded-lg text-center shadow-2xl btn-title"
    >
        <div class="flex flex-1 flex-col p-4">
            <img
                class="mx-auto h-32 w-32 sm:h-44 sm:w-44 flex-shrink-0 rounded-full"
                :src="item.avatar"
                :alt="item.name"
            />
            <h3 class="mt-6 text-sm font-medium text-slate-900 dark:text-white">
                {{ $page.props.team.currency.symbol }}
                {{ item.price }}
            </h3>
            <dl class="mt-1 flex flex-grow flex-col justify-between">
                <dt class="sr-only">name</dt>
                <dd class="text-sm text-gray-500 uppercase">
                    {{ item.name }}
                </dd>
                <dt class="sr-only">quantity</dt>
                <dd class="mt-3">
                    <Quantity
                        :model-value="quantity"
                        @update:model-value="update"
                    ></Quantity>
                </dd>
            </dl>
        </div>
    </li>
</template>

<script setup lang="ts">
import { Product } from "@/types";
import Quantity from "@/Components/Quantity.vue";
import { computed } from "vue";
import { useCartsStore } from "@/stores/useCartsStore";
import { CartPayload } from "@/types/carts";

interface Props {
    item: Product;
    index: number;
}

const props = defineProps<Props>();

const cartsStore = useCartsStore();
const quantity = computed(
    () => cartsStore.findItem("product", props.item.id)?.quantity || 0,
);
const update = async (value: number) => {
    let payload: CartPayload = {
        id: props.item.id,
        model: props.item.model,
        quantity: value,
        reset: false,
    };

    if (value === 0) await cartsStore.destroy("product-" + props.item.id);
    if (value > 0) return await cartsStore.store(payload);
};
</script>
