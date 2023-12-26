<?php

namespace App\Http\Controllers;

use App\Http\Middleware\EnsureTeamMiddleware;
use Artesaos\SEOTools\Facades\SEOMeta;
use Artesaos\SEOTools\Facades\SEOTools;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function hash(string $hash): \Inertia\Response
    {
        SEOTools::setTitle(EnsureTeamMiddleware::team()?->name . ' - ' . EnsureTeamMiddleware::team()?->event?->artist, false);
        SEOTools::setDescription(EnsureTeamMiddleware::team()?->event?->name);
        SEOTools::opengraph()->setUrl(route('home'));
        SEOMeta::addKeyword(EnsureTeamMiddleware::team()?->event?->tags);
        SEOTools::setCanonical(route('home'));
        SEOTools::opengraph()->addProperty('type', 'website');
        SEOTools::opengraph()->addProperty('locale', app()->getLocale());
        SEOTools::opengraph()->addImage(EnsureTeamMiddleware::team()->event->avatar, ['height' => 300, 'width' => 300]);
        SEOTools::jsonLd()->addImage(EnsureTeamMiddleware::team()->avatar);


        return Inertia::render('Login/Hash', [
            'hash' => $hash
        ]);
    }
}
