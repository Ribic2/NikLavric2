<?php

namespace App\Http\Controllers;

use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\ThrottlesLogins;

class AuthController extends Controller
{
    use ThrottlesLogins;

    /**
     * Logs in user if provided credentials are correct
     * @param object $request credentials that user provides (email, password)
     * @return Request
     */
    public function login(Request $request)
    {
        // Login throttling, if user provides non-valid credentials he is blocked
        // from making attempts to login for 1 min
        if ($this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);
            return $this->sendLockoutResponse($request);
        }

        // JWT token is send if credentials are correct
        $credentials = $request->only(['username', 'password']);

        if (!$token = JWTAuth::attempt($credentials)) {
            $this->incrementLoginAttempts($request);
            return response('Provided data was incorrect!', 400);
        } else {
            $token = JWTAuth::attempt($credentials);

            return response()->json([
                "token" => $token,
            ]);

        }
    }
}
