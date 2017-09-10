<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    protected $post;

    /**
     * PostsController constructor.
     */
    public function __construct(Post $post)
    {
        $this->post = $post;
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
        $data = compact('post');

        return response()->json($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $post = $this->post->findOrFail($id);
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
