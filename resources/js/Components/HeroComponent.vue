<template>
    <div class="bg-white dark:bg-slate-800">
        <div aria-hidden="true" class="relative">
            <img :src="$page.props.team.event.avatar" :alt="$page.props.team.event.name" class="h-96 w-full object-cover object-center" />
            <div class="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-800" />
        </div>

        <div class="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
            <div class="mx-auto max-w-2xl text-center lg:max-w-4xl">
                <h2 class="text-2xl font-bold  dark:text-white text-slate-800 uppercase">
                    {{ $page.props.team.name }} {{ __('Presents') }}<br>
                    <TypingEffect :items='$page.props.team.event?.artist.split("&")'></TypingEffect>&nbsp;
                </h2>
                <p class="mt-4 text-gray-500">
                    {{ $page.props.team.event.description }}
                </p>
                <div class="flex justify-center items-center mt-4">
                    <Countdown></Countdown>
                </div>
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
import TypingEffect from "@/Components/TypingEffect.vue";
const eventStore = useEventStore()
const { event, isLoading } = storeToRefs(eventStore)

onMounted(async () => {

})
</script>
