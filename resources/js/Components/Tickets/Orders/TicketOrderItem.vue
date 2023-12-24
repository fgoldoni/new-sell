<script setup lang="ts">
import { CartItem } from "@/types/carts";
import IncludeItem from "@/Components/Tickets/Wizard/Step3/IncludeItem.vue";

interface Props {
    item: CartItem;
    index: number;
}

defineProps<Props>();
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
        <div class="group relative flex items-center sm:px-5 py-6">
            <a href="javascript:;" class="-m-1 block flex-1 p-1">
                <div
                    class="absolute inset-0 group-hover:bg-slate-200 dark:group-hover:bg-slate-900"
                    aria-hidden="true"
                />
                <div class="relative flex min-w-0 flex-1 items-center">
                    <div class="truncate uppercase">
                        <p
                            class="truncate text-sm font-medium text-slate-900 dark:text-white"
                        >
                            {{ $page.props.team.currency.code }}
                            {{ item.price }}
                        </p>
                        <p
                            class="truncate text-sm text-slate-500 dark:text-slate-400"
                        >
                            {{ item.quantity }} * {{ item.name }}
                        </p>
                    </div>
                </div>
            </a>
            <div
                :class="`relative ml-1 inline-block flex-shrink-0 text-left text-${$page.props.team.color}-500 dark:text-${$page.props.team.color}-400`"
            >
                {{ item.quantity }} * {{ item.attributes.item.attendees }} PL.
            </div>
        </div>

        <div
            class="ml-4 p-2 space-y-2"
            v-if="item.attributes?.products?.length"
        >
            <template
                v-for="(product, index) in item.attributes.products"
                :key="product.id"
            >
                <IncludeItem
                    :item="product"
                    :quantity="item.quantity"
                    :index="index"
                ></IncludeItem>
            </template>
        </div>
    </li>
</template>

<style scoped></style>
