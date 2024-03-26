<template>
    <div class="flex items-center justify-center">
        <h2 class="text-xl font-medium leading-6 text-gray-500 py-4">
            {{ __("wizard.step_1.reservation_title") }}
        </h2>
    </div>
    <RadioGroup
        :default-value="modelValue"
        @update:modelValue="
                (value) => $emit('update:modelValue', 'reservation', value)
            "
        class="mt-2"
    >
        <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
            <RadioGroupOption as="template" v-for="mailingList in options" :key="mailingList.name" :value="mailingList.name" :disabled="mailingList.disabled" v-slot="{ active, checked }">
                <div :class="[
                    mailingList.disabled ? 'cursor-not-allowed opacity-25' : 'cursor-pointer focus:outline-none',
                    active
                    ? `border-${team.color}-600 ring-2 ring-${team.color}-600`
                    : 'border-slate-400 dark:border-slate-600',
                     'relative flex cursor-pointer rounded-lg border bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-gray-50 p-4 shadow-sm focus:outline-none'
                     ]">
          <span class="flex flex-1">
            <span class="flex flex-col">
              <RadioGroupLabel as="span" class="block text-sm font-medium uppercase">{{ __(mailingList.label) }}</RadioGroupLabel>
            </span>
          </span>
                    <CheckCircleIcon :class="[!checked ? 'invisible' : '', `h-5 w-5 text-${team.color}-600`]" aria-hidden="true" />
                    <span :class="[active ? 'border' : 'border-2', checked ? `border-${team.color}-600` : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-lg']" aria-hidden="true" />
                </div>
            </RadioGroupOption>
        </div>
    </RadioGroup>
</template>

<script setup lang="ts">
import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { CheckCircleIcon } from '@heroicons/vue/20/solid'

defineProps<{
    modelValue: string;
    team: Object;
    options: string[];
}>();
defineEmits<{
    "update:modelValue": [value: boolean];
}>();
</script>
