<?php

use App\Http\Middleware\EnsureTeamMiddleware;
use Artesaos\SEOTools\Facades\SEOMeta;
use Artesaos\SEOTools\Facades\SEOTools;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    SEOTools::setTitle(EnsureTeamMiddleware::team()?->name . ' - ' . EnsureTeamMiddleware::team()?->event?->artist, false);
    SEOTools::setDescription(EnsureTeamMiddleware::team()?->event?->address);
    SEOTools::opengraph()->setUrl(route('home'));
    SEOMeta::addKeyword(EnsureTeamMiddleware::team()?->event?->tags);
    SEOTools::setCanonical(route('home'));
    SEOTools::opengraph()->addProperty('type', 'website');
    SEOTools::opengraph()->addProperty('locale', app()->getLocale());
    SEOTools::opengraph()->addImage(EnsureTeamMiddleware::team()->event->avatar, ['height' => 300, 'width' => 300]);
    SEOTools::jsonLd()->addImage(EnsureTeamMiddleware::team()->event->avatar);

    return Inertia::render('Welcome', []);
})->name('home');

Route::get('tickets/{id}', [\App\Http\Controllers\TicketsController::class, 'show'])->name('tickets.show');
Route::get('orders/{id}', [\App\Http\Controllers\OrdersController::class, 'show'])->name('orders.show');
Route::get('orders/success/{id}', [\App\Http\Controllers\OrdersController::class, 'success'])->name('orders.success');


