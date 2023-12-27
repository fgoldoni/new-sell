<template>
    <MenuSidebar
        :show="openMenuSidebar"
        :scrolled-from-top="scrolledFromTop"
        @close="() => (openMenuSidebar = false)"
    ></MenuSidebar>
    <div
        class="min-h-full bg-white dark:bg-slate-900 text-gray-600 text-slate-500 dark:text-slate-400"
    >
        <Disclosure
            as="nav"
            :class="[
                scrolledFromTop ? 'fixed' : 'relative',
                'w-full bg-' +
                    $page.props.team.color +
                    '-600 dark:bg-slate-900 z-40 transition-all ease-in duration-700 border-b border-gray-200 dark:border-slate-700',
            ]"
            v-slot="{ open }"
        >
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div
                    class="flex justify-between transition-all duration-700"
                    :class="{
                        'h-16': !scrolledFromTop,
                        'h-14': scrolledFromTop,
                    }"
                >
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <Link :href="route('home')">
                                <img
                                    class="h-8 w-auto transform origin-left transition duration-700"
                                    :class="{
                                        'scale-100': !scrolledFromTop,
                                        'scale-75': scrolledFromTop,
                                    }"
                                    :src="$page.props.team.avatar"
                                    :alt="$page.props.team.name"
                                />
                            </Link>
                        </div>
                        <div class="hidden md:block">
                            <div class="ml-10 flex items-baseline space-x-4">
                                <Link
                                    v-for="item in navigation"
                                    :key="item.name"
                                    :href="route(item.href)"
                                    :class="[
                                        scrolledFromTop ? 'py-1' : 'py-1.5',
                                        route().current(item.href)
                                            ? 'uppercase bg-' +
                                              $page.props.team.color +
                                              '-700 text-white'
                                            : 'text-white hover:bg-' +
                                              $page.props.team.color +
                                              '-500 hover:bg-opacity-75',
                                        'rounded-md px-3 text-xs font-medium',
                                    ]"
                                    :aria-current="
                                        route().current(item.href)
                                            ? 'page'
                                            : undefined
                                    "
                                    >{{ item.name }}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="ml-6 flex space-x-4 items-center">
                        <LanguageSwitcherComponent
                            :scrolled-from-top="scrolledFromTop"
                        />
                        <ThemeSwitcherTheme
                            :scrolled-from-top="scrolledFromTop"
                        />
                        <a
                            v-if="!isAuthenticated"
                            :href="route('login.index')"
                            :class="[
                                scrolledFromTop ? 'py-1' : 'py-1.5',
                                'uppercase rounded-md bg-' +
                                    $page.props.team.color +
                                    '-700 px-3 text-xs font-semibold text-white shadow-sm hover:bg-' +
                                    $page.props.team.color +
                                    '-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-' +
                                    $page.props.team.color +
                                    '-600',
                            ]"
                            >{{ __("Login") }}</a
                        >
                        <button
                            @click="openMenuSidebar = true"
                            type="button"
                            :class="[
                                scrolledFromTop ? 'scale-75' : 'scale-100',
                                'md:hidden transition duration-700 inline-flex items-center justify-center rounded-md p-2 text-gray-400 dark:hover:bg-slate-800 hover:bg-' +
                                    $page.props.team.color +
                                    '-700 hover:text-white focus:outline-none`',
                            ]"
                        >
                            <Bars3Icon
                                class="block h-5 w-5 text-white"
                                aria-hidden="true"
                            />
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

<script setup lang="ts">
import { Disclosure } from "@headlessui/vue";
import { Bars3Icon } from "@heroicons/vue/24/outline";
import { onMounted, onUnmounted, ref } from "vue";
import ThemeSwitcherTheme from "@/Components/ThemeSwitcherTheme.vue";
import { useTicketsStore } from "@/stores/useTicketsStore";
import { storeToRefs } from "pinia";
import { useCountriesStore } from "@/stores/useCountriesStore";
import { useEventStore } from "@/stores/useEventStore";
import MenuSidebar from "@/Components/MenuSidebar.vue";
import LanguageSwitcherComponent from "@/Components/LanguageSwitcherComponent.vue";
import { useAuthStore } from "@/stores/useAuthStore";

const ticketsStore = useTicketsStore();
const eventStore = useEventStore();
const authStore = useAuthStore();
const countriesStore = useCountriesStore();
const { countries } = storeToRefs(countriesStore);
const { isAuthenticated } = storeToRefs(authStore);
const scrolledFromTop = ref(false);
const openMenuSidebar = ref(false);

const navigation = [
    { name: "Tickets", href: "tickets.index", current: true },
    { name: "FAQ", href: "faqs.index", current: false },
    { name: "Kontakt", href: "contacts.index", current: false },
];

const onScroll = () => {
    window.pageYOffset >= 50
        ? (scrolledFromTop.value = true)
        : (scrolledFromTop.value = false);
};

onMounted(async () => {
    window.addEventListener("scroll", onScroll);
    window.pageYOffset >= 50
        ? (scrolledFromTop.value = true)
        : (scrolledFromTop.value = false);

    await ticketsStore.get();

    await eventStore.get();

    if (countries.value.length === 0) {
        await countriesStore.get();
    }
});

onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
});
</script>
