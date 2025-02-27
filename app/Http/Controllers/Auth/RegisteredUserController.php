<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        // Validate the input
        $request->validate([
            'userId' => 'required|exists:users,userId',
            'password' => 'required',
        ]);
    
        // Retrieve the user by userId
        $user = User::where('userId', $request->userId)->where('role', 'user')->first();
    
        // Check if the user exists and the role is 'user'
        if (!$user) {
            return redirect()->back()->withErrors([
                'userId' => 'Invalid User ID or role is not user.',
            ]);
        }
    
        // Verify the password matches
        if (!Hash::check($request->password, $user->password)) {
            return redirect()->back()->withErrors([
                'password' => 'The provided password is incorrect.',
            ]);
        }
    
        // Log the user in
        Auth::login($user);
    
        // Redirect to the user dashboard
        return redirect()->route('user.dashboard');
    }
}
