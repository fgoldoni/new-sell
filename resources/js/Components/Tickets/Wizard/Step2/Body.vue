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
                                {{ __("wizard.step_2.title") }}
                            </h2>
                        </div>
                    </div>
                    <div class="px-6">
                        <nav class="-mb-px flex space-x-6">
                            <a
                                v-for="collection in collections"
                                :key="collection.id"
                                @click="currentTab = collection"
                                href="javascript:;"
                                :class="[
                                    currentTab?.id === collection.id
                                        ? `border-${$page.props.team.color}-500 text-${$page.props.team.color}-600 dark:text-${$page.props.team.color}-300`
                                        : 'border-transparent text-slate-500 dark:text-slate-400 hover:border-slate-300 hover:text-slate-700',
                                    'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium',
                                ]"
                                >{{ collection.name }}</a
                            >
                        </nav>
                    </div>
                </div>
                <template
                    v-for="(collection, index) in collections"
                    :key="collection.id"
                >
                    <ul
                        v-if="currentTab?.id === collection.id"
                        role="list"
                        class="grid grid-cols-1 gap-6 sm:grid-cols-2 overflow-auto h-96"
                    >
                        <ProductCartItem
                            v-for="product in collection?.products"
                            :key="product.id"
                            :item="product"
                            :index="index"
                        ></ProductCartItem>
                    </ul>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCartsStore } from "@/stores/useCartsStore.js";
import { ref } from "vue";
import ProductCartItem from "@/Components/ProductCartItem.vue";

const cartsStore = useCartsStore();
const { item } = storeToRefs(cartsStore);

interface Props {
    collections: any;
}

const props = defineProps<Props>();

const currentTab = ref(props.collections[0]);
</script>
