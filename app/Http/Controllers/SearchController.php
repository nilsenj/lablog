<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

/**
 * Class SearchController
 * @package App\Http\Controllers
 */
class SearchController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function search(Request $request)
    {
        if ($request->has('search') && (strlen($request->input('search')) > 1)) {
            $searchBuilder = Post::search($request->input('search'));
            $items = $searchBuilder->get();
            $items->map(function ($item) {
                $item->view_counter = $item->get_counters()->first();
            });
            $data['data'] = $items->toArray();
            $data['count'] = count($data);
        } else {
            $data = null;
        }

        return response()->json($data);
    }
}
