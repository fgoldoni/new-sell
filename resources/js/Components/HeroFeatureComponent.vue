<template>

    <!-- Section 1 -->
    <section class="py-12 sm:py-16">
        <div class="max-w-7xl mx-auto sm:text-center">
            <div class="">
                <Tags v-if="$page.props.team.event?.tags.length"></Tags>
            </div>
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-10 my-12 sm:my-16">
                <div v-for="item in items" :key="item" class="btn-base cursor-pointer rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-slate-300 dark:border-slate-700">
                    <component :is="item.icon" :class="`mx-auto w-16 h-auto text-${$page.props.team.color}-500 flex-shrink-0`" aria-hidden="true" />
                    <p class="text-slate-800 dark:text-white font-bold mt-4 text-xl sm:text-2xl">{{ item.name }}</p>
                    <p class="mt-2 text-xl text-gray-500 uppercase">{{ item.title }}</p>
                </div>
            </div>
            <a href="javascript:;" @click="openModal = true" :class="`uppercase btn-base px-8 py-4 w-full text-center text-base font-medium inline-block rounded text-white hover:bg-${$page.props.team.color}-600 bg-${$page.props.team.color}-500`">
                Ajout de boissons
            </a>
            <Modal :show="openModal" @close="(value) => openModal = value">
                <div class="overflow-hidden h-full flex flex-col divide-y divide-gray-100 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900">
                    <div class="px-4 py-5 sm:px-6">
                        <div class="flex items-center justify-between">
                            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white"> Modal </h3>
                            <button type="button" @click="openModal = false;" class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center -my-1">
                                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                    <div class="grow px-4 py-5 sm:p-6">
                        <div class="relative mt-6 flex-1 px-4 sm:px-6">
                           dhfdgh
                        </div>
                    </div>
                    <div class="flex flex-shrink-0 justify-end px-4 py-4">
                        <button type="button" class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400" @click="open = false">Cancel</button>
                        <button type="submit" class="ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Save</button>
                    </div>
                </div>
            </Modal>
        </div>
    </section>
</template>

<script setup lang="ts">
import { CalendarIcon, ClockIcon, BuildingLibraryIcon, BanknotesIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import parseISO from 'date-fns/parseISO'
import format  from 'date-fns/format'
import { fr, enUS } from 'date-fns/locale'
import {usePage} from "@inertiajs/vue3";
import Tags from "@/Components/Tags.vue";
import Modal from "@/Components/BaseModal.vue";
import {ref} from "vue";

const locale = () => usePage().props.locale === 'fr' ? fr : enUS;

const openModal = ref(false);

const items = [
    {
        name: format(parseISO(usePage().props.team.event?.start), 'dd. MMMM', {locale: locale()}),
        title: format(parseISO(usePage().props.team.event?.start), 'EEEE', {locale: locale()}),
        icon: CalendarIcon,
    },
    {
        name: format(parseISO(usePage().props.team.event?.start), 'H:mm', {locale: locale()}),
        title: 'Begin',
        icon: ClockIcon,
    },
    {
        name: usePage().props.team.event?.city,
        title: 'City',
        icon: BuildingLibraryIcon,
    },
    {
        name: (usePage().props.team.event?.ticket?.price || 0) + ' ' + usePage().props.team.currency?.code,
        title: 'Entry',
        icon: BanknotesIcon,
    },
    // More items...
]
</script>
