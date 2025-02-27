<?php

namespace App\Http\Controllers;

use App\Models\Claimit;
use App\Models\Lost;
use App\Models\Found;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Foundit;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;

class AdminController extends Controller
{
    public function adminDashboard(): Response
    {
        $foundCounts = Found::count();
        $pendingCounts = Found::where('status', 'pending')->count();
        $approvedCounts = Found::where('status', 'approved')->count();
        $rejectedCounts = Found::where('status', 'rejected')->count();

         $lostCounts = Lost::count();
        return Inertia::render('Admin/Dashboard', 
        
        
        [
            'lostCounts' => $lostCounts,
            'foundCounts' => $foundCounts,
            'pendingCounts' => $pendingCounts,
        ]);
    }

    public function adminProfile(): Response
    {


        return Inertia::render('Admin/Profile', []);
    }



    public function adminLost(): Response
    {

        $losts = Lost::all();
        return Inertia::render('Admin/Lost', [
            'losts'=> $losts

        ]);
    }

    public function adminFound(): Response
    {

        $founds = Found::all();
        return Inertia::render('Admin/Found', [
            'founds'=> $founds
        ]);
    }


    public function adminClaimReq(): Response
    {

    
        $claimits = Claimit::all();
        return Inertia::render('Admin/ClaimReq', [

            'claimits'=> $claimits
        ]);
    }

    public function adminFoundReq(): Response
    {
        $foundits = Foundit::all();

        return Inertia::render('Admin/FoundReq', [

            'foundits'=> $foundits  
        ]); 
    }


    public function adminUser(): Response
    {

        $users = User::all();

        return Inertia::render('Admin/User', [
            
            'users'=> $users
        ]);
    }


    public function store(Request $request)
    {

        $request->validate([
            'name' => 'required|string|max:255',
            'userId' => 'required|string|max:255',
            'department' => 'required',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'contactNumber' => 'required',
            'password' => 'required',
        ]);


        User::create([
            'userId' => $request->userId,
            'name' => $request->name,
            'department' => $request->department,
            'email' => $request->email,
            'role' => 'student',
            'password' => Hash::make($request->password),
            'contactNumber' => $request->contactNumber,

        ]);


        return redirect()->route('admin.user');
    }


    public function updateUser(User $user)
    {
        request()->validate([
            'name' => 'required',
            'email' => 'required|unique:users,email,' . $user->id,
            'userId' => 'required',
            'department' => 'required',
            'contactNumber' => 'required',
          
        ]);


        $user->update([
            'name' => request('name'),
            'email' => request('email'),
            'userId' => request('userId'),
            'department' => request('department'),
            'contactNumber' => request('contactNumber'),
            'password' => request('password') ? bcrypt(request('password')) : $user->password,
        ]);



        return redirect()->route('admin.user');
    }

    public function destroyUser(User $user): RedirectResponse
    {

        $user->delete();


        return to_route('admin.user');
    }
















    public function adminHistory(): Response
    {


        return Inertia::render('Admin/History', []);
    }



    public function approve($id)
{
    $claim = ClaimIt::findOrFail($id);
    $claim->status = 'approved';
    $claim->save();

    return back()->with('success', 'Claim approved successfully!');
}

public function reject($id)
{
    $claim = ClaimIt::findOrFail($id);
    $claim->status = 'rejected';
    $claim->save();

    return back()->with('success', 'Claim rejected successfully!');
}



public function fapprove($id)
{
    $foundit = Foundit::findOrFail($id);
    $foundit->status = 'approved';
    $foundit->save();

    return back()->with('success', 'foundit approved successfully!');
}

public function freject($id)
{
    $foundit = Foundit::findOrFail($id);
    $foundit->status = 'rejected';
    $foundit->save();

    return back()->with('success', 'Claim rejected successfully!');
}

}
