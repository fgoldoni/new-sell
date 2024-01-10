<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-full">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet"/>
    <link rel="icon" href="{{ asset('images/favicon.png') }}" type="image/png">

    {!! SEO::generate(true) !!}

    @if(str_contains(request()->getHost(), 'sell-first.com'))
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DJL7N46CXH"></script>
        <script>
            window.dataLayer = window.dataLayer || [];

            function gtag() {
                dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-DJL7N46CXH');
        </script>
    @endif


    @if(str_contains(request()->getHost(), 'sell-service.de'))
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6E1YE5KDX8"></script>
        <script>
            window.dataLayer = window.dataLayer || [];

            function gtag() {
                dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-6E1YE5KDX8');
        </script>
    @endif


    <!-- Scripts -->
    @routes
    @vite(['resources/js/app.ts', "resources/js/Pages/{$page['component']}.vue"])
    @inertiaHead
</head>
<body class="font-sans antialiased h-full">
@inertia

<x-translations></x-translations>
</body>
</html>
