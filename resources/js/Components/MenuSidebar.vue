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
                                                class="btn-title relative flex mb-4 items-center space-x-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-900 px-6 py-5 shadow-lg hover:border-slate-400"
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
                                                            class="text-sm font-medium text-slate-900 dark:text-white"
                                                        >
                                                            {{ user.name }}
                                                        </p>
                                                        <p
                                                            class="truncate text-sm text-slate-500 dark:text-slate-400"
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
                                                    <ul
                                                        role="list"
                                                        class="-mx-2 space-y-1"
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
                                                        v-if="isAuthenticated"
                                                        @click="logout"
                                                        href="javascript:;"
                                                        class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-rose-700 hover:bg-rose-50 dark:hover:bg-slate-900 hover:text-rose-600"
                                                    >
                                                        <svg
                                                            v-if="processing"
                                                            class="animate-spin h-5 w-5 inline-flex text-white"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <circle
                                                                class="opacity-25"
                                                                cx="12"
                                                                cy="12"
                                                                r="10"
                                                                stroke="currentColor"
                                                                stroke-width="4"
                                                            ></circle>
                                                            <path
                                                                class="opacity-75"
                                                                fill="currentColor"
                                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                            ></path>
                                                        </svg>
                                                        <ArrowRightOnRectangleIcon
                                                            v-if="!processing"
                                                            class="h-6 w-6 shrink-0 text-rose-400 group-hover:text-rose-600"
                                                            aria-hidden="true"
                                                        />
                                                        <span
                                                            v-if="!processing"
                                                            >{{
                                                                __("Log Out")
                                                            }}</span
                                                        >
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
import ApiError from "@/models/ApiError";
import { ref } from "vue";
import { router } from "@inertiajs/vue3";
import { setCookie } from "@/composable/useCookie";

const authStore = useAuthStore();
const { isAuthenticated, user } = storeToRefs(authStore);
const processing = ref(false);

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

const logout = async () => {
    try {
        processing.value = true;

        await authStore
            .logout()
            .then(async () => {
                await authStore.reset();
                setCookie("accessToken", "", -1);

                return router.get(route("home"));
            })
            .catch((error: any) => {
                throw new ApiError(error);
            })
            .finally(() => {
                processing.value = false;
            });
    } catch (error) {
        throw new ApiError(error);
    }
};
</script>
