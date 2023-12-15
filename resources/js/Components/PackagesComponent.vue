<template>
    <!-- Section 1 -->
    <section
        class="box-border leading-7 border-0 border-slate-200 border-solid sm:py-2 md:py-16 lg:py-14"
    >
        <div
            class="box-border max-w-6xl px-4 pb-12 mx-auto border-solid sm:px-6 md:px-6 lg:px-4"
        >
            <div
                class="flex flex-col items-center leading-7 text-center text-slate-900"
            >
                <h2
                    v-motion-fade
                    class="box-border m-0 text-2xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white border-solid sm:text-3xl uppercase"
                >
                    Packages & Lounges
                </h2>
            </div>
            <div
                class="grid max-w-md mx-auto gap-8 mt-8 overflow-hidden leading-7 text-slate-900 md:max-w-lg lg:max-w-none sm:mt-16 lg:grid-cols-2"
            >
                <div
                    v-for="item in packages"
                    :key="item.id"
                    :ref="setItemRef"
                    :class="[
                        item.quantity
                            ? 'border-' + $page.props.team.color + '-500'
                            : 'border-rose-500',
                        'relative flex flex-col items-start justify-end h-full overflow-hidden rounded-xl group border-2 shadow-2xl',
                    ]"
                >
                    <div
                        :class="`btn-base cursor-pointer absolute top-0 left-0 z-10 flex px-3 py-2 ml-8 mt-6 text-md sm:text-2xl font-extrabold tracking-wide uppercase bg-white  hover:bg-${$page.props.team.color}-100 rounded text-slate-900`"
                    >
                        {{ $page.props.team.currency.code }} {{ item.price }}
                    </div>
                    <a
                        href="#_"
                        class="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110"
                        :style="`background-image: url(${item.avatar_url})`"
                    >
                    </a>
                    <div
                        :class="`relative z-20 w-full h-auto py-8 text-white bg-slate-900 opacity-90 dark:text-white border-t-0 border-yellow-200 px-7`"
                    >
                        <a
                            href="#_"
                            :class="[
                                item.quantity
                                    ? 'btn-base bg-' +
                                      $page.props.team.color +
                                      '-900'
                                    : 'bg-rose-900',
                                'inline-block text-md font-extrabold shadow-xl absolute top-0 -mt-5 rounded px-4 py-2 uppercase text-white',
                            ]"
                        >
                            <span v-if="item.quantity">
                                {{ item.name }}
                            </span>
                            <span v-else> Leider schon reserviert</span>
                        </a>
                        <div class="flex items-center justify-between">
                            <div class="text-xl">
                                <dl>
                                    <dt class="font-extrabold text-center">
                                        {{ item.attendees }}
                                    </dt>
                                    <dd>Personen</dd>
                                </dl>
                            </div>
                            <div class="text-xl">
                                <dl>
                                    <dt class="font-extrabold text-center">
                                        {{ $page.props.team.currency.code }}
                                        1000
                                    </dt>
                                    <dd>Mindestverzehr</dd>
                                </dl>
                            </div>
                            <div class="text-xl">
                                <dl>
                                    <dt class="font-extrabold text-center">
                                        {{ $page.props.team.currency.code }} 100
                                    </dt>
                                    <dd>pro Person</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div
                        :class="`relative z-20 w-full h-auto py-8 text-white bg-slate-50  dark:bg-slate-900 border-t-0 border-yellow-200 px-7`"
                    >
                        <div class="grid grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                            <div
                                v-for="product in item.products"
                                :key="product.id"
                            >
                                <div class="avatar indicator cursor-pointer">
                                    <span
                                        class="indicator-item badge badge-default"
                                    >
                                        {{ product.quantity }}
                                    </span>
                                    <div class="w-16 rounded-full btn-title">
                                        <img :src="product.avatar" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
const { packages } = storeToRefs(ticketsStore);

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
                    delay: 300 * index,
                    duration: 700,
                },
            },
        });
    });
});
</script>
