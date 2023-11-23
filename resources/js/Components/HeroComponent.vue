<template>
    <div class="bg-white">
        <div aria-hidden="true" class="relative">
            <img src="https://tailwindui.com/img/ecommerce-images/product-feature-02-full-width.jpg" alt="" class="h-96 w-full object-cover object-center" />
            <div class="absolute inset-0 bg-gradient-to-t from-white" />
        </div>

        <div class="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
            <div class="mx-auto max-w-2xl text-center lg:max-w-4xl">
                <h2 class="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Technical Specifications</h2>
                <p class="mt-4 text-gray-500">Organize is a system to keep your desk tidy and photo-worthy all day long. Procrastinate your work while you meticulously arrange items into dedicated trays.</p>
            </div>
            <HeroFeatureComponent></HeroFeatureComponent>
        </div>
    </div>
</template>

<script setup>
import HeroFeatureComponent from "@/Components/HeroFeatureComponent.vue";

const features = [
    { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
    { name: 'Material', description: 'Solid walnut base with rare earth magnets and polycarbonate add-ons.' },
    { name: 'Dimensions', description: '15" x 3.75" x .75"' },
    { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
    { name: 'Includes', description: 'Pen Tray, Phone Tray, Small Tray, Large Tray, Sticky Note Holder' },
    { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
    { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
    { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
    { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
    { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
    { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
]
</script>
