<?php

namespace App\Http\Controllers;

use App\Http\Middleware\EnsureTeamMiddleware;
use App\Http\Requests\ReservationRequest;
use App\Http\Requests\TicketRequest;
use Artesaos\SEOTools\Facades\SEOMeta;
use Artesaos\SEOTools\Facades\SEOTools;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TicketsController extends Controller
{
    public function index(Request $request)
    {
        SEOTools::setTitle(EnsureTeamMiddleware::team()?->name . ' - ' . EnsureTeamMiddleware::team()?->event?->artist, false);
        SEOTools::setDescription(EnsureTeamMiddleware::team()?->event?->name);
        SEOTools::opengraph()->setUrl(route('home'));
        SEOMeta::addKeyword(EnsureTeamMiddleware::team()?->event?->tags);
        SEOTools::setCanonical(route('home'));
        SEOTools::opengraph()->addProperty('type', 'website');
        SEOTools::opengraph()->addProperty('locale', app()->getLocale());
        SEOTools::opengraph()->addImage(EnsureTeamMiddleware::team()->event->image, ['height' => 300, 'width' => 300]);
        SEOTools::jsonLd()->addImage(EnsureTeamMiddleware::team()->avatar);

        Inertia::modal([
            'module' => 'Tickets',
            'component' => 'Index',
        ]);

        Inertia::basePageRoute(
            route(
                'home',
                $request->all()
            )
        );

        return Inertia::render('Welcome');
    }

    public function show(TicketRequest $request, string $id)
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

        Inertia::modal([
            'module' => 'Tickets',
            'component' => 'Show',
        ]);

        Inertia::basePageRoute(
            route(
                'home',
                $request->all()
            )
        );

        return Inertia::render('Welcome', ['id' => $id]);
    }
}
