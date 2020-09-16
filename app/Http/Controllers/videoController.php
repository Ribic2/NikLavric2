<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use App\Video;

class VideoController extends Controller
{

    public function getVideos(): JsonResponse{
        return response()->json([
            "response" => Video::all()
        ]);
    }
}
