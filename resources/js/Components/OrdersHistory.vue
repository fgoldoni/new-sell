<template>
    <div class="bg-slate-100 dark:bg-slate-800">
        <div class="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
            <div class="max-w-xl">
                <h1
                    id="your-orders-heading"
                    class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white"
                >
                    Your Orders
                </h1>
                <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    Check the status of recent orders, manage returns, and
                    discover similar products.
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
                            class="text-lg font-medium text-gray-900 md:flex-shrink-0"
                        >
                            Order #{{ order.id }}
                        </h2>
                        <div
                            class="space-y-5 sm:flex sm:items-baseline sm:justify-between sm:space-y-0 md:min-w-0 md:flex-1"
                        >
                            <p class="text-sm font-medium text-gray-500">
                                {{ order.status }}
                            </p>
                            <div class="flex text-sm font-medium">
                                <Link
                                    :href="
                                        route('orders.show', { id: order.id })
                                    "
                                    class="text-indigo-600 hover:text-indigo-500"
                                    >Manage order
                                </Link>
                                <div
                                    class="ml-4 border-l border-gray-200 pl-4 sm:ml-6 sm:pl-6"
                                >
                                    <a
                                        :href="order.download_url"
                                        download
                                        class="text-indigo-600 hover:text-indigo-500"
                                        >View Invoice</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="-mb-6 mt-6 flow-root divide-y divide-gray-200 border-t border-gray-200"
                    >
                        <div
                            v-for="product in order.items"
                            :key="product.id"
                            class="py-6 sm:flex"
                        >
                            <div
                                class="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8"
                            >
                                <img
                                    :src="product.attributes.item.avatar_url"
                                    :alt="product.name"
                                    class="h-20 w-20 flex-none rounded-md object-cover object-center sm:h-48 sm:w-48"
                                />
                                <div class="min-w-0 flex-1 pt-1.5 sm:pt-0">
                                    <h3
                                        class="text-sm font-medium text-gray-900"
                                    >
                                        <a :href="product.download_url">{{
                                            product.name
                                        }}</a>
                                    </h3>
                                    <p class="truncate text-sm text-gray-500">
                                        <span>{{ product.name }}</span>
                                        {{ " " }}
                                        <span
                                            class="mx-1 text-gray-400"
                                            aria-hidden="true"
                                            >&middot;</span
                                        >
                                        {{ " " }}
                                        <span>{{ product.name }}</span>
                                    </p>
                                    <p class="mt-1 font-medium text-gray-900">
                                        {{ product.price }}
                                    </p>
                                </div>
                            </div>
                            <div
                                class="mt-6 space-y-4 sm:ml-6 sm:mt-0 sm:w-40 sm:flex-none"
                            >
                                <button
                                    type="button"
                                    class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-2.5 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-full sm:flex-grow-0"
                                >
                                    Buy again
                                </button>
                                <button
                                    type="button"
                                    class="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-full sm:flex-grow-0"
                                >
                                    Shop similar
                                </button>
                            </div>
                        </div>
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
