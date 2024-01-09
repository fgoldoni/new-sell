<script setup lang="ts">
import { useBrandsStore } from "@/stores/useBrandsStore";
import { storeToRefs } from "pinia";
import PartnerComponent from "@/Components/PartnerComponent.vue";

const brandsStore = useBrandsStore();
const { sponsors } = storeToRefs(brandsStore);
</script>

<template>
    <div class="py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h2
                    class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
                >
                    {{ __("labels.partners") }}
                </h2>
                <p
                    class="mt-6 text-lg leading-8 text-slate-500 dark:text-slate-400"
                >
                    {{ __("Associate your image with this event") }}
                </p>
            </div>
            <ul
                role="list"
                class="cursor-pointer mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
            >
                <template
                    v-for="(sponsor, index) in sponsors"
                    :key="sponsor.name"
                >
                    <PartnerComponent :item="sponsor" :index="index" />
                </template>
            </ul>
        </div>
    </div>
</template>
