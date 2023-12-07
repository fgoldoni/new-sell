<template>
    <div>
        <div class="flex items-center justify-center">
            <h2 class="text-xl font-medium leading-6 text-gray-500 py-4">
                Und wann plant ihr ca. zu kommen?
            </h2>
        </div>

        <RadioGroup
            :default-value="modelValue"
            @update:modelValue="(value) => $emit('update:modelValue', value)"
            class="mt-2"
        >
            <RadioGroupLabel class="sr-only"
                >Choose a memory option
            </RadioGroupLabel>
            <div class="grid grid-cols-3 gap-3 sm:grid-cols-6">
                <RadioGroupOption
                    as="template"
                    v-for="option in entries"
                    :key="option"
                    :value="option"
                    v-slot="{ active, checked }"
                >
                    <div
                        :class="[
                            active
                                ? 'ring-2 ring-indigo-600 ring-offset-2'
                                : '',
                            checked
                                ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                                : 'ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50',
                            'flex cursor-pointer focus:outline-none items-center justify-center rounded-md py-3 px-3 text-sm font-semibold uppercase sm:flex-1',
                        ]"
                    >
                        <RadioGroupLabel as="span"
                            >{{ option }}
                        </RadioGroupLabel>
                    </div>
                </RadioGroupOption>
            </div>
        </RadioGroup>
    </div>
</template>

<script setup lang="ts">
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";

defineProps<{
    modelValue?: string;
    entries: string[];
}>();
defineEmits<{
    "update:modelValue": [value: boolean];
}>();
</script>
