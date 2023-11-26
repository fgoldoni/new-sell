<template>
    <div class="bg-white">
        <div aria-hidden="true" class="relative">
            <img :src="$page.props.team.event.avatar" :alt="$page.props.team.event.name" class="h-96 w-full object-cover object-center" />
            <div class="absolute inset-0 bg-gradient-to-t from-white" />
        </div>

        <div class="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
            <div class="mx-auto max-w-2xl text-center lg:max-w-4xl">
                <h2 class="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    {{ $page.props.team.name }}
                </h2>
                <p class="mt-4 text-gray-500">
                    {{ $page.props.team.event.description }}
                </p>
                <Countdown></Countdown>
            </div>
            <HeroFeatureComponent></HeroFeatureComponent>
        </div>
    </div>
</template>

<script setup lang="ts">
import HeroFeatureComponent from "@/Components/HeroFeatureComponent.vue";
import {onMounted} from "vue";
import {useEventStore} from "@/stores/useEventStore";
import {storeToRefs} from "pinia";
import Countdown from "@/Components/Countdown.vue";
const eventStore = useEventStore()
const { event, isLoading } = storeToRefs(eventStore)

onMounted(async () => {

})
</script>
