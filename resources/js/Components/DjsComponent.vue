<template>
    <!-- Section 1 -->
    <section
        class="w-full py-16 bg-white dark:bg-slate-900 lg:py-24"
        v-if="djs.length"
    >
        <div class="px-12 mx-auto text-center max-w-7xl">
            <div class="space-y-12 md:text-left">
                <div
                    class="mb-20 space-y-5 sm:mx-auto sm:max-w-xl md:max-w-2xl sm:space-y-4 lg:max-w-5xl"
                >
                    <h2
                        class="relative text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-900 dark:text-white"
                    >
                        {{ __("DJs") }}
                    </h2>
                </div>
                <div
                    class="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl"
                >
                    <div
                        v-for="dj in djs"
                        :key="dj.name"
                        class="space-y-6 text-center lg:ml-0 md:ml-10"
                    >
                        <div
                            class="relative w-48 h-48 p-2 mx-auto md:w-56 md:h-56"
                        >
                            <img
                                class="relative z-20 w-full h-full rounded-xl"
                                :src="dj.avatar_url"
                                :alt="dj.name"
                            />
                            <svg
                                :class="`absolute inset-0 w-full h-full text-${$page.props.team.color}-500 transform scale-150 fill-current opacity-10`"
                                viewBox="0 0 200 200"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M34.2,-54.9C47,-51.8,62,-48.1,70.2,-38.9C78.4,-29.6,79.9,-14.8,80,0.1C80.2,14.9,78.9,29.9,70.8,39.3C62.6,48.7,47.6,52.6,34.7,57.1C21.7,61.6,10.9,66.7,-1.7,69.7C-14.3,72.7,-28.7,73.6,-42.4,69.6C-56.1,65.5,-69.2,56.5,-74.9,44.1C-80.6,31.7,-79,15.8,-77.6,0.8C-76.2,-14.2,-75,-28.4,-70.1,-42.3C-65.2,-56.2,-56.7,-69.8,-44.4,-73.2C-32.1,-76.6,-16.1,-69.9,-2.7,-65.2C10.7,-60.5,21.3,-58,34.2,-54.9Z"
                                    transform="translate(100 100)"
                                ></path>
                            </svg>
                        </div>
                        <div class="uppercase space-y-2">
                            <div
                                class="space-y-1 text-lg font-medium leading-6"
                            >
                                <h3>{{ dj.name }}</h3>
                                <p
                                    :class="`text-${$page.props.team.color}-500`"
                                >
                                    {{ dj.title }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useBrandsStore } from "@/stores/useBrandsStore";
import { storeToRefs } from "pinia";

const brandsStore = useBrandsStore();
const { djs } = storeToRefs(brandsStore);
</script>
