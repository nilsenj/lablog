<?php

namespace App\Http\Middleware;

use Closure;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ((\App::environment('local', 'staging') && ($_SERVER['HTTP_ORIGIN'] == "http://localhost:4200"))
        || $_SERVER['HTTP_ORIGIN'] == env('CLIENT_URL')) {
            // cors not working from middleware
            $request->header('Access-Control-Allow-Origin:  *');
            $request->header('Access-Control-Allow-Methods:  POST, GET, OPTIONS, PATCH, PUT, DELETE');
            $request->header('Access-Control-Allow-Headers:  Content-Type, X-Auth_old-Token, X-CSRF-Token, Origin, Authorization');
        }

        return $next($request);
    }
}
