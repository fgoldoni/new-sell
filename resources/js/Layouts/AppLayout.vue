<template>
    <div class="min-h-full bg-white dark:bg-slate-800 text-gray-600 text-slate-500 dark:text-slate-400">
        <Disclosure as="nav"
                    class="w-full bg-white dark:bg-slate-800 z-40 transition-all ease-in duration-700 border-b border-gray-200"
                    :class="{'relative': !scrolledFromTop, 'fixed': scrolledFromTop}"
                    v-slot="{ open }"
        >
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div
                    class="flex justify-between transition-all duration-700"
                    :class="{'h-16': !scrolledFromTop, 'h-14': scrolledFromTop}"
                >
                    <div class="flex">
                        <div class="flex flex-shrink-0 items-center">
                            <img
                                class="h-8 w-auto transform origin-left transition duration-700"
                                :class="{'scale-100': !scrolledFromTop, 'scale-75': scrolledFromTop}"
                                :src="$page.props.team.avatar"
                                 src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                :alt="$page.props.team.name"
                            />
                        </div>
                        <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                            <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'border-' + $page.props.team.color + '-500 text-slate-900 dark:text-white' : 'border-transparent text-slate-500 dark:text-slate-400 hover:border-gray-300 hover:text-gray-700', 'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
                        </div>
                    </div>
                    <div class="ml-6 flex space-x-4 items-center">
                        <ThemeSwitcherTheme/>
                        <button type="button"
                                :class="[scrolledFromTop? 'scale-75' : 'scale-100', 'relative transform origin-left transition duration-700 rounded-md bg-' + $page.props.team.color + '-600 p-2 text-white shadow-sm hover:bg-' + $page.props.team.color + '-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-' + $page.props.team.color + '-600']"
                        >
                            <span class="absolute -inset-1.5" />
                            <ShoppingBagIcon
                                class="h-5 w-5"
                                :class="{'scale-100': !scrolledFromTop, 'scale-75': scrolledFromTop}"
                                aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </Disclosure>

        <div>
            <main class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <slot></slot>
            </main>
        </div>
    </div>
</template>

<script setup>
import { Disclosure } from '@headlessui/vue'
import { ShoppingBagIcon } from '@heroicons/vue/24/outline'

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

import {ref, onMounted, onUnmounted, computed} from 'vue'
import ThemeSwitcherTheme from "@/Components/ThemeSwitcherTheme.vue";

const scrolledFromTop = ref(false)

const onScroll = (event) => {
    window.pageYOffset >= 50 ? scrolledFromTop.value = true : scrolledFromTop.value = false
}
onMounted(() => {
    window.addEventListener('scroll', onScroll);
    window.pageYOffset >= 50 ? scrolledFromTop.value = true : scrolledFromTop.value = false
})

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
})
</script>
