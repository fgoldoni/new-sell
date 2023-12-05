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
                        <div
                            v-for="item in entries"
                            :key="item.id"
                            :ref="setItemRef"
                            :class="[
                                item.quantity > 0
                                    ? `ring-${$page.props.team.color}-500`
                                    : 'ring-rose-500',
                                `flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring sm:p-10`,
                            ]"
                        >
                            <div>
                                <h3
                                    id="tier-hobby"
                                    :class="[
                                        item.quantity > 0
                                            ? `text-${$page.props.team.color}-600`
                                            : 'text-rose-600',
                                        `text-base font-semibold leading-7 uppercase`,
                                    ]"
                                >
                                    {{ item.name }}
                                </h3>
                                <div class="mt-4 flex items-baseline gap-x-2">
                                    <span
                                        class="text-5xl font-bold tracking-tight text-gray-900"
                                    >
                                        {{ $page.props.team.currency.code }}
                                        {{ item.price }}
                                    </span>
                                </div>
                                <p
                                    class="mt-6 text-base leading-7 text-gray-600"
                                    v-html="item.description"
                                />
                                <ul
                                    role="list"
                                    class="mt-10 space-y-4 text-sm leading-6 text-gray-600"
                                >
                                    <li
                                        v-for="tag in item.tags"
                                        :key="tag"
                                        class="flex gap-x-3"
                                    >
                                        <svg
                                            :class="`h-6 w-5 flex-none text-${$page.props.team.color}-600`"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                        {{ tag }}
                                    </li>
                                </ul>
                            </div>
                            <a
                                href="javascript:;"
                                @click="openModal(item.id)"
                                aria-describedby="tier-hobby"
                                :class="[
                                    item.quantity > 0
                                        ? `btn-base  bg-${$page.props.team.color}-600 hover:bg-${$page.props.team.color}-500`
                                        : 'bg-rose-600 hover:bg-rose-500',
                                    `mt-8 block uppercase rounded-md px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${$page.props.team.color}-600`,
                                ]"
                            >
                                <span v-if="item.quantity > 0">
                                    {{ __("Noch frei, jetzt reservieren") }}
                                </span>
                                <span v-else>
                                    {{ __("Leider schon reserviert") }}
                                </span>
                            </a>
                        </div>

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
        <Modal :show="false" @close="(value) => (open = value)">
            <div
                class="overflow-hidden h-full flex flex-col divide-y divide-gray-100 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900"
            >
                <div class="px-4 py-5 sm:px-6">
                    <div class="flex items-center justify-between">
                        <h3
                            class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
                        >
                            Modal
                        </h3>
                        <button
                            type="button"
                            @click="open = false"
                            class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center -my-1"
                        >
                            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div class="mt-1">
                        <p class="text-sm text-indigo-300">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit aliquam ad hic recusandae soluta.
                        </p>
                    </div>
                </div>
                <div class="grow px-4 py-5 sm:p-6">
                    <div class="relative mt-6 flex-1 px-4 sm:px-6">
                        <Item></Item>
                    </div>
                </div>
                <div class="flex flex-shrink-0 justify-end px-4 py-4">
                    <button
                        type="button"
                        class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
                        @click="open = false"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        class="ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        Save
                    </button>
                </div>
            </div>
        </Modal>
    </div>
</template>

<script setup lang="ts">
import { useMotion } from "@vueuse/motion";
import { onMounted, ref } from "vue";
import { useTicketsStore } from "@/stores/useTicketsStore";
import { storeToRefs } from "pinia";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import Modal from "@/Components/BaseModal.vue";
import Item from "@/Components/Tickets/Item.vue";
import Siderbar from "@/Components/Siderbar.vue";

const itemRefs = ref<Array<HTMLElement>>([]);

const setItemRef = (el) => itemRefs.value.push(el);
const open = ref(false);

const ticketsStore = useTicketsStore();
const { entries } = storeToRefs(ticketsStore);

const openModal = async (value: string) => {
    await ticketsStore.find(value);
    open.value = true;
};

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
                    delay: 500 * index,
                    duration: 1000,
                },
            },
        });
    });
});
</script>
