<script setup lang="ts">
import { Ticket } from "@/models/Ticket";
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";
import { upperCase } from "lodash";

interface Props {
    item: Ticket;
    index: number;
    processing: string | null;
}

const props = defineProps<Props>();

const emit = defineEmits<{
    open: [value: string];
}>();
const itemRef = ref<HTMLElement>();

useMotion(itemRef, {
    initial: {
        opacity: 0,
        y: 100,
    },
    visibleOnce: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 500 * props.index,
            duration: 1000,
        },
    },
});
</script>

<template>
    <div
        @click="emit('open', item)"
        ref="itemRef"
        :class="[
            item.quantity
                ? 'border-' + $page.props.team.color + '-500'
                : 'border-rose-500',
            'relative flex flex-col items-start justify-end h-full overflow-hidden rounded-xl group border-2 shadow-2xl',
        ]"
    >
        <div
            :class="`btn-base cursor-pointer absolute top-0 left-0 z-10 flex px-3 py-2 ml-8 mt-6 text-md sm:text-2xl font-extrabold tracking-wide uppercase bg-white  hover:bg-${$page.props.team.color}-100 rounded text-slate-900`"
        >
            {{ $page.props.team.currency.code }} {{ item.price }}
        </div>
        <button
            class="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110"
            :style="`background-image: url(${item.avatar_url})`"
        ></button>
        <div
            :class="`relative z-20 w-full h-auto py-8 text-white bg-slate-900 opacity-90 dark:text-white border-t-0 border-yellow-200 px-7`"
        >
            <button
                :class="[
                    item.quantity
                        ? 'btn-base bg-' + $page.props.team.color + '-900'
                        : 'bg-rose-600 hover:bg-rose-500',
                    'inline-block text-md font-extrabold shadow-xl absolute top-0 -mt-5 rounded px-4 py-2 uppercase text-white',
                ]"
            >
                <svg
                    v-if="processing === item.id"
                    class="animate-spin h-5 w-5 inline-flex text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                    ></circle>
                    <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                </svg>
                <span v-else-if="item.quantity">
                    {{ item.name }}
                </span>
                <span v-else> {{ __("labels.action.sold") }}</span>
            </button>
            <div class="flex items-center justify-between">
                <div class="text-lg sm:text-xl">
                    <dl>
                        <dt class="font-extrabold text-center">
                            {{ item.attendees }}
                        </dt>
                        <dd>{{ __("labels.package.places") }}</dd>
                    </dl>
                </div>
                <div class="text-lg sm:text-xl">
                    <dl>
                        <dt class="font-extrabold text-center">
                            {{ $page.props.team.currency.code }}
                            {{ item.price }}
                        </dt>
                        <dd class="text-center">
                            {{ __("labels.package.total") }}
                        </dd>
                    </dl>
                </div>
                <div class="text-lg sm:text-xl">
                    <dl>
                        <dt
                            class="font-extrabold text-center"
                            v-if="item.attendees > 0"
                        >
                            {{ $page.props.team.currency.code }}
                            {{ item.pp }}
                        </dt>
                        <dd>{{ __("labels.package.per_place") }}</dd>
                    </dl>
                </div>
            </div>
        </div>
        <div
            :class="`relative z-20 w-full h-auto py-8 text-white bg-slate-50  dark:bg-slate-900 border-t-0 border-yellow-200 px-7`"
        >
            <div class="grid grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                <div v-for="product in item.products" :key="product.id">
                    <div
                        class="avatar indicator cursor-pointer tooltip"
                        :data-tip="
                            product.quantity + ' * ' + upperCase(product.name)
                        "
                    >
                        <span class="indicator-item badge badge-default">
                            {{ product.quantity }}
                        </span>
                        <div class="w-16 rounded-full btn-title">
                            <img :src="product.avatar" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
