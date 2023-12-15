<template>
    <div
        class="relative flex h-full flex-col divide-y divide-gray-200 bg-white dark:bg-slate-900 shadow-xl"
    >
        <div class="flex min-h-0 flex-1 flex-col overflow-y-scroll">
            <Header
                @close="emit('close', false)"
                :has-previous="false"
                :title="order.user.name"
            ></Header>
            <Body ref="itemRef"></Body>
            <div
                :class="`absolute bottom-0 bg-${$page.props.team.color}-900 shadow-2xl flex w-full items-center justify-between px-4 py-8`"
            >
                <div class="text-xl text-white font-extrabold">
                    Total
                    <span class="text-slate-200 uppercase"
                        >({{ order.mode }})</span
                    >
                </div>
                <div class="flex flex-col pr-0 sm:pr-2">
                    <div class="text-slate-200 font-extrabold">
                        {{ order.currency }} {{ order.total }}
                    </div>
                    <div class="text-slate-200" v-if="order.entry">
                        {{ __("Entry:") }} {{ order.entry }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import Header from "@/Components/Tickets/Wizard/Header.vue";
import Body from "@/Components/Tickets/Wizard/Step6/Body.vue";
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";
import { useOrdersStore } from "@/stores/useOrdersStore";
import { storeToRefs } from "pinia";

const itemRef = ref<HTMLElement>();
const ordersStore = useOrdersStore();
const { order } = storeToRefs(ordersStore);

const emit = defineEmits<{
    close: [value: boolean];
}>();

useMotion(itemRef, {
    initial: {
        opacity: 0,
        y: 100,
    },
    enter: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 500,
            duration: 2000,
        },
    },
});
</script>
