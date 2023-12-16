<template>
    <RadioGroup
        :model-value="selectedValue"
        @update:modelValue="(value) => emit('update:modelValue', value?.id)"
    >
        <div class="mt-4 grid grid-cols-2 gap-4">
            <RadioGroupOption
                as="template"
                v-for="paiement in paiements"
                :key="paiement.id"
                :value="paiement"
                v-slot="{ active, checked }"
            >
                <div
                    :class="[
                        active
                            ? `border-${$page.props.team.color}-600 ring-1 ring-${$page.props.team.color}-600`
                            : 'border-slate-200 dark:border-slate-600',
                        'btn-title relative flex cursor-pointer rounded-lg border bg-white dark:bg-slate-900 p-4 shadow-sm focus:outline-none',
                    ]"
                >
                    <span class="flex flex-1">
                        <span class="flex flex-col">
                            <RadioGroupLabel
                                as="span"
                                class="block text-md font-medium text-slate-500 dark:text-slate-400"
                                >{{ paiement.title }}</RadioGroupLabel
                            >
                            <RadioGroupDescription
                                as="div"
                                class="mt-6 flex space-x-2 items-center"
                            >
                                <img
                                    v-for="image in paiement.images"
                                    :key="image"
                                    :src="image"
                                    :alt="paiement.title"
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
    paiements: Array<any> | [];
}

const props = defineProps<Props>();

const emit = defineEmits<{
    "update:modelValue": [value: string];
}>();

const selectedValue = computed(() => {
    if (props.modelValue) {
        return props.paiements.find((c) => c.id === props.modelValue);
    }
    return null;
});
</script>
