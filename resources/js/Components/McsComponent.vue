<template>
    <div class="py-24 sm:py-32" v-if="mcs.length">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h2
                    class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
                >
                    {{ __("Mc") }}
                </h2>
            </div>
            <ul
                role="list"
                class="cursor-pointer mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
                <li v-for="mc in mcs" :key="mc.name">
                    <img
                        class="btn-base aspect-[14/13] w-full rounded-2xl object-cover"
                        :src="mc.avatar_url"
                        :alt="mc.name"
                    />
                    <h3
                        class="mt-6 text-lg font-semibold leading-8 tracking-tight text-slate-900 dark:text-white"
                    >
                        {{ mc.name }}
                    </h3>
                    <p
                        class="text-base leading-7 text-slate-500 dark:text-slate-400"
                    >
                        {{ mc.title }}
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useBrandsStore } from "@/stores/useBrandsStore";
import { storeToRefs } from "pinia";

const brandsStore = useBrandsStore();
const { mcs } = storeToRefs(brandsStore);
</script>
