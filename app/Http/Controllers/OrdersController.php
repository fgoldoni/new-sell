<?php

namespace App\Http\Controllers;

use App\Http\Middleware\EnsureTeamMiddleware;
use App\Http\Requests\OrderRequest;
use Artesaos\SEOTools\Facades\SEOMeta;
use Artesaos\SEOTools\Facades\SEOTools;
use Inertia\Inertia;
use Inertia\Response;


class OrdersController extends Controller
{

    public function show(OrderRequest $request, string $id)
    {
        SEOTools::setTitle(
            EnsureTeamMiddleware::team()?->name.' - '.EnsureTeamMiddleware::team()?->event?->artist,
            false
        );
        SEOTools::setDescription(EnsureTeamMiddleware::team()?->event?->name);
        SEOTools::opengraph()->setUrl(route('home'));
        SEOMeta::addKeyword(EnsureTeamMiddleware::team()?->event?->tags);
        SEOTools::setCanonical(route('home'));
        SEOTools::opengraph()->addProperty('type', 'website');
        SEOTools::opengraph()->addProperty('locale', app()->getLocale());
        SEOTools::opengraph()->addImage(EnsureTeamMiddleware::team()->event->avatar, ['height' => 300, 'width' => 300]);
        SEOTools::jsonLd()->addImage(EnsureTeamMiddleware::team()->avatar);

        EnsureTeamMiddleware::regenerateCartId();

        Inertia::modal([
            'module' => 'Orders',
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

    public function success(OrderRequest $request, string $id): Response
    {
        SEOTools::setTitle(
            EnsureTeamMiddleware::team()?->name.' - '.EnsureTeamMiddleware::team()?->event?->artist,
            false
        );
        SEOTools::setDescription(EnsureTeamMiddleware::team()?->event?->name);
        SEOTools::opengraph()->setUrl(route('home'));
        SEOMeta::addKeyword(EnsureTeamMiddleware::team()?->event?->tags);
        SEOTools::setCanonical(route('home'));
        SEOTools::opengraph()->addProperty('type', 'website');
        SEOTools::opengraph()->addProperty('locale', app()->getLocale());
        SEOTools::opengraph()->addImage(EnsureTeamMiddleware::team()->event->avatar, ['height' => 300, 'width' => 300]);
        SEOTools::jsonLd()->addImage(EnsureTeamMiddleware::team()->avatar);

        EnsureTeamMiddleware::regenerateCartId();

        Inertia::modal([
            'module' => 'Orders',
            'component' => 'Success',
        ]);

        Inertia::basePageRoute(
            route(
                'home',
                $request->all()
            )
        );

        return Inertia::render('Welcome', ['id' => $id]);
    }

    public function card(OrderRequest $request, string $id): Response
    {
        Inertia::modal([
            'module' => 'Orders',
            'component' => 'Card',
        ]);

        Inertia::basePageRoute(
            route(
                'home',
                $request->all()
            )
        );

        return Inertia::render('Welcome', ['id' => $id]);
    }

    public function notchPay(OrderRequest $request, string $id): Response
    {
        Inertia::modal([
            'module' => 'Orders',
            'component' => 'NotchPay',
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
