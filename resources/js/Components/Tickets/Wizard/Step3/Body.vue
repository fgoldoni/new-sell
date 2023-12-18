<template>
    <div
        class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8 w-full p-4 sm:p-0"
    >
        <div class="col-span-3">
            <div
                class="flex h-full flex-col bg-slate-50 dark:bg-slate-800 shadow-xl"
            >
                <div class="border-b border-slate-200 dark:border-slate-600">
                    <div class="p-6">
                        <div class="flex items-start justify-between">
                            <h2
                                class="text-xl font-semibold leading-6 text-slate-500 dark:text-white"
                            >
                                {{ __("wizard.step_3.title") }}
                            </h2>
                        </div>
                    </div>
                </div>
                <ul
                    role="list"
                    class="overflow-auto h-72 relative divide-y divide-slate-200 dark:divide-slate-600 h-72 overflow-y-auto"
                >
                    <template
                        v-for="(item, index) in cart?.items"
                        :key="item.id"
                    >
                        <TicketCartItem
                            :item="item"
                            v-if="item.attributes.type === 'ticket'"
                            :index="index"
                        ></TicketCartItem>
                    </template>

                    <template
                        v-for="(item, index) in cart?.items"
                        :key="item.id"
                    >
                        <ProductCartItem
                            :item="item"
                            v-if="item.attributes.type === 'product'"
                            :index="index"
                        ></ProductCartItem>
                    </template>
                </ul>
                <p
                    class="my-6 p-4 flex items-center justify-between border-t border-gray-200 pt-6 text-sm font-medium text-slate-900 dark:text-white"
                >
                    <span class="text-xl">Total</span>
                    <span class="text-xl">
                        {{ $page.props.team.currency.code }} {{ cart.total }}
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCartsStore } from "@/stores/useCartsStore.js";
import ProductCartItem from "@/Components/Tickets/Wizard/Step3/ProductCartItem.vue";
import TicketCartItem from "@/Components/Tickets/Wizard/Step3/TicketCartItem.vue";

const cartsStore = useCartsStore();
const { item, cart } = storeToRefs(cartsStore);
</script>
