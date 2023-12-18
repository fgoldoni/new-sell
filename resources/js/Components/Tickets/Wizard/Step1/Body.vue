<script setup lang="ts">
import Entries from "@/Components/Tickets/Wizard/Step1/Entries.vue";
import Quantity from "@/Components/Quantity.vue";
import { useCartsStore } from "@/stores/useCartsStore";
import { storeToRefs } from "pinia";

const cartsStore = useCartsStore();
const { updatePayload, updateQuantity } = cartsStore;
const { item, payload } = storeToRefs(cartsStore);
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
                    {{ __("wizard.step_1.title") }}
                </h3>
                <form class="max-w-xs mx-auto">
                    <label
                        class="block mb-1 text-xl font-medium text-gray-500 dark:text-white"
                        >{{ __("wizard.step_1.description") }}</label
                    >
                    <Quantity
                        :model-value="payload?.quantity"
                        @update:model-value="updateQuantity"
                    ></Quantity>
                </form>
            </div>
        </div>
        <div class="col-span-3" v-if="item?.entries">
            <Entries
                :entries="item?.entries"
                :model-value="payload?.entry"
                @update:model-value="updatePayload"
            ></Entries>
        </div>
        <div class="col-span-3">
            <label
                for="description"
                class="block text-xl font-medium leading-6 text-center text-gray-500"
                >{{ __("wizard.step_1.message") }}</label
            >
            <div class="mt-2 mb-8">
                <textarea
                    :entries="item?.entries"
                    :value="payload?.message"
                    @input="(e) => updatePayload('message', e.target.value)"
                    id="description"
                    name="description"
                    :placeholder="__('wizard.step_1.message_us')"
                    rows="4"
                    :class="`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-${$page.props.team.color}-500 focus:border-${$page.props.team.color}-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-${$page.props.team.color}-500 dark:focus:border-${$page.props.team.color}-500`"
                />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
