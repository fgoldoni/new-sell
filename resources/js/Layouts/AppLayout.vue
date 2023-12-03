<template>
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
                            <img
                                class="h-8 w-auto transform origin-left transition duration-700"
                                :class="{
                                    'scale-100': !scrolledFromTop,
                                    'scale-75': scrolledFromTop,
                                }"
                                :src="$page.props.team.avatar"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                :alt="$page.props.team.name"
                            />
                        </div>
                        <div class="hidden md:block">
                            <div class="ml-10 flex items-baseline space-x-4">
                                <a
                                    v-for="item in navigation"
                                    :key="item.name"
                                    :href="item.href"
                                    :class="[
                                        item.current
                                            ? 'bg-' +
                                              $page.props.team.color +
                                              '-700 text-white'
                                            : 'text-white hover:bg-' +
                                              $page.props.team.color +
                                              '-500 hover:bg-opacity-75',
                                        'rounded-md px-3 py-2 text-sm font-medium',
                                    ]"
                                    :aria-current="
                                        item.current ? 'page' : undefined
                                    "
                                    >{{ item.name }}</a
                                >
                            </div>
                        </div>
                    </div>
                    <div class="ml-6 flex space-x-4 items-center">
                        <ThemeSwitcherTheme />
                        <button
                            type="button"
                            :class="[
                                scrolledFromTop ? 'scale-80' : 'scale-100',
                                'text-white bg-' +
                                    $page.props.team.color +
                                    '-700 hover:bg-' +
                                    $page.props.team.color +
                                    '-800 focus:ring-4 focus:outline-none focus:ring-' +
                                    $page.props.team.color +
                                    '-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-' +
                                    $page.props.team.color +
                                    '-600 dark:hover:bg-' +
                                    $page.props.team.color +
                                    '-700 dark:focus:ring-' +
                                    $page.props.team.color +
                                    '-800',
                            ]"
                        >
                            <ShoppingBagIcon
                                class="h-5 w-5"
                                :class="{
                                    'scale-100': !scrolledFromTop,
                                    'scale-80': scrolledFromTop,
                                }"
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
import { ShoppingBagIcon } from "@heroicons/vue/24/outline";
import { onMounted, onUnmounted, ref } from "vue";
import ThemeSwitcherTheme from "@/Components/ThemeSwitcherTheme.vue";
import { useTicketsStore } from "@/stores/useTicketsStore";
import { storeToRefs } from "pinia";

const ticketsStore = useTicketsStore();
const { isLoading } = storeToRefs(ticketsStore);
const scrolledFromTop = ref(false);

const navigation = [
    { name: "Tickets", href: "#", current: true },
    { name: "Media & Pics", href: "#", current: false },
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

    if (!isLoading.value) {
        await ticketsStore.get();
    }
});

onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
});
</script>
