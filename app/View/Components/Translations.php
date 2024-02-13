<?php

namespace App\View\Components;

use App\Http\Middleware\EnsureTeamMiddleware;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Http;
use Illuminate\View\Component;

class Translations extends Component
{
    public function __construct()
    {
        //
    }


    public function render(): \Illuminate\Contracts\View\View|\Closure|string
    {
        $locale = App::getLocale();

        $translations = Cache::rememberForever("translations_$locale", function () use ($locale) {
            $phpTranslations = [];
            $jsonTranslations = [];
            $dbTranslations = [];

            $db = Http::acceptJson()->withHeaders(
                [
                    'x-team-id' => EnsureTeamMiddleware::teamId(),
                    'x-event-id' => EnsureTeamMiddleware::team()->event?->id,
                    'x-locale-id' => app()->getLocale()
                ]
            )->get(config('system.api_url') . "/api/languages")->json();

            if (File::exists(lang_path("$locale"))) {
                $phpTranslations = collect(File::allFiles(lang_path("$locale")))
                    ->filter(fn ($file) => $file->getExtension() === 'php')->flatMap(fn ($file) => Arr::dot(File::getRequire($file->getRealPath())))->toArray();
            }

            if (File::exists(lang_path("$locale.json"))) {
                $jsonTranslations = json_decode(File::get(lang_path("$locale.json")), true, 512, JSON_THROW_ON_ERROR);
            }

            if ($db['data']) {
                $dbTranslations = $db['data'];
            }

            return array_merge($phpTranslations, $jsonTranslations, $dbTranslations);
        });

        return view('components.translations', [
            'translations' => $translations,
        ]);
    }
}
