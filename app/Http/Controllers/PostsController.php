<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use TagsCloud\Tagging\Model\Tag;
use Tymon\JWTAuth\Exceptions\JWTException;

class PostsController extends Controller
{
    protected $post;
    /**
     * @var Tag
     */
    private $tag;

    /**
     * PostsController constructor.
     * @param Post $post
     * @param Tag $tag
     */
    public function __construct(Post $post, Tag $tag)
    {
        $this->post = $post;
        $this->tag = $tag;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $items = $this->post->latest()->published()
            ->paginate(10);
        try {
            $user = \JWTAuth::parseToken()->authenticate();
        } catch (JWTException $exception) {
            $user = null;
        }
        $items->getCollection()->map(function ($item) use ($user) {
            if ($user) {
                $item->isLiked = $item->liked($user->id);
            } else {
                $item->isLiked = false;
            }
            $item->view_counter = $item->get_counters()->first();
        });

        $count = $this->post->count();
        $data = compact('items', 'count');

        return response()->json($data);
    }

    /**
     * get personal posts
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function personal(Request $request)
    {
        $items = $this->post->users($request->user()->id)->paginate(10);
        $count = $this->post->count();
        try {
            $user = \JWTAuth::parseToken()->authenticate();
        } catch (JWTException $exception) {
            $user = null;
        }
        $items->getCollection()->map(function ($item) use ($user) {
            if ($user) {
                $item->isLiked = $item->liked($user->id);
            } else {
                $item->isLiked = false;
            }
            $item->view_counter = $item->get_counters()->first();
        });
        $data = compact('items', 'count');

        return response()->json($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $requestData = $request->except('user_id');
        $requestData['user_id'] = $request->user()->id;
        $post = $this->post->create($requestData);
        $taglist = $requestData['tagged'];
        $tags = [];
        if (is_array($taglist)) {
            foreach ($taglist as $tag) {
                if (!empty($tag["tag_slug"])) {
                    $tags[] = $tag['tag_slug'];
                }
            }
        }
        if (!empty($tags)) {
            $post->tag($tags);
        }
        $data = compact('post');

        return response()->json($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        try {
            $user = \JWTAuth::parseToken()->authenticate();
            $user->ip = $request->ip();
        } catch (JWTException $exception) {
            $user = null;
        }
        $post = $this->post->findOrFail($id);
        if ($user) {
            $post->isLiked = $post->liked($user->id);
        } else {
            $post->isLiked = false;
        }
        $post->view_counter = $post->get_counters()->first();
        $post->view($user);
        $data = compact('post');

        return response()->json($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $requestData = $request->except('user_id');
        $requestData['user_id'] = $request->user()->id;
        $post = $this->post->findOrFail($id);
        $post->update($requestData);
        $taglist = $requestData['tagged'];
        $tags = [];
        if (is_array($taglist)) {
            foreach ($taglist as $tag) {
                if (!empty($tag["tag_slug"])) {
                    $tags[] = $tag['tag_slug'];
                }
            }
        }
        if (!empty($tags)) {
            $post->retag($tags);
        } else {
            $post->untag();
        }
        $data = compact('post');

        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            \DB::beginTransaction();
            $post = $this->post->findOrFail($id);
            $post->untag();
            $deleted = $post->delete();

            if ($deleted) {
                \DB::commit();
                return response()->json([], 200);
            } else {
                \DB::rollBack();
                return response()->json([], 500);
            }
        } catch (\Throwable $exception) {
            \DB::rollBack();
            return response()->json(['msg' => $exception->getMessage()], $exception->getCode());
        }
    }

}
