<script setup lang="ts">
import { reactive, ref } from "vue";
import { Errors } from "@/plugins/errors";
import InputError from "@/Components/InputError.vue";
import ApiError from "@/models/ApiError";
import { useAuthStore } from "@/stores/useAuthStore";
import { storeToRefs } from "pinia";
import { CheckCircleIcon } from "@heroicons/vue/20/solid";

const authStore = useAuthStore();
const { isAuthenticated } = storeToRefs(authStore);

const processing = ref(false);
const message = ref(false);

const form = reactive({
    email: "",
    terms: false,
    errors: new Errors(),
    processing: false,
    payment: null,
    to: route("home"),
});

const submit = async () => {
    try {
        processing.value = true;
        await authStore
            .login(form.email, form.to, form.terms)
            .then(async (response: any) => {
                message.value = true;
            })
            .catch((error: any) => {
                form.errors.onFailed(error);
                throw new ApiError(error);
            })
            .finally(() => {
                processing.value = false;
            });
    } catch (error) {
        throw new ApiError(error);
    }
};
</script>
<template>
    <!-- Section 1 -->
    <section class="relative w-full">
        <div class="relative px-8 mx-auto max-w-7xl">
            <div
                class="absolute inset-0 flex justify-end w-full h-full bg-slate-100 opacity-10"
            >
                <div
                    class="absolute inset-0 w-full h-full bg-repeat opacity-40"
                    style="
                        background-image: url(&quot;https://cdn.devdojo.com/images/august2021/circuit.png&quot;);
                    "
                ></div>
                <div
                    class="absolute w-full h-full bg-gradient-to-r from-white to-transparent"
                ></div>
            </div>
            <div class="relative flex flex-wrap items-center">
                <div class="relative w-full px-4 mb-12 lg:w-5/12 lg:mb-0">
                    <div class="relative py-20 text-center md:py-32 xl:py-40">
                        <a
                            class="flex justify-center w-full mb-6 text-3xl font-bold lg:justify-start font-heading"
                            href="#"
                        >
                            <svg
                                class="h-10"
                                viewBox="0 0 50 39"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16.5 2h21.08L22.083 24.973H1L16.5 2z"
                                    class="ccompli1"
                                    fill="#007AFF"
                                ></path>
                                <path
                                    d="M17.422 27.102L11.42 36h22.082L49 13.027H32.702l-9.496 14.075h-5.784z"
                                    class="ccustom"
                                    fill="#312ECB"
                                ></path>
                            </svg>
                        </a>
                        <div class="flex flex-col mb-6 lg:items-start">
                            <span
                                :class="`font-medium text-${$page.props.team.color}-500`"
                                >{{ __("Login") }}</span
                            >
                            <h3 class="text-sm font-bold text-left">
                                {{
                                    __(
                                        "After your registration you will receive a link which you must confirm. No password is required.",
                                    )
                                }}
                            </h3>
                        </div>
                        <form
                            @submit.prevent="submit"
                            @keydown="(value) => form.errors.clear(value)"
                        >
                            <div
                                v-if="message"
                                class="border-l-4 border-green-400 bg-green-50 p-4"
                            >
                                <div class="flex">
                                    <div class="flex-shrink-0">
                                        <CheckCircleIcon
                                            class="h-5 w-5 text-green-400"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <div class="ml-3">
                                        <p class="text-sm text-green-700">
                                            {{
                                                __(
                                                    "You have received a connection link at the following email address",
                                                )
                                            }}:
                                            {{ " " }}
                                            <a
                                                href="javascript:;"
                                                class="font-medium text-green-700 underline hover:text-green-600"
                                                >{{ form.email }}</a
                                            >
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="relative z-0 w-full mb-5 mt-8 group text-left"
                            >
                                <input
                                    type="email"
                                    name="email"
                                    v-model="form.email"
                                    id="email"
                                    :class="`block py-2.5 px-0 w-full text-sm text-slate-900 bg-transparent border-0 border-b-2 border-slate-300 appearance-none dark:text-white dark:border-slate-600 dark:focus:border-${$page.props.team.color}-500 focus:outline-none focus:ring-0 focus:border-${$page.props.team.color}-600 peer`"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    for="email"
                                    :class="`peer-focus:font-medium absolute text-sm text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-${$page.props.team.color}-600 peer-focus:dark:text-${$page.props.team.color}-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`"
                                >
                                    {{ __("Email") }}
                                </label>
                                <InputError
                                    :message="form.errors.get('email')"
                                />
                            </div>
                            <label class="flex items-center mt-16" for="terms">
                                <input
                                    :class="`mr-2 text-${$page.props.team.color}-600 bg-slate-100 border-slate-300 focus:ring-${$page.props.team.color}-500 dark:focus:ring-${$page.props.team.color}-600 dark:ring-offset-slate-800 focus:ring-2 dark:bg-slate-700 dark:border-slate-600`"
                                    type="checkbox"
                                    v-model="form.terms"
                                    id="terms"
                                    name="terms"
                                />
                                <span class="text-xs text-slate-500 text-left">
                                    {{
                                        __(
                                            "By signing up, you agree to our Terms of Service",
                                        )
                                    }}
                                </span>
                            </label>
                            <InputError
                                :message="form.errors.get('terms')"
                                class="text-left"
                            />
                            <button
                                :class="`w-full px-8 py-3 mt-8 font-bold text-white uppercase bg-${$page.props.team.color}-700 rounded-md md:mt-5 hover:bg-${$page.props.team.color}-600 font-heading`"
                            >
                                <svg
                                    v-if="processing"
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
                                <span v-else>{{ __("Login") }}</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="top-0 bottom-0 right-0 hidden bg-cover lg:block lg:absolute lg:w-3/6"
            :style="`background-image: url(&quot;${$page.props.team.event.avatar}&quot;); `"
        ></div>
    </section>
</template>
