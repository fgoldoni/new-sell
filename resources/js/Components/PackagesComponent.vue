<template>
    <!-- Section 1 -->
    <section class="box-border py-8 leading-7 bg-slate-100 dark:bg-slate-700 border-0 border-slate-200 border-solid sm:py-12 md:py-16 lg:py-24">
        <div  class="box-border max-w-6xl px-4 pb-12 mx-auto border-solid sm:px-6 md:px-6 lg:px-4">
            <div class="flex flex-col items-center leading-7 text-center text-slate-900">
                <h2 v-motion-fade class="box-border m-0 text-2xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white border-solid sm:text-3xl md:text-4xl">
                    {{ $page.props.team.name }} - Pass
                </h2>
            </div>
            <div class="grid max-w-md mx-auto gap-8 mt-6 overflow-hidden leading-7 text-slate-900 md:max-w-lg lg:max-w-none sm:mt-10 lg:grid-cols-2">
                <div :ref="setItemRef" class="relative flex flex-col items-start justify-end h-full overflow-hidden rounded-xl group">
                    <div :class="`btn-base absolute top-0 left-0 z-10 flex px-3 py-2 ml-8 mt-6 opacity-80 text-md sm:text-xl font-extrabold tracking-wide uppercase bg-${$page.props.team.color}-900 rounded text-white`">
                        {{ $page.props.team.currency.code }} 1000
                    </div>
                    <a href="#_" class="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110" style="background-image:url('https://cdn.devdojo.com/images/december2020/enterprise.jpeg')">
                    </a>
                    <div :class="`relative z-20 w-full h-auto py-8 text-white bg-${$page.props.team.color}-700 border-t-0 border-yellow-200 px-7`">
                        <a href="#_" class="inline-block text-md font-extrabold absolute top-0 -mt-5 rounded px-4 py-2 uppercase text-white opacity-80 bg-slate-900">8 Personen Vip Lounge Empore</a>
                        <div class="flex items-center justify-between">
                            <div class="">
                                <dl>
                                    <dt class="font-extrabold text-center">10</dt>
                                    <dd>Personen</dd>
                                </dl>
                            </div>
                            <div class="">
                                <dl>
                                    <dt class="font-extrabold text-center">{{ $page.props.team.currency.code }} 1000</dt>
                                    <dd>Mindestverzehr</dd>
                                </dl>
                            </div>
                            <div class="">
                                <dl>
                                    <dt class="font-extrabold text-center">{{ $page.props.team.currency.code }} 100</dt>
                                    <dd>pro Person</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div :class="`relative z-20 w-full h-auto py-8 text-white bg-${$page.props.team.color}-700 border-t-0 border-yellow-200 px-7`">
                        <a href="#_" class="inline-block text-md font-extrabold absolute top-0 -mt-5 rounded px-4 py-2 uppercase text-white opacity-80 bg-slate-900">8 Items</a>
                        <div class="grid grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                            <div class="tooltip" data-tip="hello">
                                <div class="avatar indicator">
                                    <span class="indicator-item badge badge-secondary">2</span>
                                    <div class="w-16 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>

                            <div class="tooltip" data-tip="hello">
                                <div class="avatar indicator">
                                    <span class="indicator-item badge badge-secondary">2</span>
                                    <div class="w-16 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>

                            <div class="tooltip" data-tip="hello">
                                <div class="avatar indicator">
                                    <span class="indicator-item badge badge-secondary">2</span>
                                    <div class="w-16 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>

                            <div class="tooltip" data-tip="hello">
                                <div class="avatar indicator">
                                    <span class="indicator-item badge badge-secondary">2</span>
                                    <div class="w-16 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>

                            <div class="tooltip" data-tip="hello">
                                <div class="avatar indicator">
                                    <span class="indicator-item badge badge-secondary">2</span>
                                    <div class="w-16 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>

                            <div class="tooltip" data-tip="hello">
                                <div class="avatar indicator">
                                    <span class="indicator-item badge badge-secondary">2</span>
                                    <div class="w-16 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>

                            <div class="tooltip" data-tip="hello">
                                <div class="avatar indicator">
                                    <span class="indicator-item badge badge-secondary">2</span>
                                    <div class="w-16 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div :ref="setItemRef" class="relative flex flex-col items-start justify-end h-full overflow-hidden rounded-xl group">
                    <div :class="`btn-base absolute top-0 left-0 z-10 flex px-3 py-2 ml-8 mt-6 opacity-80 text-md sm:text-xl font-extrabold tracking-wide uppercase bg-${$page.props.team.color}-900 rounded text-white`">
                        {{ $page.props.team.currency.code }} 1000
                    </div>
                    <a href="#_" class="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110" style="background-image:url('https://cdn.devdojo.com/images/december2020/enterprise.jpeg')">
                    </a>
                    <div :class="`relative z-20 w-full h-auto py-8 text-white bg-${$page.props.team.color}-700 border-t-0 border-yellow-200 px-7`">
                        <a href="#_" class="inline-block text-md font-extrabold absolute top-0 -mt-5 rounded px-4 py-2 uppercase text-white opacity-80 bg-slate-900">8 Personen Vip Lounge Empore</a>
                        <div class="flex items-center justify-between">
                            <div class="">
                                <dl>
                                    <dt class="font-extrabold text-center">10</dt>
                                    <dd>Personen</dd>
                                </dl>
                            </div>
                            <div class="">
                                <dl>
                                    <dt class="font-extrabold text-center">{{ $page.props.team.currency.code }} 1000</dt>
                                    <dd>Mindestverzehr</dd>
                                </dl>
                            </div>
                            <div class="">
                                <dl>
                                    <dt class="font-extrabold text-center">{{ $page.props.team.currency.code }} 100</dt>
                                    <dd>pro Person</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div :class="`relative z-20 w-full h-auto py-8 text-white bg-${$page.props.team.color}-700 border-t-0 border-yellow-200 px-7`">
                        <a href="#_" class="inline-block text-md font-extrabold absolute top-0 -mt-5 rounded px-4 py-2 uppercase text-white opacity-80 bg-slate-900">8 Items</a>
                        <div class="grid grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                            <div class="tooltip" data-tip="hello">
                                <div class="avatar indicator">
                                    <span class="indicator-item badge badge-secondary">2</span>
                                    <div class="w-16 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>

                            <div class="tooltip" data-tip="hello">
                                <div class="avatar indicator">
                                    <span class="indicator-item badge badge-secondary">2</span>
                                    <div class="w-16 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>

                            <div class="tooltip" data-tip="hello">
                                <div class="avatar indicator">
                                    <span class="indicator-item badge badge-secondary">2</span>
                                    <div class="w-16 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>

                            <div class="tooltip" data-tip="hello">
                                <div class="avatar indicator">
                                    <span class="indicator-item badge badge-secondary">2</span>
                                    <div class="w-16 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>

                            <div class="tooltip" data-tip="hello">
                                <div class="avatar indicator">
                                    <span class="indicator-item badge badge-secondary">2</span>
                                    <div class="w-16 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>

                            <div class="tooltip" data-tip="hello">
                                <div class="avatar indicator">
                                    <span class="indicator-item badge badge-secondary">2</span>
                                    <div class="w-16 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>

                            <div class="tooltip" data-tip="hello">
                                <div class="avatar indicator">
                                    <span class="indicator-item badge badge-secondary">2</span>
                                    <div class="w-16 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div :ref="setItemRef" class="relative flex flex-col items-start justify-end h-full overflow-hidden rounded-xl group">
                    <div :class="`btn-base absolute top-0 left-0 z-10 flex px-3 py-2 ml-8 mt-6 opacity-80 text-md sm:text-xl font-extrabold tracking-wide uppercase bg-${$page.props.team.color}-900 rounded text-white`">
                        {{ $page.props.team.currency.code }} 1000
                    </div>
                    <a href="#_" class="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110" style="background-image:url('https://cdn.devdojo.com/images/december2020/enterprise.jpeg')">
                    </a>
                    <div :class="`relative z-20 w-full h-auto py-8 text-white bg-${$page.props.team.color}-700 border-t-0 border-yellow-200 px-7`">
                        <a href="#_" class="inline-block text-md font-extrabold absolute top-0 -mt-5 rounded px-4 py-2 uppercase text-white opacity-80 bg-slate-900">8 Personen Vip Lounge Empore</a>
                        <div class="flex items-center justify-between">
                            <div class="">
                                <dl>
                                    <dt class="font-extrabold text-center">10</dt>
                                    <dd>Personen</dd>
                                </dl>
                            </div>
                            <div class="">
                                <dl>
                                    <dt class="font-extrabold text-center">{{ $page.props.team.currency.code }} 1000</dt>
                                    <dd>Mindestverzehr</dd>
                                </dl>
                            </div>
                            <div class="">
                                <dl>
                                    <dt class="font-extrabold text-center">{{ $page.props.team.currency.code }} 100</dt>
                                    <dd>pro Person</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div :class="`relative z-20 w-full h-auto py-8 text-white bg-${$page.props.team.color}-700 border-t-0 border-yellow-200 px-7`">
                        <a href="#_" class="inline-block text-md font-extrabold absolute top-0 -mt-5 rounded px-4 py-2 uppercase text-white opacity-80 bg-slate-900">8 Items</a>
                        <div class="grid grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                            <div class="tooltip" data-tip="hello">
                                <div class="avatar indicator">
                                    <span class="indicator-item badge badge-secondary">2</span>
                                    <div class="w-16 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>

                            <div class="tooltip" data-tip="hello">
                                <div class="avatar indicator">
                                    <span class="indicator-item badge badge-secondary">2</span>
                                    <div class="w-16 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>

                            <div class="tooltip" data-tip="hello">
                                <div class="avatar indicator">
                                    <span class="indicator-item badge badge-secondary">2</span>
                                    <div class="w-16 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>

                            <div class="tooltip" data-tip="hello">
                                <div class="avatar indicator">
                                    <span class="indicator-item badge badge-secondary">2</span>
                                    <div class="w-16 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>

                            <div class="tooltip" data-tip="hello">
                                <div class="avatar indicator">
                                    <span class="indicator-item badge badge-secondary">2</span>
                                    <div class="w-16 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>

                            <div class="tooltip" data-tip="hello">
                                <div class="avatar indicator">
                                    <span class="indicator-item badge badge-secondary">2</span>
                                    <div class="w-16 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>

                            <div class="tooltip" data-tip="hello">
                                <div class="avatar indicator">
                                    <span class="indicator-item badge badge-secondary">2</span>
                                    <div class="w-16 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div :ref="setItemRef" class="relative flex flex-col items-start justify-end h-full overflow-hidden rounded-xl group">
                    <div :class="`btn-base absolute top-0 left-0 z-10 flex px-3 py-2 ml-8 mt-6 opacity-80 text-md sm:text-xl font-extrabold tracking-wide uppercase bg-${$page.props.team.color}-900 rounded text-white`">
                        {{ $page.props.team.currency.code }} 1000
                    </div>
                    <a href="#_" class="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110" style="background-image:url('https://cdn.devdojo.com/images/december2020/enterprise.jpeg')">
                    </a>
                    <div :class="`relative z-20 w-full h-auto py-8 text-white bg-${$page.props.team.color}-700 border-t-0 border-yellow-200 px-7`">
                        <a href="#_" class="inline-block text-md font-extrabold absolute top-0 -mt-5 rounded px-4 py-2 uppercase text-white opacity-80 bg-slate-900">8 Personen Vip Lounge Empore</a>
                        <div class="flex items-center justify-between">
                            <div class="">
                                <dl>
                                    <dt class="font-extrabold text-center">10</dt>
                                    <dd>Personen</dd>
                                </dl>
                            </div>
                            <div class="">
                                <dl>
                                    <dt class="font-extrabold text-center">{{ $page.props.team.currency.code }} 1000</dt>
                                    <dd>Mindestverzehr</dd>
                                </dl>
                            </div>
                            <div class="">
                                <dl>
                                    <dt class="font-extrabold text-center">{{ $page.props.team.currency.code }} 100</dt>
                                    <dd>pro Person</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div :class="`relative z-20 w-full h-auto py-8 text-white bg-${$page.props.team.color}-700 border-t-0 border-yellow-200 px-7`">
                        <a href="#_" class="inline-block text-md font-extrabold absolute top-0 -mt-5 rounded px-4 py-2 uppercase text-white opacity-80 bg-slate-900">8 Items</a>
                        <div class="grid grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                            <div class="tooltip" data-tip="hello">
                                <div class="avatar indicator">
                                    <span class="indicator-item badge badge-secondary">2</span>
                                    <div class="w-16 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>

                            <div class="tooltip" data-tip="hello">
                                <div class="avatar indicator">
                                    <span class="indicator-item badge badge-secondary">2</span>
                                    <div class="w-16 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>

                            <div class="tooltip" data-tip="hello">
                                <div class="avatar indicator">
                                    <span class="indicator-item badge badge-secondary">2</span>
                                    <div class="w-16 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>

                            <div class="tooltip" data-tip="hello">
                                <div class="avatar indicator">
                                    <span class="indicator-item badge badge-secondary">2</span>
                                    <div class="w-16 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>

                            <div class="tooltip" data-tip="hello">
                                <div class="avatar indicator">
                                    <span class="indicator-item badge badge-secondary">2</span>
                                    <div class="w-16 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>

                            <div class="tooltip" data-tip="hello">
                                <div class="avatar indicator">
                                    <span class="indicator-item badge badge-secondary">2</span>
                                    <div class="w-16 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>

                            <div class="tooltip" data-tip="hello">
                                <div class="avatar indicator">
                                    <span class="indicator-item badge badge-secondary">2</span>
                                    <div class="w-16 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>



</template>

<script setup lang="ts">
import {useMotion} from "@vueuse/motion";
import {onMounted, ref} from "vue";

const itemRefs = ref<Array<HTMLElement>>([]);
const setItemRef = (el) => itemRefs.value.push(el);

onMounted(() => {
    itemRefs.value.forEach((el, index) => {
        useMotion(el, {
            initial: {
                opacity: 0,
                y: 100,
            },
            visibleOnce: {
                opacity: 1,
                y: 0,
                transition: {
                    delay: 300 * index,
                    duration: 700
                },
            },
        });
    })
})



</script>
