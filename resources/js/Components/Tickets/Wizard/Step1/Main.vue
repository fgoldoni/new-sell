<template>
    <Dialog as="div" class="relative z-40" @close="close">
        <TransitionChild
            as="template"
            enter="ease-in-out duration-500"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in-out duration-500"
            leave-from="opacity-100"
            leave-to="opacity-0"
        >
            <div
                class="fixed inset-0 bg-slate-900 bg-opacity-80 transition-opacity"
            />
        </TransitionChild>

        <div class="fixed inset-0 overflow-hidden">
            <div class="absolute inset-0 overflow-hidden">
                <div
                    class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full sm:pl-10"
                >
                    <TransitionChild
                        as="template"
                        enter="transform transition ease-in-out duration-500 sm:duration-700"
                        enter-from="translate-x-full"
                        enter-to="translate-x-0"
                        leave="transform transition ease-in-out duration-500 sm:duration-700"
                        leave-from="translate-x-0"
                        leave-to="translate-x-full"
                    >
                        <DialogPanel
                            class="pointer-events-auto w-screen max-w-2xl"
                        >
                            <div
                                class="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl"
                            >
                                <div
                                    class="flex min-h-0 flex-1 flex-col overflow-y-scroll"
                                >
                                    <div
                                        :class="`bg-${$page.props.team.color}-700 dark:bg-slate-900 px-4 py-6 sm:px-6`"
                                    >
                                        <div
                                            class="flex items-center justify-between"
                                        >
                                            <div
                                                class="mr-3 flex h-7 items-center"
                                            >
                                                <button
                                                    type="button"
                                                    :class="`relative rounded-md text-${$page.props.team.color}-200 hover:text-white focus:outline-none`"
                                                    @click="close"
                                                >
                                                    <span
                                                        class="absolute -inset-2.5"
                                                    />
                                                    <span class="sr-only"
                                                        >Close panel</span
                                                    >
                                                    <ArrowLongLeftIcon
                                                        class="h-6 w-6"
                                                        aria-hidden="true"
                                                    />
                                                </button>
                                            </div>
                                            <DialogTitle
                                                class="text-base font-semibold leading-6 text-white uppercase"
                                            >
                                                {{
                                                    $page.props.team.event.name
                                                }}
                                            </DialogTitle>
                                            <div
                                                class="ml-3 flex h-7 items-center"
                                            >
                                                <button
                                                    type="button"
                                                    :class="`relative rounded-md text-${$page.props.team.color}-200 hover:text-white focus:outline-none`"
                                                    @click="close"
                                                >
                                                    <span
                                                        class="absolute -inset-2.5"
                                                    />
                                                    <span class="sr-only"
                                                        >Close panel</span
                                                    >
                                                    <XMarkIcon
                                                        class="h-6 w-6"
                                                        aria-hidden="true"
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                        <div class="mt-1 text-center">
                                            <p class="text-sm text-indigo-300">
                                                Lorem, ipsum dolor sit amet
                                                consectetur adipisicing elit
                                                aliquam ad hic recusandae
                                                soluta.
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        class="container mx-auto sm:px-6 lg:px-8"
                                    >
                                        <div
                                            class="relative mt-6 flex-1 px-4 sm:px-6"
                                        >
                                            <ol
                                                class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base"
                                            >
                                                <li
                                                    class="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
                                                >
                                                    <span
                                                        class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500"
                                                    >
                                                        <svg
                                                            class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path
                                                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                                            />
                                                        </svg>
                                                        Personal
                                                        <span
                                                            class="hidden sm:inline-flex sm:ms-2"
                                                            >Info</span
                                                        >
                                                    </span>
                                                </li>
                                                <li
                                                    class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
                                                >
                                                    <span
                                                        class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500"
                                                    >
                                                        <span class="me-2"
                                                            >2</span
                                                        >
                                                        Account
                                                        <span
                                                            class="hidden sm:inline-flex sm:ms-2"
                                                            >Info</span
                                                        >
                                                    </span>
                                                </li>
                                                <li class="flex items-center">
                                                    <span class="me-2">3</span>
                                                    Confirmation
                                                </li>
                                            </ol>
                                        </div>
                                        <div class="flex mt-16">
                                            <div class="mr-4 flex-shrink-0">
                                                <svg
                                                    class="h-16 w-16 border border-gray-300 bg-white text-gray-300"
                                                    preserveAspectRatio="none"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    viewBox="0 0 200 200"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        vector-effect="non-scaling-stroke"
                                                        stroke-width="1"
                                                        d="M0 0l200 200M0 200L200 0"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 class="text-lg font-bold">
                                                    Lorem ipsum
                                                </h4>
                                                <p class="mt-1">
                                                    Repudiandae sint
                                                    consequuntur vel. Amet ut
                                                    nobis explicabo numquam
                                                    expedita quia omnis
                                                    voluptatem. Minus quidem
                                                    ipsam quia iusto.
                                                </p>

                                                <div class="mt-6 flex">
                                                    <div
                                                        class="mr-4 flex-shrink-0"
                                                    >
                                                        <svg
                                                            class="h-12 w-12 border border-gray-300 bg-white text-gray-300"
                                                            preserveAspectRatio="none"
                                                            stroke="currentColor"
                                                            fill="none"
                                                            viewBox="0 0 200 200"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                vector-effect="non-scaling-stroke"
                                                                stroke-width="1"
                                                                d="M0 0l200 200M0 200L200 0"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h4
                                                            class="text-lg font-bold"
                                                        >
                                                            Lorem ipsum
                                                        </h4>
                                                        <p class="mt-1">
                                                            Repudiandae sint
                                                            consequuntur vel.
                                                            Amet ut nobis
                                                            explicabo numquam
                                                            expedita quia omnis
                                                            voluptatem. Minus
                                                            quidem ipsam quia
                                                            iusto.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="mt-6 flex">
                                                    <div
                                                        class="mr-4 flex-shrink-0"
                                                    >
                                                        <svg
                                                            class="h-12 w-12 border border-gray-300 bg-white text-gray-300"
                                                            preserveAspectRatio="none"
                                                            stroke="currentColor"
                                                            fill="none"
                                                            viewBox="0 0 200 200"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                vector-effect="non-scaling-stroke"
                                                                stroke-width="1"
                                                                d="M0 0l200 200M0 200L200 0"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h4
                                                            class="text-lg font-bold"
                                                        >
                                                            Lorem ipsum
                                                        </h4>
                                                        <p class="mt-1">
                                                            Repudiandae sint
                                                            consequuntur vel.
                                                            Amet ut nobis
                                                            explicabo numquam
                                                            expedita quia omnis
                                                            voluptatem. Minus
                                                            quidem ipsam quia
                                                            iusto.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    class="flex flex-shrink-0 justify-end px-4 py-4"
                                >
                                    <button
                                        type="button"
                                        class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
                                        @click="close"
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
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </div>
    </Dialog>
</template>
<script setup lang="ts">
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
} from "@headlessui/vue";

import { ArrowLongLeftIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const emit = defineEmits<{
    close: [value: boolean];
}>();

const close = () => {
    emit("close", false);
};
</script>
