<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request): string|null
    {
        return parent::version($request);
    }


    public function share(Request $request): array
    {
        $team = EnsureTeamMiddleware::team();

        return [
            ...parent::share($request),
            'team' => [
                'id' => $team->id,
                'name' => $team->name,
                'color' => $team->color,
                'avatar' => $team->avatar,
                'phone' => $team->phone,
                'event' => $team->event,
                'industry' => $team->industry,
                'country_id' => $team->country_id,
                'currency' => $team->currency,
                'locale' => app()->getLocale(),
                'paypal' => !is_null($team->paypal) ? base64_decode($team->paypal->paypal_id) : null,
                'stripe' => $team->stripe ? base64_decode($team->stripe->stripe_secret) : null,
                'sofort' => $team->sofort ? base64_decode($team->sofort->stripe_secret) : null,
                'transfer' => !is_null($team->transfer),
            ],
            'cart' =>  [
                'id' => EnsureTeamMiddleware::cartId(),
            ],
            'apiUrl' => config('system.api_url'),
            'notchPayUrl' => config('system.notch_pay_url'),
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
        ];
    }
}
