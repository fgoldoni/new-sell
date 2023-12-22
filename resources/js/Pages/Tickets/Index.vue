<template>
    <AppLayout>
        <div>
            <EntriesComponent
                bg-color="bg-white dark:bg-slate-900"
            ></EntriesComponent>
            <PackagesComponent></PackagesComponent>
            <FooterComponent></FooterComponent>
        </div>
    </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from "@/Layouts/AppLayout.vue";
import EntriesComponent from "@/Components/EntriesComponent.vue";
import PackagesComponent from "@/Components/PackagesComponent.vue";
import FooterComponent from "@/Components/FooterComponent.vue";

const tiers = [
    {
        name: "Hobby",
        id: "tier-hobby",
        href: "#",
        priceMonthly: "$49",
        description:
            "Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae.",
        features: [
            "5 products",
            "Up to 1,000 subscribers",
            "Basic analytics",
            "48-hour support response time",
        ],
    },
    {
        name: "Team",
        id: "tier-team",
        href: "#",
        priceMonthly: "$79",
        description:
            "Explicabo quo fugit vel facere ullam corrupti non dolores. Expedita eius sit sequi.",
        features: [
            "Unlimited products",
            "Unlimited subscribers",
            "Advanced analytics",
            "1-hour, dedicated support response time",
            "Marketing automations",
        ],
    },
];
</script>
