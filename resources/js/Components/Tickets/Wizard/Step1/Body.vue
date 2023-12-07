<script setup lang="ts">
import Entries from "@/Components/Tickets/Wizard/Step1/Entries.vue";
import Quantity from "@/Components/Quantity.vue";
import { useCartsStore } from "@/stores/useCartsStore";
import { computed } from "vue";
import { storeToRefs } from "pinia";

const cartsStore = useCartsStore();
const { update, updateEntry, updateMessage } = cartsStore;
const { item, message } = storeToRefs(cartsStore);

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
                    class="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl text-center"
                >
                    Okay, los gehts...
                </h3>
                <form class="max-w-xs mx-auto">
                    <label
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
                    :entries="item?.entries"
                    :value="message"
                    @input="(e) => updateMessage(e.target.value)"
                    id="description"
                    name="description"
                    placeholder="Hinweise für uns..."
                    rows="4"
                    :class="`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-${$page.props.team.color}-500 focus:border-${$page.props.team.color}-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-${$page.props.team.color}-500 dark:focus:border-${$page.props.team.color}-500`"
                />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
