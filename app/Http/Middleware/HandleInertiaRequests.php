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
        EnsureTeamMiddleware::regenerateCartId();

        return [
            ...parent::share($request),
            'team' => [
                'id' => $team->id,
                'name' => $team->name,
                'color' => $team->color,
                'avatar' => $team->avatar,
                'phone' => $team->phone,
                'email' => $team->email,
                'event' => $team->event,
                'industry' => $team->industry,
                'country_id' => $team->country_id,
                'currency' => $team->currency,
                'locale' => app()->getLocale(),
                'paypal' => !is_null($team->paypal) ? base64_decode($team->paypal->paypal_id) : null,
                'stripe' => !is_null($team->stripe) ? base64_decode($team->stripe->stripe_secret) : null,
                'sofort' => !is_null($team->sofort) ? base64_decode($team->sofort->sofort_secret) : null,
                'klarna' => !is_null($team->klarna) ? base64_decode($team->klarna->klarna_secret) : null,
                'terminal' => !is_null($team->terminal) ? base64_decode($team->terminal->terminal_secret) : null,
                'notch_pay' => !is_null($team->notchPay) ? base64_decode($team->notchPay->notch_pay_id) : null,
                'transfer' => !is_null($team->transfer),
                'domains' => array_filter($team->domains, fn($d) => $d->locale != app()->getLocale()),
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
