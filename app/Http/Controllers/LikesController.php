<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;

/**
 * Class LikesController
 * @package App\Http\Controllers
 */
class LikesController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function likesToggle(Request $request)
    {
        $model = $request->get('model');
        $model_id = $request->get('model_id');
        try {
            $user = \JWTAuth::parseToken()->authenticate();
            $model = app($model)->findOrFail($model_id);
        } catch (JWTException $exception) {
            return response()->json(['msg' => 'User not Logged in'], 422);
        } catch (\Throwable $exception) {
            return response()->json(['msg' => 'Error during like!'],
                $exception->getCode());
        }

        if ($model->liked($user->id)) {
            $model->unlike($user->id);
            return response()->json(["msg" => "Unliked successfully!",
                "status" => true]);
        } else {
            $model->like($user->id);
            return response()->json(["msg" => "Liked successfully!",
                "status" => true]);
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function likesModelStatus(Request $request)
    {
        $model = $request->get('model');
        $model_id = $request->get('model_id');
        $model = app($model)->findOrFail($model_id);
        try {
            $user = \JWTAuth::parseToken()->authenticate();
        } catch (JWTException $exception) {
            $user = null;
        }
        if ($user) {
            $data['status'] = $model->liked($user->id);
        } else {
            $data['status'] = false;
        }
        $data['likes_counter'] = $model->likes_counter;

        return response()->json($data);
    }
}
