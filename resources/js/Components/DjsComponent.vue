<template>
    <div class="py-24 sm:py-32" v-if="djs.length">
        <div class="mx-auto max-w-7xl px-6 text-center lg:px-8">
            <div class="mx-auto max-w-2xl">
                <h2
                    class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
                >
                    {{ __("Dj") }}
                </h2>
            </div>
            <ul
                role="list"
                class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
            >
                <li
                    v-for="dj in djs"
                    :key="dj.name"
                    class="cursor-pointer rounded-2xl bg-slate-800 dark:bg-slate-900 px-8 py-10"
                >
                    <img
                        class="btn-base mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                        :src="dj.avatar_url"
                        :alt="dj.name"
                    />
                    <h3
                        class="mt-6 text-base font-semibold leading-7 tracking-tight text-white"
                    >
                        {{ dj.name }}
                    </h3>
                    <p class="text-sm leading-6 text-gray-400">
                        {{ dj.title }}
                    </p>
                    <ul role="list" class="mt-6 flex justify-center gap-x-6">
                        <li v-if="dj.twitter">
                            <a
                                :href="dj.twitter"
                                target="_blank"
                                class="text-gray-400 hover:text-gray-300"
                            >
                                <span class="sr-only">Twitter</span>
                                <svg
                                    class="h-5 w-5"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                                    />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useBrandsStore } from "@/stores/useBrandsStore";
import { storeToRefs } from "pinia";

const brandsStore = useBrandsStore();
const { djs } = storeToRefs(brandsStore);
</script>
