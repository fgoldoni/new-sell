<template>
    <Popover
        class="flex flex-col-reverse text-sm font-medium text-gray-900"
        v-slot="{ open }"
    >
        <div
            class="relative z-10 border-t border-gray-200 bg-white px-4 sm:px-6"
        >
            <div class="w-full">
                <PopoverButton
                    class="flex w-full items-center py-6 font-medium"
                >
                    <div class="flex justify-start mr-auto">
                        <div class="mr-4 flex-shrink-0 self-end">
                            <svg
                                class="h-14 w-14 bg-white text-gray-300"
                                version="1.1"
                                viewBox="0 0 100 100"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g fill="text-gray-300">
                                    <path
                                        d="m75 89.062v-28.211c11.332-0.89453 20.312-11.359 20.312-24.133 0-2.793-0.51953-15.527-1.6172-18.508-0.22656-0.61719-0.8125-1.0234-1.4688-1.0234h-7.1523l0.66406-3.4922 8.5039-2.8359-0.98828-2.9688-9.375 3.125 0.003906-0.003906c-0.53906 0.17969-0.93359 0.63281-1.043 1.1875l-0.94922 4.9883h-27.242c-0.65625 0-1.2422 0.40625-1.4688 1.0234-1.0977 2.9805-1.6172 15.715-1.6172 18.508 0 12.77 8.9805 23.238 20.312 24.133v28.211h-10.938l-3.125 6.25h31.25l-3.125-6.25zm9.375-37.5h-3.125v-3.125h3.125zm4.6875-9.375h-3.125v-3.125h3.125zm-4.5859-21.875h6.5391c0.63281 4.6641 1.0078 9.3594 1.125 14.062h-10.344zm-28.617 0h25.438l-2.6797 14.062h-23.883c0.11719-4.7031 0.49219-9.3984 1.125-14.062zm6.6406 21.875h-3.125v-3.125h3.125zm7.8125 9.375h-3.125v-3.125h3.125zm0-10.938h3.125v3.125h-3.125z"
                                    ></path>
                                    <path
                                        d="m19.07 74.637c-0.42969 0.75-0.17578 1.7031 0.57422 2.1367l8.125 4.6875c0.74609 0.42969 1.6992 0.17187 2.1328-0.57422l4.2969-7.4492h-14.434zm5.9297 0.36328h3.125v3.125h-3.125z"
                                    ></path>
                                    <path
                                        d="m37.289 74.332-4.6875 8.125c-0.61719 1.0781-1.6406 1.8672-2.8438 2.1875-0.39844 0.10547-0.80859 0.15625-1.2227 0.15625-0.82031 0-1.6289-0.21484-2.3438-0.625l-8.125-4.6875c-2.0938-1.2305-2.9062-3.8555-1.8633-6.0508h-8.2344l1.2773 14.062h31.516l1.2773-14.062h-4.3516c-0.10156 0.3125-0.23438 0.60938-0.39844 0.89453zm-23.227 8.4805h-3.125v-3.125h3.125zm25 3.125h-3.125v-3.125h3.125z"
                                    ></path>
                                    <path
                                        d="m25.113 65.734c-0.13672 0.003906-0.27344 0.019531-0.40625 0.054687-0.39844 0.10938-0.74219 0.37109-0.94922 0.73047l-2.1953 3.793h11.887l-7.5625-4.3672c-0.23438-0.13672-0.5-0.20703-0.77344-0.21094z"
                                    ></path>
                                    <path
                                        d="m7.6758 70.312h10.281l3.0938-5.3555h0.003907c0.62109-1.0781 1.6445-1.8672 2.8438-2.1875 1.2031-0.32422 2.4844-0.15625 3.5625 0.46875l8.125 4.6875c0.92187 0.53906 1.6289 1.3828 2 2.3867h4.7383l1.2773-14.062h-37.195z"
                                    ></path>
                                    <path
                                        d="m53.125 68.75c-2.8242 0-5.5625 0.96094-7.7695 2.7227l-1.6055 17.664v0.35547c2.8008 3.1953 7.0352 4.7461 11.238 4.1211s7.8008-3.3438 9.5508-7.2148c1.75-3.8711 1.4141-8.3672-0.89453-11.938-2.3086-3.5664-6.2695-5.7188-10.52-5.7109zm4.6875 11.586c-1.8945-0.003907-3.6055-1.1445-4.3281-2.8945-0.72656-1.7539-0.32422-3.7695 1.0156-5.1094l2.2109 2.2109h-0.003907c-0.60938 0.60938-0.60938 1.5977 0 2.207 0.61719 0.59375 1.5938 0.59375 2.2109 0l2.2109 2.2109c-0.875 0.88281-2.0703 1.375-3.3164 1.375z"
                                    ></path>
                                    <path
                                        d="m9.375 90.625h31.25v3.125h-31.25z"
                                    ></path>
                                </g>
                            </svg>
                        </div>
                        <div class="flex flex-col self-end items-center">
                            <h4
                                class="flex items-center justify-between w-auto text-lg font-bold text-left space-x-2"
                            >
                                <span class="">4 Pakete</span>
                                <ChevronUpIcon
                                    class="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </h4>
                            <p class="mt-1">460,00 € (inkl. MwSt.)</p>
                        </div>
                    </div>
                    <button
                        type="submit"
                        class="ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        Save
                    </button>
                </PopoverButton>
            </div>
        </div>

        <TransitionRoot as="template" :show="open">
            <div>
                <TransitionChild
                    as="template"
                    enter="transition-opacity ease-linear duration-300"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <PopoverOverlay
                        class="fixed inset-0 bg-black bg-opacity-25"
                    />
                </TransitionChild>

                <TransitionChild
                    as="template"
                    enter="transition ease-in-out duration-300 transform"
                    enter-from="translate-y-full"
                    enter-to="translate-y-0"
                    leave="transition ease-in-out duration-300 transform"
                    leave-from="translate-y-0"
                    leave-to="translate-y-full"
                >
                    <PopoverPanel class="relative bg-white px-4 py-6 sm:px-6">
                        <dl class="mx-auto max-w-lg space-y-6">
                            <div class="flex items-center justify-between">
                                <dt class="text-gray-600">Subtotal</dt>
                                <dd>$320.00</dd>
                            </div>

                            <div class="flex items-center justify-between">
                                <dt class="text-gray-600">Shipping</dt>
                                <dd>$15.00</dd>
                            </div>

                            <div class="flex items-center justify-between">
                                <dt class="text-gray-600">Taxes</dt>
                                <dd>$26.80</dd>
                            </div>
                        </dl>
                    </PopoverPanel>
                </TransitionChild>
            </div>
        </TransitionRoot>
    </Popover>
</template>

<script setup>
import {
    Popover,
    PopoverButton,
    PopoverOverlay,
    PopoverPanel,
    TransitionChild,
    TransitionRoot,
} from "@headlessui/vue";

import { ChevronUpIcon } from "@heroicons/vue/20/solid";

const products = [
    {
        id: 1,
        name: "Micro Backpack",
        href: "#",
        price: "$70.00",
        color: "Moss",
        size: "5L",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/checkout-page-04-product-01.jpg",
        imageAlt:
            "Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.",
    },
    // More products...
];
</script>
