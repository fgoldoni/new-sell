<template>
    <section
        class="box-border py-8 leading-7 bg-slate-100 dark:bg-slate-900 border-0 border-slate-200 border-solid sm:py-12 md:py-16 lg:py-24"
    >
        <div
            class="box-border max-w-6xl px-4 pb-12 mx-auto border-solid sm:px-6 md:px-6 lg:px-4"
        >
            <div
                class="flex flex-col items-center leading-7 text-center text-slate-900"
            >
                <h2
                    v-motion-fade
                    class="box-border m-0 text-2xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white border-solid sm:text-3xl md:text-4xl"
                >
                    {{ $page.props.team.name }} - Pass
                </h2>
            </div>
            <div
                class="grid gap-4 max-w-md mx-auto mt-6 overflow-hidden leading-7 text-slate-900 md:max-w-lg lg:max-w-none sm:mt-10 lg:grid-cols-2"
            >
                <div
                    v-for="entry in entries"
                    :key="entry.id"
                    :ref="setItemRef"
                    class="box-border px-4 py-8 mb-6 text-center rounded-xl border-2 border-green-300 dark:border-green-500 lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10"
                >
                    <h3
                        class="m-0 text-2xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white border-0 border-solid sm:text-3xl md:text-4xl"
                    >
                        {{ entry.name }}
                    </h3>
                    <p
                        class="mt-3 leading-7 text-slate-500 dark:text-slate-400 border-0 border-solid"
                        v-html="entry.description"
                    ></p>
                    <div
                        class="flex items-center justify-center mt-6 leading-7 text-slate-900 dark:text-white border-0 border-solid sm:mt-8"
                    >
                        <p
                            class="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-slate-200"
                        >
                            {{ $page.props.team.currency.code }}
                            {{ entry.price }}
                        </p>
                    </div>

                    <button
                        :class="`btn-base uppercase inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-white no-underline bg-${$page.props.team.color}-600 border-b-4 border-${$page.props.team.color}-700 rounded cursor-pointer hover:text-white sm:text-base sm:mt-8 md:text-lg`"
                    >
                        {{ entry.name }}
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useMotion } from "@vueuse/motion";
import { onMounted, ref } from "vue";
import { useTicketsStore } from "@/stores/useTicketsStore";
import { storeToRefs } from "pinia";

const itemRefs = ref<Array<HTMLElement>>([]);
const setItemRef = (el) => itemRefs.value.push(el);

const ticketsStore = useTicketsStore();
const { entries } = storeToRefs(ticketsStore);

onMounted(() => {
    itemRefs.value.forEach((el, index) => {
        useMotion(el, {
            initial: {
                opacity: 0,
                y: 100,
            },
            visibleOnce: {
                opacity: 1,
                y: 0,
                transition: {
                    delay: 500 * index,
                    duration: 1000,
                },
            },
        });
    });
});
</script>
