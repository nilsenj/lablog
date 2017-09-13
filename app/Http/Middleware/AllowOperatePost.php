<?php

namespace App\Http\Middleware;

use App\Post;
use Closure;

class AllowOperatePost
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
        $post = Post::findOrFail($request->id);
        if($request->user()->id == $post->user_id) {
            return $next($request);
        } else {
            return response()->json(
                ['msg' => 'You are not allowed to perform this action!'],
                403);
        }
    }
}
