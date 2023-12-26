<template>
    <div
        class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-slate-900 opacity-90 flex flex-col items-center justify-center"
    >
        <div
            class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"
        ></div>
        <h2 class="text-center text-white text-xl font-semibold animate-pulse">
            {{ __("labels.loading") }}
        </h2>
        <p class="w-full text-center text-white">
            {{ __("labels.loading.message") }}
        </p>
    </div>
</template>
