<template>
    <div
        class="divide-y mb-24 sm:mb-32 sm:divide-slate-200 sm:dark:divide-slate-600"
    >
        <div class="pb-6">
            <div
                class="h-36 bg-indigo-700 sm:h-36 lg:h-40"
                :style="`
                    background-image: url(&quot;${order.event.avatar}&quot;);
                    background-position: center -80px;
                `"
            />
            <div
                class="-mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6 lg:-mt-16"
            >
                <div>
                    <div class="-m-1 flex">
                        <div
                            class="inline-flex overflow-hidden rounded-lg border-4 border-white"
                        >
                            <div v-if="order?.status === 'pending'">
                                <img
                                    class="h-24 w-24 flex-shrink-0 sm:h-40 sm:w-40 lg:h-48 lg:w-48"
                                    src="https://ui-avatars.com/api/?name=No&color=7F9CF5&background=EBF4FF"
                                    :alt="order?.status"
                                />
                            </div>
                            <div
                                v-else
                                class="h-24 w-24 flex-shrink-0 sm:h-40 sm:w-40 lg:h-48 lg:w-48"
                                v-html="order.qr_code"
                            ></div>
                        </div>
                    </div>
                </div>
                <div class="mt-6 sm:ml-6 sm:flex-1">
                    <div>
                        <div class="flex items-center">
                            <h3
                                class="flex items-center space-x-4 text-xl font-bold text-slate-900 dark:text-white sm:text-2xl"
                            >
                                <span>{{
                                    order?.team.currency + " " + order.total
                                }}</span>
                                <span
                                    v-if="order?.status === 'pending'"
                                    class="uppercase rounded-md bg-rose-50 px-2 py-1 text-xs font-medium text-rose-600 ring-1 ring-inset ring-rose-600/20"
                                >
                                    {{ __(order.status) }}
                                </span>
                                <span
                                    v-else
                                    class="uppercase rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-600/20"
                                >
                                    {{ __(order.status) }}
                                </span>
                            </h3>
                        </div>
                        <p class="text-sm text-gray-500">
                            {{ order.event.address }}
                        </p>
                    </div>
                    <div class="mt-5 flex flex-wrap space-y-0 sm:space-x-3">
                        <a
                            :href="`tel: ${order.team.phone}`"
                            :class="`btn-base inline-flex w-full flex-1 items-center justify-center rounded-md bg-${$page.props.team.color}-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-${$page.props.team.color}-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${$page.props.team.color}-600 sm:flex-1`"
                        >
                            {{ order.team.phone }}
                        </a>
                        <div class="ml-3 inline-flex sm:ml-0">
                            <Menu
                                as="div"
                                class="relative inline-block text-left"
                            >
                                <MenuButton
                                    class="relative inline-flex items-center rounded-md bg-white p-2 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                >
                                    <span class="absolute -inset-1" />
                                    <span class="sr-only"
                                        >Open options menu</span
                                    >
                                    <EllipsisVerticalIcon
                                        class="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                </MenuButton>
                                <transition
                                    enter-active-class="transition ease-out duration-100"
                                    enter-from-class="transform opacity-0 scale-95"
                                    enter-to-class="transform opacity-100 scale-100"
                                    leave-active-class="transition ease-in duration-75"
                                    leave-from-class="transform opacity-100 scale-100"
                                    leave-to-class="transform opacity-0 scale-95"
                                >
                                    <MenuItems
                                        class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    >
                                        <div class="py-1">
                                            <MenuItem v-slot="{ active }">
                                                <a
                                                    href="#"
                                                    :class="[
                                                        active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700',
                                                        'block px-4 py-2 text-sm',
                                                    ]"
                                                    >View profile</a
                                                >
                                            </MenuItem>
                                            <MenuItem v-slot="{ active }">
                                                <a
                                                    href="#"
                                                    :class="[
                                                        active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700',
                                                        'block px-4 py-2 text-sm',
                                                    ]"
                                                    >Copy profile link</a
                                                >
                                            </MenuItem>
                                        </div>
                                    </MenuItems>
                                </transition>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-4 py-5 sm:px-0 sm:py-0">
            <dl
                :class="`space-y-8 sm:space-y-0 sm:divide-y sm:divide-slate-200 sm:dark:divide-slate-600`"
            >
                <div class="sm:px-6 sm:py-5">
                    <dt
                        class="text-sm font-medium text-gray-500 sm:w-60 sm:flex-shrink-0"
                    >
                        {{
                            __("wizard.step_6.title", { name: order.user.name })
                        }}
                    </dt>
                    <dd
                        :class="[
                            order?.status === 'pending'
                                ? 'text-rose-500'
                                : 'text-slate-500 dark:text-slate-400',
                            'mt-4 text-sm sm:col-span-2',
                        ]"
                    >
                        <p v-if="order?.status === 'pending'">
                            {{
                                __("wizard.step_6.pending_description", {
                                    total:
                                        order?.team.currency +
                                        " " +
                                        order?.total,
                                    date: format(
                                        addDays(
                                            parseISO(order?.created_at),
                                            $page.props?.team.transfer?.until ||
                                                5,
                                        ),
                                        "dd MMM yyyy",
                                        { locale: locale() },
                                    ),
                                })
                            }}
                        </p>
                        <p v-else>
                            {{ __("wizard.step_6.description") }}
                        </p>
                    </dd>
                    <dl
                        v-if="
                            order?.status === 'pending' &&
                            $page.props?.team.transfer
                        "
                        class="mt-6 grid grid-cols-1 text-sm leading-6 sm:grid-cols-2"
                    >
                        <div
                            class="uppercase mt-6 border-t border-gray-900/5 dark:border-slate-700 pt-6 sm:pr-4"
                        >
                            <dt
                                class="font-semibold text-slate-900 dark:text-white"
                                v-text="$page.props.team.transfer.bank_name"
                            ></dt>
                            <dd class="mt-2 text-slate-500 dark:text-slate-400">
                                <span
                                    class="font-medium text-slate-900 dark:text-white"
                                    v-text="$page.props.team.transfer.name"
                                />
                                <br />
                                {{ $page.props.team.transfer.iban }}
                                <br />
                                {{ $page.props.team.transfer.bic }}
                                <br />
                                {{ order.team.currency }} {{ order.total }}
                                <br />
                                Reason: {{ order?.id }} -
                                {{ order.user.name }}
                            </dd>
                        </div>
                        <div
                            class="mt-8 sm:mt-6 sm:border-t sm:border-gray-900/5 dark:border-slate-700 sm:pl-4 sm:pt-6"
                            v-if="$page.props.team.transfer.paypal"
                        >
                            <dt
                                class="font-semibold text-slate-900 dark:text-white"
                            >
                                PAYPAL
                            </dt>
                            <dd class="mt-2 text-gray-500">
                                <span
                                    class="lowercase font-medium text-slate-900 dark:text-white"
                                    >{{
                                        $page.props.team.transfer.paypal
                                    }}</span
                                >
                            </dd>
                        </div>
                    </dl>
                </div>
                <div class="grid grid-cols-1 w-full">
                    <div class="col-span-1">
                        <div class="flex h-full flex-col">
                            <div
                                class="border-b border-slate-200 dark:border-slate-600"
                            >
                                <div class="py-6 sm:p-6">
                                    <div
                                        class="flex items-start justify-between"
                                    >
                                        <h2
                                            class="text-sm font-semibold leading-6 text-slate-500 dark:text-slate-400"
                                        >
                                            {{ __("wizard.step_6.details") }}
                                            <span class="uppercase">
                                                ({{ order.total_quantity }}
                                                {{ __("Items") }})
                                            </span>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <ul
                                role="list"
                                class="relative divide-y divide-slate-200 dark:divide-slate-600"
                            >
                                <template
                                    v-for="(item, key, index) in order?.items"
                                    :key="item.id"
                                >
                                    <TicketOrderItem
                                        :item="item"
                                        v-if="item.attributes.type === 'ticket'"
                                        :index="index"
                                    ></TicketOrderItem>
                                </template>

                                <template
                                    v-for="(item, key, index) in order?.items"
                                    :key="item.id"
                                >
                                    <ProductOrderItem
                                        :item="item"
                                        v-if="
                                            item.attributes.type === 'product'
                                        "
                                        :index="index"
                                    ></ProductOrderItem>
                                </template>
                            </ul>
                        </div>
                    </div>
                </div>
            </dl>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { EllipsisVerticalIcon } from "@heroicons/vue/20/solid";
import { useOrdersStore } from "@/stores/useOrdersStore";
import { storeToRefs } from "pinia";
import TicketOrderItem from "@/Components/Tickets/Orders/TicketOrderItem.vue";
import ProductOrderItem from "@/Components/Tickets/Orders/ProductOrderItem.vue";
import parseISO from "date-fns/parseISO";
import format from "date-fns/format";
import addDays from "date-fns/addDays";
import { de, enUS, fr } from "date-fns/locale";
import { usePage } from "@inertiajs/vue3";

const ordersStore = useOrdersStore();
const { order } = storeToRefs(ordersStore);

const locale = () =>
    usePage().props.team.locale === "fr"
        ? fr
        : usePage().props.team.locale === "de"
          ? de
          : enUS;
</script>
