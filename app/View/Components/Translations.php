<?php

namespace App\View\Components;

use Illuminate\Support\Arr;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\File;
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

        $translations = Cache::rememberForever("translations_$locale", function () use ($locale) {
            $phpTranslations = [];
            $jsonTranslations = [];

            if (File::exists(lang_path("$locale"))) {
                $phpTranslations = collect(File::allFiles(lang_path("$locale")))
                    ->filter(fn ($file) => $file->getExtension() === 'php')->flatMap(fn ($file) => Arr::dot(File::getRequire($file->getRealPath())))->toArray();
            }

            if (File::exists(lang_path("$locale.json"))) {
                $jsonTranslations = json_decode(File::get(lang_path("$locale.json")), true, 512, JSON_THROW_ON_ERROR);
            }

            return array_merge($phpTranslations, $jsonTranslations);
        });

        return view('components.translations', [
            'translations' => $translations,
        ]);
    }
}
