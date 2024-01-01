<script setup lang="ts">
import { useBrandsStore } from "@/stores/useBrandsStore";
import { storeToRefs } from "pinia";

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
                    <div
                        v-for="sponsor in sponsors"
                        :key="sponsor.id"
                        class="space-y-6 text-center lg:mr-0 md:mr-10"
                    >
                        <div
                            class="relative w-32 h-32 p-2 mx-auto md:w-56 md:h-56"
                        >
                            <img
                                class="btn-base cursor-pointer relative z-20 w-full h-full rounded-xl"
                                :src="sponsor.avatar_url"
                                :alt="sponsor.name"
                            />
                            <svg
                                class="absolute inset-0 w-full h-full mt-2 text-green-500 transform scale-150 fill-current opacity-10"
                                viewBox="0 0 200 200"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M42.7,-73.4C55,-67,64.3,-54.7,69.9,-41.5C75.5,-28.3,77.5,-14.2,76.5,-0.6C75.4,12.9,71.3,25.8,64.6,37.3C57.9,48.7,48.8,58.6,37.6,63.1C26.4,67.5,13.2,66.5,0.8,65.2C-11.6,63.8,-23.2,62.1,-34.9,57.9C-46.6,53.7,-58.4,47.1,-67.1,37.1C-75.9,27,-81.6,13.5,-83.1,-0.9C-84.6,-15.2,-81.9,-30.5,-73.2,-40.7C-64.6,-51,-50.1,-56.4,-36.9,-62.3C-23.8,-68.2,-11.9,-74.6,1.7,-77.5C15.2,-80.4,30.5,-79.8,42.7,-73.4Z"
                                    transform="translate(100 100)"
                                ></path>
                            </svg>
                        </div>
                        <div class="space-y-2">
                            <div
                                class="space-y-1 text-xs sm:text-sm font-medium leading-6"
                            >
                                <h3 class="text-slate-500 dark:text-slate-400">
                                    {{ sponsor.name }}
                                </h3>
                                <p
                                    :class="`text-${$page.props.team.color}-500`"
                                >
                                    {{ sponsor.title }}
                                </p>
                            </div>
                            <div
                                class="relative flex items-center justify-center space-x-3"
                            >
                                <a
                                    v-if="sponsor.site"
                                    :href="sponsor.site"
                                    target="_blank"
                                    class="text-gray-300 hover:text-gray-400"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                                        />
                                    </svg>
                                </a>
                                <a
                                    v-if="sponsor.twitter"
                                    :href="sponsor.twitter"
                                    target="_blank"
                                    class="text-gray-300 hover:text-gray-400"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="w-6 h-6 fill-current"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
