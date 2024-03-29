<template>
    <div class="bg-slate-100 dark:bg-slate-800">
        <div class="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
            <div class="max-w-xl">
                <h1
                    id="your-orders-heading"
                    class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white uppercase"
                >
                    {{ __("Your Orders") }}
                </h1>
                <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    {{
                        __(
                            "Check the status of recent orders, manage returns, and discover similar products.",
                        )
                    }}
                </p>
            </div>

            <div class="mt-12 space-y-16 sm:mt-16">
                <section
                    v-for="order in items"
                    :key="order.id"
                    :aria-labelledby="`${order.id}-heading`"
                >
                    <div
                        class="space-y-1 md:flex md:items-baseline md:space-x-4 md:space-y-0"
                    >
                        <h2
                            :id="`${order.id}-heading`"
                            class="text-lg font-medium text-slate-900 dark:text-white md:flex-shrink-0 uppercase"
                        >
                            {{ __("Number") }} #{{ order.id }}
                        </h2>
                        <div
                            class="space-y-5 sm:flex sm:items-baseline sm:justify-between sm:space-y-0 md:min-w-0 md:flex-1"
                        >
                            <p
                                v-if="order?.status === 'pending'"
                                class="inline-block uppercase rounded-md bg-rose-50 px-2 py-1 text-xs font-medium text-rose-600 ring-1 ring-inset ring-rose-600/20"
                            >
                                {{ __(order.status) }}
                            </p>
                            <p
                                v-else
                                class="inline-block uppercase rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-600/20"
                            >
                                {{ __(order.status) }}
                            </p>
                            <div class="flex text-sm font-medium">
                                <Link
                                    :href="
                                        route('orders.show', { id: order.id })
                                    "
                                    :class="`btn-title text-${$page.props.team.color}-600 hover:text-${$page.props.team.color}-500`"
                                    >{{ __("Details") }}
                                </Link>
                                <div
                                    class="ml-4 border-l border-slate-300 dark:border-slate-600 pl-4 sm:ml-6 sm:pl-6"
                                >
                                    <a
                                        v-if="order?.status !== 'pending'"
                                        :href="order.download_url"
                                        target="_blank"
                                        download
                                        :class="`btn-title text-${$page.props.team.color}-600 hover:text-${$page.props.team.color}-500`"
                                        >{{ __("Download") }}</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="-mb-6 mt-6 flow-root divide-y divide-slate-300 dark:divide-slate-700 border-t border-gray-300 dark:border-gray-700"
                    >
                        <template
                            v-for="(product, key, index) in order?.items"
                            :key="product.id"
                        >
                            <div
                                v-if="product.attributes.type === 'ticket'"
                                class="py-6 sm:flex"
                            >
                                <div
                                    class="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8"
                                >
                                    <img
                                        :src="
                                            product.attributes.item.avatar_url
                                        "
                                        :alt="product.name"
                                        class="btn-base cursor-pointer h-20 w-20 flex-none rounded-md object-cover object-center sm:h-48 sm:w-48"
                                    />
                                    <div class="min-w-0 flex-1 pt-1.5 sm:pt-0">
                                        <h3
                                            class="text-sm font-medium text-slate-900 dark:text-white uppercase"
                                        >
                                            <a href="javascript:;">
                                                {{ product.quantity }} *
                                                {{ product.name }} ({{
                                                    product.quantity
                                                }}
                                                *
                                                {{
                                                    product.attributes.item
                                                        .attendees
                                                }}
                                                {{ __("Pl.") }})
                                            </a>
                                        </h3>
                                        <p
                                            class="truncate text-sm text-slate-500 dark:text-slate-400"
                                        >
                                            <span
                                                >{{
                                                    $page.props.team.currency
                                                        .code
                                                }}
                                                {{ product.price }}</span
                                            >
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </template>

                        <template
                            v-for="(product, key, index) in order?.items"
                            :key="product.id"
                        >
                            <div
                                v-if="
                                    product.attributes.type === 'ticket' &&
                                    product.attributes.products?.length
                                "
                            >
                                <div
                                    v-for="(item, key, index) in product
                                        .attributes.products"
                                    class="py-6 sm:flex"
                                >
                                    <div
                                        class="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8"
                                    >
                                        <img
                                            :src="item.avatar_url"
                                            :alt="item.name"
                                            class="btn-base cursor-pointer h-20 w-20 flex-none rounded-md object-cover object-center sm:h-48 sm:w-48"
                                        />
                                        <div
                                            class="min-w-0 flex-1 pt-1.5 sm:pt-0"
                                        >
                                            <h3
                                                class="text-sm font-medium text-slate-900 dark:text-white uppercase"
                                            >
                                                <a href="javascript:;">
                                                    {{ item.quantity }} *
                                                    {{ item.name }}
                                                </a>
                                            </h3>
                                            <p
                                                class="truncate text-sm text-slate-500 dark:text-slate-400"
                                            >
                                                <span>{{ __("Inkl.") }}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>

                        <template
                            v-for="(product, key, index) in order?.items"
                            :key="product.id"
                        >
                            <div
                                v-if="product.attributes.type === 'product'"
                                class="py-6 sm:flex"
                            >
                                <div
                                    class="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8"
                                >
                                    <img
                                        :src="
                                            product.attributes.item.avatar_url
                                        "
                                        :alt="product.name"
                                        class="btn-base cursor-pointer h-20 w-20 flex-none rounded-md object-cover object-center sm:h-48 sm:w-48"
                                    />
                                    <div class="min-w-0 flex-1 pt-1.5 sm:pt-0">
                                        <h3
                                            class="text-sm font-medium text-slate-900 dark:text-white uppercase"
                                        >
                                            <a href="javascript:;">
                                                {{ product.quantity }} *
                                                {{ product.name }}
                                            </a>
                                        </h3>
                                        <p
                                            class="truncate text-sm text-slate-500 dark:text-slate-400"
                                        >
                                            <span>
                                                {{
                                                    $page.props.team.currency
                                                        .code
                                                }}
                                                {{ product.price }}</span
                                            >
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Order } from "@/types";

interface Props {
    items: Order[];
}

const props = defineProps<Props>();

const orders = [
    {
        number: "4376",
        status: "Delivered on January 22, 2021",
        href: "#",
        invoiceHref: "#",
        products: [
            {
                id: 1,
                name: "Machined Brass Puzzle",
                href: "#",
                price: "$95.00",
                color: "Brass",
                size: '3" x 3" x 3"',
                imageSrc:
                    "https://tailwindui.com/img/ecommerce-images/order-history-page-07-product-01.jpg",
                imageAlt:
                    "Brass puzzle in the shape of a jack with overlapping rounded posts.",
            },
            // More products...
        ],
    },
    // More orders...
];
</script>
