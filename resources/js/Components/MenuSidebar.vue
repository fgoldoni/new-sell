<template>
    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-40" @close="close">
            <div class="fixed inset-0" />

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
                                class="pointer-events-auto w-screen max-w-md"
                            >
                                <div
                                    class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
                                >
                                    <div
                                        :class="`bg-${$page.props.team.color}-700 px-4 py-6 sm:px-6`"
                                    >
                                        <div
                                            class="flex items-center justify-between"
                                        >
                                            <DialogTitle
                                                class="text-base font-semibold leading-6 text-white"
                                            >
                                                <img
                                                    class="h-8 w-auto transform origin-left transition duration-700"
                                                    :class="{
                                                        'scale-100':
                                                            !scrolledFromTop,
                                                        'scale-75':
                                                            scrolledFromTop,
                                                    }"
                                                    :src="
                                                        $page.props.team.avatar
                                                    "
                                                    :alt="$page.props.team.name"
                                                />
                                            </DialogTitle>
                                            <div
                                                class="ml-3 flex h-7 items-center"
                                            >
                                                <button
                                                    type="button"
                                                    :class="`relative rounded-md bg-${$page.props.team.color}-700 text-${$page.props.team.color}-200 hover:text-white focus:outline-none`"
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
                                    </div>
                                    <div
                                        class="flex grow flex-col gap-y-5 overflow-y-auto bg-white dark:bg-slate-800 px-6 pb-4"
                                    >
                                        <nav class="flex flex-1 flex-col mt-4">
                                            <div
                                                v-if="isAuthenticated"
                                                class="relative flex mb-4 items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
                                            >
                                                <div class="flex-shrink-0">
                                                    <img
                                                        class="h-10 w-10 rounded-full"
                                                        :src="user.avatar_url"
                                                        :alt="user.name"
                                                    />
                                                </div>
                                                <div class="min-w-0 flex-1">
                                                    <a
                                                        href="#"
                                                        class="focus:outline-none"
                                                    >
                                                        <span
                                                            class="absolute inset-0"
                                                            aria-hidden="true"
                                                        />
                                                        <p
                                                            class="text-sm font-medium text-gray-900"
                                                        >
                                                            {{ user.name }}
                                                        </p>
                                                        <p
                                                            class="truncate text-sm text-gray-500"
                                                        >
                                                            {{ user.email }}
                                                        </p>
                                                    </a>
                                                </div>
                                            </div>
                                            <ul
                                                role="list"
                                                class="flex flex-1 flex-col gap-y-7"
                                            >
                                                <li>
                                                    <ul
                                                        v-if="isAuthenticated"
                                                        role="list"
                                                        class="-mx-2 space-y-1"
                                                    >
                                                        <li
                                                            v-for="item in navigation"
                                                            :key="item.name"
                                                        >
                                                            <a
                                                                :href="
                                                                    item.href
                                                                "
                                                                :class="[
                                                                    item.current
                                                                        ? 'bg-slate-50 dark:bg-slate-900 text-' +
                                                                          $page
                                                                              .props
                                                                              .team
                                                                              .color +
                                                                          '-600'
                                                                        : 'text-slate-500 dark:text-slate-400 hover:text-' +
                                                                          $page
                                                                              .props
                                                                              .team
                                                                              .color +
                                                                          '-600 hover:bg-slate-50 dark:hover:bg-slate-900',
                                                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                                                                ]"
                                                            >
                                                                <component
                                                                    :is="
                                                                        item.icon
                                                                    "
                                                                    :class="[
                                                                        item.current
                                                                            ? 'text-' +
                                                                              $page
                                                                                  .props
                                                                                  .team
                                                                                  .color +
                                                                              '-600'
                                                                            : 'text-slate-400 group-hover:text-' +
                                                                              $page
                                                                                  .props
                                                                                  .team
                                                                                  .color +
                                                                              '-600',
                                                                        'h-6 w-6 shrink-0',
                                                                    ]"
                                                                    aria-hidden="true"
                                                                />
                                                                {{ item.name }}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <div
                                                        class="text-xs font-semibold leading-6 text-slate-400"
                                                    >
                                                        {{ __("Home") }}
                                                    </div>
                                                    <ul
                                                        role="list"
                                                        class="-mx-2 mt-2 space-y-1"
                                                    >
                                                        <li
                                                            v-for="team in teams"
                                                            :key="team.name"
                                                        >
                                                            <Link
                                                                :href="
                                                                    route(
                                                                        team.href,
                                                                    )
                                                                "
                                                                :class="[
                                                                    route().current(
                                                                        team.href,
                                                                    )
                                                                        ? 'bg-slate-50 dark:bg-slate-900 text-' +
                                                                          $page
                                                                              .props
                                                                              .team
                                                                              .color +
                                                                          '-600'
                                                                        : 'text-slate-500 dark:text-slate-400 hover:text-' +
                                                                          $page
                                                                              .props
                                                                              .team
                                                                              .color +
                                                                          '-600 hover:bg-slate-50 dark:hover:bg-slate-900',
                                                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                                                                ]"
                                                            >
                                                                <span
                                                                    :class="[
                                                                        route().current(
                                                                            team.href,
                                                                        )
                                                                            ? 'text-' +
                                                                              $page
                                                                                  .props
                                                                                  .team
                                                                                  .color +
                                                                              '-600 border-' +
                                                                              $page
                                                                                  .props
                                                                                  .team
                                                                                  .color +
                                                                              '-600'
                                                                            : 'text-slate-400 border-slate-200 group-hover:border-' +
                                                                              $page
                                                                                  .props
                                                                                  .team
                                                                                  .color +
                                                                              '-600 group-hover:text-' +
                                                                              $page
                                                                                  .props
                                                                                  .team
                                                                                  .color +
                                                                              '-600',
                                                                        'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white',
                                                                    ]"
                                                                    >{{
                                                                        team.initial
                                                                    }}</span
                                                                >
                                                                <span
                                                                    class="truncate"
                                                                    >{{
                                                                        team.name
                                                                    }}</span
                                                                >
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="mt-auto">
                                                    <a
                                                        href="#"
                                                        class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-rose-700 hover:bg-rose-50 dark:hover:bg-slate-900 hover:text-rose-600"
                                                    >
                                                        <ArrowRightOnRectangleIcon
                                                            class="h-6 w-6 shrink-0 text-rose-400 group-hover:text-rose-600"
                                                            aria-hidden="true"
                                                        />
                                                        {{ __("Log Out") }}
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup lang="ts">
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
} from "@headlessui/vue";
import {
    ArrowRightOnRectangleIcon,
    Cog6ToothIcon,
    ShoppingCartIcon,
    XMarkIcon,
} from "@heroicons/vue/24/outline";
import { useAuthStore } from "@/stores/useAuthStore.js";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const { isAuthenticated, user } = storeToRefs(authStore);

const imageUrl =
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

const navigation = [
    {
        name: "Meine Bestellungen",
        href: "#",
        icon: ShoppingCartIcon,
        current: false,
    },
    { name: "Einstellungen", href: "#", icon: Cog6ToothIcon, current: false },
];
const teams = [
    {
        id: 1,
        name: "Tickets",
        href: "tickets.index",
        initial: "T",
        current: false,
    },
    { id: 3, name: "FAQ", href: "faqs.index", initial: "F", current: false },
    {
        id: 4,
        name: "Kontakt",
        href: "contacts.index",
        initial: "K",
        current: false,
    },
];

const props = defineProps({
    scrolledFromTop: {
        type: Boolean,
        default: false,
    },
    open: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(["close"]);

const close = () => {
    emit("close", false);
};
</script>
