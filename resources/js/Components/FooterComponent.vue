<script setup lang="ts">
const teams = [
    {
        id: 5,
        name: "Terms",
        href: "pages.terms",
        initial: "K",
        current: false,
    },
    {
        id: 6,
        name: "Protection",
        href: "pages.protection",
        initial: "K",
        current: false,
    },
    {
        id: 6,
        name: "Impressum",
        href: "pages.impressum",
        initial: "K",
        current: false,
    },
];
</script>

<template>
    <!-- Section 1 -->
    <section class="py-10 bg-black">
        <div class="px-10 mx-auto max-w-7xl">
            <div
                class="flex flex-col items-center md:flex-row md:justify-between"
            >
                <a
                    class="flex items-center justify-center w-auto h-10 mr-3 rounded-lg mb-7 bg-transparent rounded-xxl"
                >
                    <img
                        class="w-auto h-10 text-white fill-current"
                        src="/images/logo.png"
                        alt="sell-first.com"
                    />
                </a>

                <div class="flex flex-row justify-center mb-4 -ml-4 -mr-4">
                    <a
                        href="https://www.facebook.com/sellfirst23"
                        target="_blank"
                        class="p-4 text-gray-700 hover:text-gray-400"
                    >
                        <svg
                            class="fill-current"
                            width="16"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="flex flex-col justify-between text-center md:flex-row">
                <p
                    class="order-last text-sm leading-tight text-gray-500 md:order-first"
                >
                    © 2024 Sell First. All rights reserved.
                </p>
                <ul
                    class="flex flex-row justify-center pb-3 -ml-4 -mr-4 text-sm"
                >
                    <li v-for="team in teams" :key="team.name">
                        <Link
                            :href="route(team.href)"
                            class="px-4 text-gray-500 hover:text-white uppercase"
                            v-text="team.name"
                        ></Link>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
