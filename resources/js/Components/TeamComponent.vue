<template>
    <!-- Section 1 -->
    <section
        class="relative py-20 overflow-hidden bg-white dark:bg-slate-900"
        v-if="teams.length"
    >
        <span
            class="absolute top-0 right-0 flex flex-col items-end mt-0 -mr-16 opacity-60"
        >
            <span
                class="container hidden w-screen h-32 max-w-xs mt-20 transform rounded-full rounded-r-none md:block md:max-w-xs lg:max-w-lg 2xl:max-w-3xl bg-slate-200 dark:bg-slate-800"
            ></span>
        </span>

        <span class="absolute bottom-0 left-0"> </span>

        <div
            class="relative px-16 mx-auto max-w-7xl text-slate-500 dark:text-slate-400"
        >
            <p class="mb-10 font-medium tracking-wide uppercase">
                {{ __("labels.our_team") }}
            </p>
            <div
                class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-10 lg:grid-cols-3"
            >
                <div
                    v-for="team in teams"
                    :key="team.name"
                    class="flex flex-col items-center justify-center col-span-1"
                >
                    <div class="relative p-5">
                        <div
                            :class="`absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-${$page.props.team.color}-50`"
                        ></div>
                        <img
                            class="relative z-20 btn-base mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                            :src="team.avatar_url"
                            :alt="team.name"
                        />
                    </div>
                    <div class="mt-3 space-y-2 text-center">
                        <div class="space-y-1 text-lg font-medium leading-6">
                            <h3>{{ team.name }}</h3>
                            <p :class="`text-${$page.props.team.color}-600`">
                                {{ team.title }}
                            </p>
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
const { teams } = storeToRefs(brandsStore);
</script>
