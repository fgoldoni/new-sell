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
                'color' => $team->color,
                'avatar' => $team->avatar_url,
                'event_id' => $team->event_id,
                'industry' => $team->industry,
                'currency' => $team->currency,
                'locale' => app()->getLocale(),
                'paypal' => !is_null($team->paypal),
                'stripe' => !is_null($team->stripe),
                'klarna' => !is_null($team->klarna),
                'notch_pay' => !is_null($team->notchPay),
                'terminal' => !is_null($team->terminal),
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
