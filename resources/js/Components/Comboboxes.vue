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

const people = [
    {
        id: 1,
        name: "Leslie Alexander",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    // More users...
];

const query = ref("");
const selectedPerson = ref(null);
const filteredPeople = computed(() =>
    query.value === ""
        ? people
        : people.filter((person) => {
              return person.name
                  .toLowerCase()
                  .includes(query.value.toLowerCase());
          }),
);
</script>

<template>
    <Combobox as="div" v-model="selectedPerson">
        <div class="relative mt-2">
            <ComboboxInput
                :placeholder="__('Country')"
                class="block py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                @change="query = $event.target.value"
                :display-value="(person) => person?.name"
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
                v-if="filteredPeople.length > 0"
                class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
                <ComboboxOption
                    v-for="person in filteredPeople"
                    :key="person.id"
                    :value="person"
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
                            <img
                                :src="person.imageUrl"
                                alt=""
                                class="h-6 w-6 flex-shrink-0 rounded-full"
                            />
                            <span
                                :class="[
                                    'ml-3 truncate',
                                    selected && 'font-semibold',
                                ]"
                            >
                                {{ person.name }}
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
