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
                    <span class="relative inline-block flex-shrink-0">
                        <img
                            class="h-10 w-10 rounded-full"
                            :src="item.avatar"
                            alt=""
                        />
                        <span
                            :class="[
                                true ? 'bg-green-400' : 'bg-gray-300',
                                'absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white',
                            ]"
                            aria-hidden="true"
                        />
                    </span>
                    <div class="ml-4 truncate">
                        <p
                            class="truncate text-sm font-medium text-slate-900 dark:text-white"
                        >
                            {{ $page.props.team.currency.symbol }}
                            {{ item.price }}
                        </p>
                        <p
                            class="truncate text-sm text-slate-500 dark:text-slate-400"
                        >
                            {{ item.name }}
                        </p>
                    </div>
                </div>
            </a>
            <div class="relative ml-2 inline-block flex-shrink-0 text-left">
                <Quantity
                    :model-value="quantity"
                    @update:model-value="update"
                ></Quantity>
            </div>
        </div>
    </li>
</template>

<style scoped></style>
