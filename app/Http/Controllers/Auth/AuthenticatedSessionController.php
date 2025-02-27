<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        // Authenticate the user
        $request->authenticate();
    
        // Regenerate the session to prevent session fixation attacks
        $request->session()->regenerate();
    
        // Get the authenticated user and their role
        $user = $request->user();
    
        // Define role-based redirections
        $roleRedirects = [
            'admin' => 'admin/dashboard',
            'user' => 'user/dashboard',
        ];
    
        // Check if the user's role has a defined redirect
        if (isset($roleRedirects[$user->role])) {
            return redirect($roleRedirects[$user->role]);
        }
    
        // Default redirect (e.g., for roles not explicitly handled)
        return redirect()->intended(route('/'));
    }
    


    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
