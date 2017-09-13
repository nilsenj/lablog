<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

/**
 * Class FileUploadController
 * @package App\Http\Controllers
 */
class FileUploadController extends Controller
{

    /**
     * @param Request $request
     * @param $day
     * @param $filename
     * @return string
     */
    public function images(Request $request, $day, $filename)
    {
        return \File::get(storage_path('app/public/uploads/images/' . $day . '/' . $filename));
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function uploadFile(Request $request)
    {
        $post_id = $request->get('post_id');
        $post = Post::findOrFail($post_id);
        $day = date('Y-m-d');
        // Handle the user upload of avatar
        if ($request->hasFile('file')) {
            $image = $request->file('file');
            if (!\Storage::disk('public')->exists('uploads/images/' . $day)) {
                // path does not exist
                \Storage::disk('public')->makeDirectory('uploads/images/' . $day);
            }
            $filename = $post->id . time() . '.' . $image->getClientOriginalExtension();
            $folderPath = storage_path('app/public/uploads/images/' . $day);
            $fullpath = $folderPath . '/' . $filename;
            \Image::make($image)->save($fullpath);
            $imagePath = route('api.blog.file.images', ['day' => $day, 'filename' => $filename]);
            $post->image_url = $imagePath;
            $post->save();
            return response()->json(['image' => $imagePath]);
        }
    }
}
