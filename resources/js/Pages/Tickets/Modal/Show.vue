<template>
    <div>sdgdf</div>
</template>
<script setup lang="ts">
import { router, usePage } from "@inertiajs/vue3";

const close = async (value) => {
    return router.get(
        usePage().props.basePageRoute,
        {},
        { replace: true, preserveState: true, preserveScroll: true },
    );
};
</script>
