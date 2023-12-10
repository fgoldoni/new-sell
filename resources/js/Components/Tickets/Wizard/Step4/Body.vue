<template>
    <div
        class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8 w-full p-4 sm:p-0"
    >
        <div class="col-span-3">
            <div
                class="flex h-full flex-col bg-slate-50 dark:bg-slate-800 shadow-xl"
            >
                <div class="border-b border-slate-200 dark:border-slate-600">
                    <div class="p-6">
                        <div class="flex items-start justify-between">
                            <h2
                                class="text-xl font-semibold leading-6 text-slate-500 dark:text-white"
                            >
                                Was wollt ihr trinken?
                            </h2>
                        </div>
                    </div>
                </div>

                <RegisterForm
                    :model-value="modelValue"
                    @update:model-value="
                        (key, value) => emit('update:modelValue', key, value)
                    "
                ></RegisterForm>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import RegisterForm from "@/Components/RegisterForm.vue";

interface Props {
    modelValue: any;
}

defineProps<Props>();

const emit = defineEmits<{
    "update:modelValue": [key: any, value: any];
}>();
</script>
