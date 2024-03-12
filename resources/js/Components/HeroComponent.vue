<template>
    <div class="bg-slate-50 dark:bg-slate-800">
        <div aria-hidden="true" class="relative">
            <img
                :src="$page.props.team.event.avatar"
                :alt="$page.props.team.event.name"
                class="h-[32rem] sm:h-[42rem] w-full object-cover object-center"
            />
            <div
                class="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-800"
            />
        </div>

        <div
            class="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8"
        >
            <div class="mx-auto max-w-2xl text-center lg:max-w-4xl">
                <h2
                    class="text-2xl font-bold dark:text-white text-slate-800 uppercase"
                >
                    {{ $page.props.team.name }} {{ __("labels.presents")
                    }}<br />
                    <TypingEffect
                        :items="$page.props.team.event?.artist.split('&')"
                    ></TypingEffect
                    >&nbsp;
                </h2>
                <p class="mt-4 text-gray-500">
                    {{ $page.props.team.event.description }}
                </p>
            </div>
            <a
                :href="`tel:${$page.props.team.phone}`"
                :class="`btn-title px-8 py-4 mt-8 w-full text-center hover:underline text-lg sm:text-xl inline-block text-slate-500 dark:text-slate-400`"
            >
                <span>
                    <PhoneArrowUpRightIcon
                        class="-ml-0.5 mr-2 inline-flex h-5 w-5"
                        aria-hidden="true"
                    />
                    {{ $page.props.team.phone }}
                </span>
            </a>
            <div class="flex justify-center items-center mt-4">
                <Countdown></Countdown>
            </div>
            <HeroFeatureComponent></HeroFeatureComponent>
            <EntriesComponent></EntriesComponent>
            <TeamComponent></TeamComponent>
            <McsComponent></McsComponent>
            <DjsComponent></DjsComponent>
            <PackagesComponent></PackagesComponent>
            <PartnersComponent></PartnersComponent>
            <ContentComponent></ContentComponent>
            <MapComponent v-if="$page.props.team.event.iframe"></MapComponent>
            <FooterComponent></FooterComponent>
        </div>
    </div>
</template>

<script setup lang="ts">
import HeroFeatureComponent from "@/Components/HeroFeatureComponent.vue";
import { onMounted } from "vue";
import Countdown from "@/Components/Countdown.vue";
import TypingEffect from "@/Components/TypingEffect.vue";
import EntriesComponent from "@/Components/EntriesComponent.vue";
import PackagesComponent from "@/Components/PackagesComponent.vue";
import PartnersComponent from "@/Components/PartnersComponent.vue";
import FooterComponent from "@/Components/FooterComponent.vue";
import ContentComponent from "@/Components/ContentComponent.vue";
import { PhoneArrowUpRightIcon } from "@heroicons/vue/20/solid";
import MapComponent from "@/Components/MapComponent.vue";
import DjsComponent from "@/Components/DjsComponent.vue";
import McsComponent from "@/Components/McsComponent.vue";
import TeamComponent from "@/Components/TeamComponent.vue";

onMounted(async () => {});
</script>
