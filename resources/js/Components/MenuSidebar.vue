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
                                        class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4"
                                    >
                                        <nav class="flex flex-1 flex-col mt-4">
                                            <ul
                                                role="list"
                                                class="flex flex-1 flex-col gap-y-7"
                                            >
                                                <li>
                                                    <ul
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
                                                                        ? 'bg-gray-50 text-indigo-600'
                                                                        : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                                                                ]"
                                                            >
                                                                <component
                                                                    :is="
                                                                        item.icon
                                                                    "
                                                                    :class="[
                                                                        item.current
                                                                            ? 'text-indigo-600'
                                                                            : 'text-gray-400 group-hover:text-indigo-600',
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
                                                        class="text-xs font-semibold leading-6 text-gray-400"
                                                    >
                                                        Your teams
                                                    </div>
                                                    <ul
                                                        role="list"
                                                        class="-mx-2 mt-2 space-y-1"
                                                    >
                                                        <li
                                                            v-for="team in teams"
                                                            :key="team.name"
                                                        >
                                                            <a
                                                                :href="
                                                                    team.href
                                                                "
                                                                :class="[
                                                                    team.current
                                                                        ? 'bg-gray-50 text-indigo-600'
                                                                        : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                                                                ]"
                                                            >
                                                                <span
                                                                    :class="[
                                                                        team.current
                                                                            ? 'text-indigo-600 border-indigo-600'
                                                                            : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600',
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
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="mt-auto">
                                                    <a
                                                        href="#"
                                                        class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                                                    >
                                                        <Cog6ToothIcon
                                                            class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                                                            aria-hidden="true"
                                                        />
                                                        Settings
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

<script setup>
import { ref } from "vue";
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
} from "@headlessui/vue";
import {
    CalendarIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
} from "@heroicons/vue/24/outline";

const navigation = [
    { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
    { name: "Team", href: "#", icon: UsersIcon, current: false },
    { name: "Projects", href: "#", icon: FolderIcon, current: false },
    { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
    {
        name: "Documents",
        href: "#",
        icon: DocumentDuplicateIcon,
        current: false,
    },
    { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];
const teams = [
    { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
    { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
    { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];
const userNavigation = [
    { name: "Your profile", href: "#" },
    { name: "Sign out", href: "#" },
];

const sidebarOpen = ref(false);

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
