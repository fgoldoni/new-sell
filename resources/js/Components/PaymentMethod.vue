<template>
    <RadioGroup
        :model-value="selectedMailingLists"
        @update:modelValue="(value) => emit('update:modelValue', value?.id)"
    >
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

<script setup lang="ts">
import { computed } from "vue";
import {
    RadioGroup,
    RadioGroupDescription,
    RadioGroupLabel,
    RadioGroupOption,
} from "@headlessui/vue";
import { CheckCircleIcon } from "@heroicons/vue/20/solid";

interface Props {
    modelValue: string | null;
}

const props = defineProps<Props>();

const emit = defineEmits<{
    "update:modelValue": [value: string];
}>();

const mailingLists = [
    {
        id: "card",
        title: "Credit/Debit/ATM Card",
        images: [
            "/images/payments/visa.png",
            "/images/payments/master.png",
            "/images/payments/ae.png",
        ],
    },
    {
        id: "sofort",
        title: "Sofort",
        images: ["/images/payments/sofort.png"],
    },
    {
        id: "klarna",
        title: "Klarna",
        images: ["/images/payments/klarna.svg"],
    },
    {
        id: "notchPay",
        title: "Orange | MTN",
        images: [
            "/images/payments/cm.orange.png",
            "/images/payments/cm.mtn.png",
        ],
    },
];

const selectedMailingLists = computed(() => {
    if (props.modelValue) {
        const found = mailingLists.find((c) => c.id === props.modelValue);
        return found;
    }
    return null;
});
</script>
