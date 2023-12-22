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
                <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
                    <h2
                        class="text-2xl font-bold leading-10 tracking-tight text-slate-900 dark:text-white"
                    >
                        Frequently asked questions
                    </h2>
                    <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
                        <Disclosure
                            as="div"
                            v-for="faq in faqs"
                            :key="faq.question"
                            class="pt-6"
                            v-slot="{ open }"
                        >
                            <dt>
                                <DisclosureButton
                                    class="flex w-full items-start justify-between text-left text-slate-500 dark:text-slate-400"
                                >
                                    <span
                                        class="text-base font-semibold leading-7"
                                        >{{ faq.question }}</span
                                    >
                                    <span class="ml-6 flex h-7 items-center">
                                        <PlusSmallIcon
                                            v-if="!open"
                                            class="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                        <MinusSmallIcon
                                            v-else
                                            class="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </span>
                                </DisclosureButton>
                            </dt>
                            <DisclosurePanel as="dd" class="mt-2 pr-12">
                                <p class="text-base leading-7 text-gray-600">
                                    {{ faq.answer }}
                                </p>
                            </DisclosurePanel>
                        </Disclosure>
                    </dl>
                </div>
            </div>

            <FooterComponent></FooterComponent>
        </div>
    </AppLayout>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/vue/24/outline";
import AppLayout from "@/Layouts/AppLayout.vue";
import FooterComponent from "@/Components/FooterComponent.vue";

const faqs = [
    {
        question: "What's the best thing about Switzerland?",
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
];
</script>
