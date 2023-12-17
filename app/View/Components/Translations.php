<?php

namespace App\View\Components;

use Illuminate\Support\Arr;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Http;
use Illuminate\View\Component;

class Translations extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): \Illuminate\Contracts\View\View|\Closure|string
    {
        $locale = App::getLocale();

        Cache::flush();

        $db = Http::acceptJson()->withHeaders(
            [
                'x-locale-id' => 'en'
            ]
        )->get(config('system.api_url') . "/api/languages")->json();



        $translations = Cache::rememberForever("translations_$locale", function () use ($locale, $db) {
            $phpTranslations = [];
            $jsonTranslations = [];
            $dbTranslations = [];

            if (File::exists(lang_path("$locale"))) {
                $phpTranslations = collect(File::allFiles(lang_path("$locale")))
                    ->filter(fn ($file) => $file->getExtension() === 'php')->flatMap(fn ($file) => Arr::dot(File::getRequire($file->getRealPath())))->toArray();
            }

            if (File::exists(lang_path("$locale.json"))) {
                $jsonTranslations = json_decode(File::get(lang_path("$locale.json")), true, 512, JSON_THROW_ON_ERROR);
            }

            if ($db['data']) {
                $dbTranslations = collect($db['data'])->flatMap(fn ($line) => Arr::dot($line))->toArray();
            }

            return array_merge($phpTranslations, $jsonTranslations, $dbTranslations);
        });

        return view('components.translations', [
            'translations' => $translations,
        ]);
    }
}
