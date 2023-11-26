<template>
    <section class="grid grid-cols-2 lg:grid-cols-4 gap-10 my-12 sm:my-16">
        <div v-for="item in items" :key="item" class="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
            <CalendarIcon :class="`mx-auto w-16 h-auto text-${$page.props.team.color}-500 flex-shrink-0`" aria-hidden="true" />
            <p class="text-slate-800 dark:text-white font-bold mt-4 text-xl sm:text-2xl">{{ item.title }}</p>
            <p class="mt-2 text-xl text-gray-500">Freitag</p>
        </div>
    </section>
</template>

<script setup>
import { CalendarIcon, ClockIcon, BuildingLibraryIcon, BanknotesIcon } from '@heroicons/vue/24/outline'
import parseISO from 'date-fns/parseISO'
import format  from 'date-fns/format'
import { fr, enUS } from 'date-fns/locale'
import {usePage} from "@inertiajs/vue3";

const locale = () => usePage().props.locale === 'fr' ? fr : enUS;

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
