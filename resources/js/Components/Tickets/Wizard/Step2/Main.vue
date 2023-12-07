<template>
    <div
        class="flex h-full flex-col divide-y divide-gray-200 bg-white dark:bg-slate-900 shadow-xl"
    >
        <div class="flex min-h-0 flex-1 flex-col overflow-y-scroll">
            <Header
                @close="close"
                @previous="previous"
                :has-previous="true"
            ></Header>
            <div class="container mx-auto sm:px-6 lg:px-8">
                <div class="h-96">sdfs</div>
            </div>
        </div>

        <Footer @submit-action="close"></Footer>
    </div>
</template>
<script setup lang="ts">
import Header from "@/Components/Tickets/Wizard/Header.vue";
import Footer from "@/Components/Tickets/Wizard/Footer.vue";

const emit = defineEmits<{
    close: [value: boolean];
}>();

const close = () => {
    emit("close", false);
};

const previous = (e: any) => {
    emit("close", false);
};
</script>
