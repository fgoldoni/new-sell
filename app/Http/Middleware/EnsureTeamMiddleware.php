<?php
namespace App\Http\Middleware;

use Closure;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use Stevebauman\Location\Facades\Location;

class EnsureTeamMiddleware
{
    private static function cartKey(): string
    {
        return 'cart-' . self::teamId();
    }

    private static function location(Request $request): array
    {
        $location = [];

        if ($position = Location::get($request->ip())) {
            $location = [
                'ip' => $position->ip,
                'countryName' => $position->countryName,
                'countryCode' => $position->countryCode,
                'regionName' => $position->regionName,
                'cityName' => $position->cityName,
                'timezone' => $position->timezone,
                'latitude' => $position->latitude,
                'longitude' => $position->longitude,
            ];
        }

        return $location;
    }

    public function handle(Request $request, Closure $next)
    {
        try {
            Cache::flush();

            if ($subDomain = self::getSubDomain()) {
                $team = Cache::remember(static::getCacheKey($subDomain), now()->addDay() ,function () use ($subDomain, $request) {
                    $location = self::location($request);

                    $response = Http::acceptJson()->withHeaders(
                        [
                            'x-ip' => $request->ip(),
                            'x-location' => json_encode($location)
                        ]
                    )->get(config('system.api_url') . "/api/teams/{$subDomain}");

                    if ($response->ok()) {
                        return $response->object()->data;
                    }

                    return throw new Exception('The company (' . $subDomain . ') must be activated ', \JustSteveKing\StatusCode\Http::INTERNAL_SERVER_ERROR->value);
                });

                if (is_null($team->event)) {
                    return throw new Exception('Event missing or not activated for: ' . $subDomain, \JustSteveKing\StatusCode\Http::INTERNAL_SERVER_ERROR->value);
                }

                session()->put('cart-' . $team->id, static::uniqueCode());

            } else {
                throw new Exception('Invalid subdomain', \JustSteveKing\StatusCode\Http::INTERNAL_SERVER_ERROR->value);
            }


            return $next($request);

        } catch (Exception $e) {
            abort($e->getCode(), $e->getMessage());
        }

    }

    public static function getCacheKey(string $subDomain): string
    {
        return "sell.". Str::slug($subDomain);
    }

    public static function loadEvent($team, $request): void
    {
        try {
            Cache::remember($team->event_id, now()->addDay() , static function () use ($team, $request) {
                $location = self::location($request);

                $response = Http::acceptJson()->withHeaders(
                    [
                        'x-ip' => $request->ip(),
                        'x-location' => json_encode($location),
                        'x-team-id' => $team->id,
                    ]
                )->get(config('system.api_url') . "/api/events/{$team->event_id}");

                if ($response->ok()) {
                    return $response->object()->data;
                }

                throw new Exception('Event missing or not activated for: ' . self::getSubDomain(), \JustSteveKing\StatusCode\Http::INTERNAL_SERVER_ERROR->value);
            });
        } catch (Exception $e) {
            throw new Exception('Event missing or not activated for: ' . self::getSubDomain(), \JustSteveKing\StatusCode\Http::INTERNAL_SERVER_ERROR->value);
        }
    }

    public static function getSubDomain(): ?string
    {
        if (str_contains(url('/'), 'localhost') || str_contains(url('/'), '://sell-first.com')) {
            return "demo";
        }

        preg_match('/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/i', url('/'), $match);

        if (count($match) < 2) {
            return null;
        }

        return urlencode((string)$match[1]) ?? null;
    }

    public static function team()
    {
        return Cache::get(self::getCacheKey(self::getSubDomain()));
    }

    public static function event()
    {
        return Cache::get(self::team()->event_id);
    }

    public static function teamId()
    {
        return self::team()->id;
    }

    private static function uniqueCode(): string
    {
        return Str::upper(substr(base_convert(sha1(uniqid(mt_rand())), 16, 36), 0, 9));
    }

    public static function cartId()
    {
        if (! session()->has(self::cartKey())) {
            session()->put(self::cartKey(), static::uniqueCode());
        }

        return session()->get(self::cartKey(), static::uniqueCode());
    }

    public static function regenerateCartId()
    {
        session()->put(self::cartKey(), static::uniqueCode());

        return session()->get(self::cartKey());
    }
}
