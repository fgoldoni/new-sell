<?php

namespace App\Http\Controllers;

use App\Http\Middleware\EnsureTeamMiddleware;
use Exception;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use JustSteveKing\StatusCode\Http;
use Stripe\Stripe;

class StripeTerminalController extends Controller
{
    public function __construct(
        private readonly ResponseFactory $response,
    ) {

    }

    public function connection(Request $request): JsonResponse
    {
        try {
            $team = EnsureTeamMiddleware::team();

            if (!isset($team->terminal->terminal_secret)) {
                throw new Exception('Terminal not found');
            }

            Stripe::setApiKey(base64_decode($team->terminal->terminal_secret));

            $connectionToken = \Stripe\Terminal\ConnectionToken::create();

        } catch (\Exception $e) {
            return $this->response->json(
                [
                    'data' => $e->getMessage(),
                    'message' => $e->getMessage(),
                ],
                Http::INTERNAL_SERVER_ERROR->value,
                [],
                JSON_PRESERVE_ZERO_FRACTION
            );
        }

        return $this->response->json(
            ['data' => $connectionToken],
            Http::OK->value,
            [],
            JSON_NUMERIC_CHECK
        );
    }
}
