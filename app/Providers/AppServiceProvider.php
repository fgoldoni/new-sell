<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Inertia\ResponseFactory;

class AppServiceProvider extends ServiceProvider
{

    public function register(): void
    {
        //
    }


    public function boot(): void
    {
        ResponseFactory::macro('modal', function ($modal) {
            inertia()->share(['modal' => $modal]);
        });

        ResponseFactory::macro('basePageRoute', function ($modal) {
            inertia()->share(['basePageRoute' => $modal]);
        });
    }
}
