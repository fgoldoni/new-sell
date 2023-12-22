<template>
    <div
        class="grid grid-flow-col gap-5 text-center auto-cols-max lowercase"
        v-if="countDownDate - countDownNow > 0"
    >
        <div
            class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"
        >
            <span class="countdown font-mono text-4xl sm:text-5xl">
                <span :style="`--value:${days};`"></span>
            </span>
            {{ __("Days") }}
        </div>
        <div
            class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"
        >
            <span class="countdown font-mono text-4xl sm:text-5xl">
                <span :style="`--value:${hours};`"></span>
            </span>
            {{ __("Hours") }}
        </div>
        <div
            class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"
        >
            <span class="countdown font-mono text-4xl sm:text-5xl">
                <span :style="`--value:${minutes};`"></span>
            </span>
            {{ __("Min") }}
        </div>
        <div
            class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"
        >
            <span class="countdown font-mono text-4xl sm:text-5xl">
                <span :style="`--value:${seconds};`"></span>
            </span>
            {{ __("Sec") }}
        </div>
    </div>
</template>

<script setup lang="ts">
import parseISO from "date-fns/parseISO";

import { onMounted, ref } from "vue";
import { usePage } from "@inertiajs/vue3";

const days = ref(null);
const hours = ref(null);
const minutes = ref(null);
const seconds = ref(null);

let countDownDate = ref(parseISO(usePage().props.team.event?.start).getTime());

let countDownNow = ref(new Date().getTime());

const count = () => {
    let date = parseISO(usePage().props.team.event?.start).getTime();

    let x = setInterval(function () {
        let now = new Date().getTime();

        let distance = date - now;

        days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours.value = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds.value = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
            clearInterval(x);
        }
    }, 1000);
};

onMounted(() => {
    if (countDownDate.value - countDownNow.value < 0) return;

    count();
});
</script>

<style scoped></style>
