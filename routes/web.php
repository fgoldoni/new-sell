<?php

use App\Http\Middleware\EnsureTeamMiddleware;
use Artesaos\SEOTools\Facades\SEOMeta;
use Artesaos\SEOTools\Facades\SEOTools;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


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
Route::get('tickets', [\App\Http\Controllers\TicketsController::class, 'index'])->name('tickets.index');
Route::get('faqs', [\App\Http\Controllers\FaqsController::class, 'index'])->name('faqs.index');
Route::get('contacts', [\App\Http\Controllers\ContactsController::class, 'index'])->name('contacts.index');
Route::get('orders', [\App\Http\Controllers\OrdersController::class, 'index'])->name('orders.index');
Route::get('orders/cancel', [\App\Http\Controllers\OrdersController::class, 'cancel'])->name('orders.cancel');
Route::get('orders/transfer', [\App\Http\Controllers\OrdersController::class, 'transfer'])->name('orders.transfer');
Route::get('orders/{id}', [\App\Http\Controllers\OrdersController::class, 'show'])->name('orders.show');
Route::get('orders/success/{id}', [\App\Http\Controllers\OrdersController::class, 'success'])->name('orders.success');
Route::get('orders/card/{id}', [\App\Http\Controllers\OrdersController::class, 'card'])->name('orders.card');
Route::get('orders/notch-pay/{id}', [\App\Http\Controllers\OrdersController::class, 'notchPay'])->name('orders.notch-pay');
Route::get('orders/paypal/{id}', [\App\Http\Controllers\OrdersController::class, 'paypal'])->name('orders.paypal');
Route::post('stripe/terminal/connection', [\App\Http\Controllers\StripeTerminalController::class, 'connection'])->name('stripe.terminal.connection');
Route::get('products', [\App\Http\Controllers\ProductsController::class, 'index'])->name('products.index');
Route::get('hash/{hash}', [\App\Http\Controllers\HashController::class, 'index'])->name('hash.index');
Route::get('login', [\App\Http\Controllers\LoginController::class, 'index'])->name('login.index');
Route::get('/terms', [\App\Http\Controllers\PagesController::class, 'terms'])->name('pages.terms');
Route::get('/protection', [\App\Http\Controllers\PagesController::class, 'protection'])->name('pages.protection');
Route::get('/impressum', [\App\Http\Controllers\PagesController::class, 'impressum'])->name('pages.impressum');



