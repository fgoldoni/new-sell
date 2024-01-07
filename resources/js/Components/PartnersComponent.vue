<script setup lang="ts">
import { useBrandsStore } from "@/stores/useBrandsStore";
import { storeToRefs } from "pinia";
import PartnerComponent from "@/Components/PartnerComponent.vue";

const brandsStore = useBrandsStore();
const { sponsors } = storeToRefs(brandsStore);
</script>

<template>
    <!-- Section 1 -->
    <section class="w-full py-16 lg:py-24" v-if="sponsors.length">
        <div class="px-4 mx-auto text-center max-w-7xl">
            <div class="space-y-12">
                <div
                    class="mb-20 space-y-5 sm:mx-auto sm:max-w-xl md:max-w-2xl sm:space-y-4 lg:max-w-5xl"
                >
                    <h2
                        class="relative text-2xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-3xl uppercase"
                    >
                        {{ __("labels.partners") }}
                    </h2>
                </div>
                <div class="mx-auto grid grid-cols-2 gap-16">
                    <PartnerComponent
                        v-for="(item, index) in sponsors"
                        :key="item.id"
                        :index="index"
                        :item="item"
                    >
                    </PartnerComponent>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
