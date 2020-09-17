<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use App\Video;

class VideoController extends Controller
{

    /**
     * Get all videos
     * @return JsonResponse
     */
    public function getVideos(): JsonResponse{
        return response()->json([
            "response" => Video::all()
        ]);
    }


    /**
     * Gets selected video data
     * @param string $id
     * @return JsonResponse
     */
    public function getVideo(string $id): JsonResponse{
        return response()->json([
            "response" => Video::where('videoApiTitle', $id)->first()
        ]);
    }
}
