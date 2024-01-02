<script setup lang="ts">
import { useBrandsStore } from "@/stores/useBrandsStore";
import { storeToRefs } from "pinia";

const brandsStore = useBrandsStore();
const { blogs } = storeToRefs(brandsStore);
</script>

<template>
    <!-- Section 1 -->
    <section class="w-full">
        <div class="py-10 mx-auto max-w-7xl md:px-8">
            <div
                v-if="blogs.length > 0"
                class="flex flex-col items-center w-full overflow-hidden text-slate-900 dark:text-white md:rounded-xl md:flex-row"
            >
                <div
                    class="flex flex-col w-full p-10 mt-4 text-center md:w-1/2 md:mt-0"
                >
                    <p
                        class="mb-4 text-3xl font-medium leading-none line-clamp-1"
                    >
                        {{ blogs[0].name }}
                    </p>
                    <h2
                        class="max-w-md mx-auto mb-6 text-4xl font-semibold md:leading-tight md:text-5xl line-clamp-2"
                        v-html="blogs[0].description"
                    ></h2>
                    <a
                        v-if="blogs[0].url && blogs[0].action"
                        :href="blogs[0].url"
                        :class="`flex items-center w-auto mx-auto text-lg leading-tight text-center text-${$page.props.team.color}-600 hover:underline`"
                    >
                        <span>{{ blogs[0].action }}</span>
                        <svg
                            class="w-3 h-3 mt-0.5 ml-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 5l7 7-7 7"
                            ></path>
                        </svg>
                    </a>
                </div>
                <div class="w-full mt-7 md:w-1/2 md:mt-0">
                    <img :src="blogs[0].avatar_url" class="w-full" />
                </div>
            </div>

            <div
                v-if="blogs.length > 1"
                class="flex flex-col mt-10 md:flex-row md:mt-8 md:space-x-8"
            >
                <div
                    class="flex flex-col items-center justify-center flex-1 overflow-hidden text-center text-slate-900 dark:text-white md:rounded-xl"
                >
                    <div
                        class="flex flex-col px-10 pb-5 space-y-6 pt-14 md:px-8"
                    >
                        <h3
                            class="text-4xl font-semibold leading-none md:text-5xl line-clamp-1"
                        >
                            {{ blogs[1].name }}
                        </h3>
                        <p
                            class="text-xl font-light line-clamp-2"
                            v-html="blogs[1].description"
                        />
                        <a
                            v-if="blogs[1].url && blogs[1].action"
                            :href="blogs[1].url"
                            :class="`flex items-center w-auto mx-auto text-lg leading-tight text-center text-${$page.props.team.color}-600 hover:underline`"
                        >
                            <span>{{ blogs[1].action }}</span>
                            <svg
                                class="w-4 h-4 ml-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 5l7 7-7 7"
                                ></path>
                            </svg>
                        </a>
                    </div>
                    <img :src="blogs[1].avatar_url" class="w-2/3" />
                </div>
                <div
                    v-if="blogs.length > 2"
                    class="relative flex flex-col items-center justify-center flex-1 py-32 mt-10 overflow-hidden text-center text-slate-900 dark:text-white md:rounded-xl md:mt-0"
                >
                    <img :src="blogs[2].avatar_url" class="w-20 h-auto" />
                    <div class="flex flex-col px-10 space-y-6 md:px-8">
                        <h3
                            class="text-3xl font-semibold leading-none md:text-4xl line-clamp-1"
                        >
                            {{ blogs[2].name }}
                        </h3>
                        <p
                            class="text-xl font-light line-clamp-2"
                            v-html="blogs[2].description"
                        />
                        <a
                            v-if="blogs[2].url && blogs[2].action"
                            :href="blogs[2].url"
                            :class="`flex items-center w-auto mx-auto text-lg leading-tight text-center text-${$page.props.team.color}-600 hover:underline`"
                        >
                            <span>{{ blogs[2].action }}</span>
                            <svg
                                class="w-4 h-4 ml-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 5l7 7-7 7"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
