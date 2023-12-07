<script setup lang="ts">
import Entries from "@/Components/Tickets/Wizard/Step1/Entries.vue";
import Quantity from "@/Components/Quantity.vue";
import { useCartsStore } from "@/stores/useCartsStore";
import { computed } from "vue";
import { storeToRefs } from "pinia";

const cartsStore = useCartsStore();
const { update, updateEntry } = cartsStore;
const { item } = storeToRefs(cartsStore);

const quantity = computed(
    () => cartsStore.findItem("ticket", item.value?.id).quantity,
);

const entry = computed(
    () => cartsStore.findItem("ticket", item.value?.id).attributes.entry,
);
</script>

<template>
    <div
        class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8 w-full p-4 sm:p-0"
    >
        <div class="col-span-3">
            <div class="flex flex-col items-center justify-center space-y-2">
                <h3
                    class="text-xl font-bold text-gray-900 sm:text-2xl text-center"
                >
                    Okay, los gehts...
                </h3>
                <form class="max-w-xs mx-auto">
                    <label
                        for="counter-input"
                        class="block mb-1 text-xl font-medium text-gray-500 dark:text-white"
                        >Wie viele Personen seid ihr?</label
                    >
                    <Quantity
                        v-if="quantity"
                        :model-value="quantity"
                        @update:model-value="update"
                    ></Quantity>
                </form>
            </div>
        </div>
        <div class="col-span-3">
            <Entries
                v-if="item?.entries"
                :entries="item?.entries"
                :model-value="entry"
                @update:model-value="updateEntry"
            ></Entries>
        </div>
        <div class="col-span-3">
            <label
                for="description"
                class="block text-xl font-medium leading-6 text-center text-gray-500"
                >Hinweise</label
            >
            <div class="mt-2">
                <textarea
                    id="description"
                    name="description"
                    placeholder="Hinweise für uns..."
                    rows="4"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
