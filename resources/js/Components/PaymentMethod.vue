<template>
    <RadioGroup v-model="selectedMailingLists">
        <RadioGroupLabel class="text-xl font-semibold leading-6 text-slate-500"
            >Wie möchtest du zahlen?
        </RadioGroupLabel>

        <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
            <RadioGroupOption
                as="template"
                v-for="mailingList in mailingLists"
                :key="mailingList.id"
                :value="mailingList"
                v-slot="{ active, checked }"
            >
                <div
                    :class="[
                        active
                            ? `border-${$page.props.team.color}-600 ring-1 ring-${$page.props.team.color}-600`
                            : 'border-slate-200 dark:border-slate-600',
                        'relative flex cursor-pointer rounded-lg border bg-white dark:bg-slate-900 p-4 shadow-sm focus:outline-none',
                    ]"
                >
                    <span class="flex flex-1">
                        <span class="flex flex-col">
                            <RadioGroupLabel
                                as="span"
                                class="block text-md font-medium text-slate-500 dark:text-slate-400"
                                >{{ mailingList.title }}</RadioGroupLabel
                            >
                            <RadioGroupDescription
                                as="div"
                                class="mt-6 flex space-x-2 items-center"
                            >
                                <img
                                    v-for="image in mailingList.images"
                                    :key="image"
                                    :src="image"
                                    :alt="mailingList.title"
                                    :class="[
                                        `h-8 w-auto text-${$page.props.team.color}-600`,
                                    ]"
                                />
                            </RadioGroupDescription>
                        </span>
                    </span>
                    <CheckCircleIcon
                        :class="[
                            !checked ? 'invisible' : '',
                            `h-5 w-5 text-${$page.props.team.color}-600`,
                        ]"
                        aria-hidden="true"
                    />
                    <span
                        :class="[
                            active ? 'border' : 'border',
                            checked
                                ? `border-${$page.props.team.color}-600`
                                : 'border-transparent',
                            'pointer-events-none absolute -inset-px rounded-lg',
                        ]"
                        aria-hidden="true"
                    />
                </div>
            </RadioGroupOption>
        </div>
    </RadioGroup>
</template>

<script setup>
import { ref } from "vue";
import {
    RadioGroup,
    RadioGroupDescription,
    RadioGroupLabel,
    RadioGroupOption,
} from "@headlessui/vue";
import { CheckCircleIcon } from "@heroicons/vue/20/solid";

const mailingLists = [
    {
        id: 1,
        title: "Paypal",
        images: ["/images/payments/paypal.png"],
    },
    {
        id: 2,
        title: "Sofort",
        images: ["/images/payments/sofort.png"],
    },
    {
        id: 3,
        title: "Credit/Debit/ATM Card",
        images: [
            "/images/payments/visa.png",
            "/images/payments/master.png",
            "/images/payments/ae.png",
        ],
    },
    {
        id: 4,
        title: "Klarna",
        images: ["/images/payments/klarna.svg"],
    },
];

const selectedMailingLists = ref(mailingLists[0]);
</script>
