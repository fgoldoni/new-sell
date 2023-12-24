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
</script>
