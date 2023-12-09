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
                                Was wollt ihr trinken?
                            </h2>
                        </div>
                    </div>
                    <div class="px-6">
                        <nav class="-mb-px flex space-x-6">
                            <a
                                v-for="collection in item.collections"
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
                    v-for="collection in item?.collections"
                    :key="collection.id"
                >
                    <ul
                        v-if="currentTab?.id === collection.id"
                        v-motion
                        :initial="{ opacity: 0, scale: 0.8 }"
                        :enter="{
                            scale: 1,
                            opacity: 1,
                            transition: {
                                delay: 200,
                                duration: 1000,
                            },
                        }"
                        :delay="200"
                        role="list"
                        class="overflow-auto h-72 relative divide-y divide-gray-200 h-72 overflow-y-auto"
                    >
                        <li
                            v-for="product in collection?.products"
                            :key="product.id"
                        >
                            <div
                                class="group relative flex items-center px-5 py-6"
                            >
                                <a
                                    href="javascript:;"
                                    class="-m-1 block flex-1 p-1"
                                >
                                    <div
                                        class="absolute inset-0 group-hover:bg-slate-50 dark:group-hover:bg-slate-900"
                                        aria-hidden="true"
                                    />
                                    <div
                                        class="relative flex min-w-0 flex-1 items-center"
                                    >
                                        <span
                                            class="relative inline-block flex-shrink-0"
                                        >
                                            <img
                                                class="h-10 w-10 rounded-full"
                                                :src="product.avatar"
                                                alt=""
                                            />
                                            <span
                                                :class="[
                                                    true
                                                        ? 'bg-green-400'
                                                        : 'bg-gray-300',
                                                    'absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white',
                                                ]"
                                                aria-hidden="true"
                                            />
                                        </span>
                                        <div class="ml-4 truncate">
                                            <p
                                                class="truncate text-sm font-medium text-slate-900 dark:text-white"
                                            >
                                                {{
                                                    $page.props.team.currency
                                                        .symbol
                                                }}
                                                {{ product.price }}
                                            </p>
                                            <p
                                                class="truncate text-sm text-slate-500 dark:text-slate-400"
                                            >
                                                {{ product.name }}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                                <div
                                    as="div"
                                    class="relative ml-2 inline-block flex-shrink-0 text-left"
                                >
                                    <div
                                        class="group relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        <span class="absolute -inset-1.5" />
                                        <span class="sr-only"
                                            >Open options menu</span
                                        >
                                        <span
                                            class="flex h-full w-full items-center justify-center rounded-full"
                                        >
                                            <EllipsisVerticalIcon
                                                class="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { EllipsisVerticalIcon } from "@heroicons/vue/20/solid";
import { storeToRefs } from "pinia";
import { useCartsStore } from "@/stores/useCartsStore.js";
import { ref } from "vue";

const cartsStore = useCartsStore();
const { item } = storeToRefs(cartsStore);

const currentTab = ref(item.value?.collections[0]);
</script>
