<?php

namespace App\Http\Controllers;

use App\Http\Middleware\EnsureTeamMiddleware;
use Artesaos\SEOTools\Facades\SEOMeta;
use Artesaos\SEOTools\Facades\SEOTools;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PagesController extends Controller
{
    public function terms(Request $request): Response
    {
        SEOTools::setTitle('Protection' . ' - ' . config('app.name'), false);
        SEOTools::setDescription(EnsureTeamMiddleware::team()?->event?->name);
        SEOTools::opengraph()->setUrl(route('home'));
        SEOMeta::addKeyword(EnsureTeamMiddleware::team()?->event?->tags);
        SEOTools::setCanonical(route('home'));
        SEOTools::opengraph()->addProperty('type', 'website');
        SEOTools::opengraph()->addProperty('locale', app()->getLocale());
          SEOTools::opengraph()->addImage(EnsureTeamMiddleware::team()->event->avatar, ['height' => 300, 'width' => 300]);
        SEOTools::jsonLd()->addImage(EnsureTeamMiddleware::team()->avatar);

        return Inertia::render('Pages/Terms');
    }

    public function protection(Request $request): Response
    {
        SEOTools::setTitle('Protection' . ' - ' . config('app.name'), false);
        SEOTools::setDescription(EnsureTeamMiddleware::team()?->event?->name);
        SEOTools::opengraph()->setUrl(route('home'));
        SEOMeta::addKeyword(EnsureTeamMiddleware::team()?->event?->tags);
        SEOTools::setCanonical(route('home'));
        SEOTools::opengraph()->addProperty('type', 'website');
        SEOTools::opengraph()->addProperty('locale', app()->getLocale());
          SEOTools::opengraph()->addImage(EnsureTeamMiddleware::team()->event->avatar, ['height' => 300, 'width' => 300]);
        SEOTools::jsonLd()->addImage(EnsureTeamMiddleware::team()->avatar);

        return Inertia::render('Pages/Protection');
    }

    public function impressum(Request $request): Response
    {
        SEOTools::setTitle('Impressum' . ' - ' . config('app.name'), false);
        SEOTools::setDescription(EnsureTeamMiddleware::team()?->event?->name);
        SEOTools::opengraph()->setUrl(route('home'));
        SEOMeta::addKeyword(EnsureTeamMiddleware::team()?->event?->tags);
        SEOTools::setCanonical(route('home'));
        SEOTools::opengraph()->addProperty('type', 'website');
        SEOTools::opengraph()->addProperty('locale', app()->getLocale());
          SEOTools::opengraph()->addImage(EnsureTeamMiddleware::team()->event->avatar, ['height' => 300, 'width' => 300]);
        SEOTools::jsonLd()->addImage(EnsureTeamMiddleware::team()->avatar);

        return Inertia::render('Pages/Impressum');
    }
}
