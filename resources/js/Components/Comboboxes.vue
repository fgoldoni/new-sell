<script setup lang="ts">
import { computed, ref } from "vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";
import {
    Combobox,
    ComboboxButton,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
} from "@headlessui/vue";
import { Country } from "@/types";

interface Props {
    options: Country[];
    modelValue?: number;
}

const props = defineProps<Props>();
const emit = defineEmits<{
    "update:modelValue": [value: number];
}>();

const query = ref("");
const filteredOptions = computed(() =>
    query.value === ""
        ? props.options
        : props.options.filter((item) => {
              return item.name
                  .toLowerCase()
                  .includes(query.value.toLowerCase());
          }),
);

const selectedValue = computed(() => {
    if (props.modelValue) {
        const found = props.options.find((c) => c.id === props.modelValue);
        return found;
    }
    return null;
});
</script>

<template>
    <Combobox
        as="div"
        :model-value="selectedValue"
        @update:modelValue="(value) => emit('update:modelValue', value?.id)"
    >
        <div class="relative mt-2">
            <ComboboxInput
                :placeholder="__('Country')"
                :class="`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-${$page.props.team.color}-500 focus:outline-none focus:ring-0 focus:border-${$page.props.team.color}-600 peer`"
                @change="query = $event.target.value"
                :display-value="(item) => item?.name"
            />
            <ComboboxButton
                class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"
            >
                <ChevronUpDownIcon
                    class="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                />
            </ComboboxButton>

            <ComboboxOptions
                v-if="filteredOptions.length > 0"
                class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
                <ComboboxOption
                    v-for="item in filteredOptions"
                    :key="item.id"
                    :value="item"
                    as="template"
                    v-slot="{ active, selected }"
                >
                    <li
                        :class="[
                            'relative cursor-default select-none py-2 pl-3 pr-9',
                            active
                                ? 'bg-indigo-600 text-white'
                                : 'text-gray-900',
                        ]"
                    >
                        <div class="flex items-center">
                            <span
                                v-html="item.emoji"
                                class="h-6 w-6 flex-shrink-0 rounded-full"
                            />
                            <span
                                :class="[
                                    'ml-3 truncate',
                                    selected && 'font-semibold',
                                ]"
                            >
                                {{ item.name }}
                            </span>
                        </div>

                        <span
                            v-if="selected"
                            :class="[
                                'absolute inset-y-0 right-0 flex items-center pr-4',
                                active ? 'text-white' : 'text-indigo-600',
                            ]"
                        >
                            <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span>
                    </li>
                </ComboboxOption>
            </ComboboxOptions>
        </div>
    </Combobox>
</template>
