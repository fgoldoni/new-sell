<template>
    <AppLayout>
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
                <div
                    class="mt-8 divide-y divide-gray-200 overflow-hidden rounded text-xl text-gray-500 text-justify"
                >
                    <div class="px-4 py-5 sm:px-6">
                        <h2>Mentions légales</h2>
                    </div>

                    <div class="px-4 py-5 sm:p-6 whitespace-pre-line">
                        <meta
                            http-equiv="content-type"
                            content="text/html; charset=utf-8"
                        />
                        <strong
                            >Angaben gemäß §&nbsp;14 Absatz 1 Satz
                            1&nbsp;</strong
                        ><br /><br /><span>Sell - First&nbsp;</span><br /><span
                            >Goldoni Fouotsa&nbsp;</span
                        ><br /><span
                            >Niendorfer Straße 43, 22529 Hamburg,
                            Deutschland&nbsp;</span
                        ><br /><br /><strong>Vertreten durch:</strong
                        ><span>&nbsp;</span><br /><span
                            >Goldoni Fouotsa&nbsp;</span
                        ><br /><br /><strong>Kontakt:</strong><span>&nbsp;</span
                        ><br /><span>Telefon: +491738779485&nbsp;</span
                        ><br /><span>E-Mail: contact@sell-first.com&nbsp;</span
                        ><br /><br /><strong>USt-ID-Nr.: DE 332972034</strong>
                    </div>
                </div>
            </div>

            <FooterComponent></FooterComponent>
        </div>
    </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from "@/Layouts/AppLayout.vue";
import FooterComponent from "@/Components/FooterComponent.vue";
</script>
