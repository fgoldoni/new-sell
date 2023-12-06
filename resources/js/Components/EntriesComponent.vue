<template>
    <div
        :class="`isolate overflow-hidden bg-${$page.props.team.color}-900 dark:bg-slate-900`"
    >
        <div
            class="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8"
        >
            <div class="mx-auto max-w-4xl">
                <h2 class="text-base font-semibold leading-7 text-indigo-400">
                    {{ $page.props.team.event.name }}
                </h2>
                <p
                    class="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl uppercase"
                >
                    1 Person Pass
                </p>
            </div>
            <div class="relative mt-6">
                <p class="mx-auto max-w-2xl text-lg leading-8 text-white/60">
                    {{ $page.props.team.event.address }}
                </p>
                <svg
                    viewBox="0 0 1208 1024"
                    class="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
                >
                    <ellipse
                        cx="604"
                        cy="512"
                        fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)"
                        rx="604"
                        ry="512"
                    />
                    <defs>
                        <radialGradient
                            id="6d1bd035-0dd1-437e-93fa-59d316231eb0"
                        >
                            <stop stop-color="#7775D6" />
                            <stop offset="1" stop-color="#E935C1" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </div>
        <div class="flow-root bg-slate-50 dark:bg-slate-800 pb-14 sm:pb-24">
            <div class="-mt-80">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                        class="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2"
                    >
                        <Entry
                            v-for="(item, index) in entries"
                            :key="item.id"
                            :index="index"
                            :item="item"
                            v-model="open"
                        ></Entry>

                        <div
                            class="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 dark:ring-gray-100/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center"
                        >
                            <div class="lg:min-w-0 lg:flex-1">
                                <h3
                                    class="text-lg font-semibold leading-8 tracking-tight text-slate-900 dark:text-white"
                                >
                                    Discounted
                                </h3>
                                <p
                                    class="mt-1 text-base leading-7 text-slate-500 dark:text-slate-400"
                                >
                                    Dolor dolores repudiandae doloribus. Rerum
                                    sunt aut eum. Odit omnis non voluptatem sunt
                                    eos nostrum.
                                </p>
                            </div>
                            <a
                                href="#"
                                :class="`rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-${$page.props.team.color}-600 dark:text-white ring-1 ring-inset ring-${$page.props.team.color}-200 dark:ring-white hover:ring-${$page.props.team.color}-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${$page.props.team.color}-600`"
                                >Buy discounted license
                                <span aria-hidden="true">&rarr;</span></a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Siderbar :show="open" @close="(value) => (open = value)"></Siderbar>
    </div>
</template>

<script setup lang="ts">
import Siderbar from "@/Components/Siderbar.vue";
import Entry from "@/Components/Entry.vue";
import { useTicketsStore } from "@/stores/useTicketsStore";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { useWizardStore } from "@/stores/useWizardStore";

const { entries } = storeToRefs(useTicketsStore());
const open = ref(false);

const wizard = useWizardStore();

onMounted(() => {
    wizard.setComponent("Step1");
});
</script>
