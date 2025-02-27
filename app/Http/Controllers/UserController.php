<?php

namespace App\Http\Controllers;

use App\Models\Claimit;
use App\Models\Lost;
use App\Models\Found;
use App\Models\Foundit;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function userDashboard(): Response
    {
       

        return Inertia::render('User/Dashboard', [
           
        ]);
    }

    public function userProfile(): Response
    {
       

        return Inertia::render('User/Profile', [
           
        ]);
    }


    public function userLost(): Response
    {
       
        $losts = Lost::all();
        return Inertia::render('User/Lost', [
            'losts'=> $losts
        ]);
    }

    
    public function storeLost(Request $request)
    {
        $request->validate([
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'name' => 'required',
            'landMark' => 'required',
            'contact' => 'required',
            'dateLost' => 'required',
            'timeLost' => 'required',
            'description' => 'required',
        ]);

        $user = Auth::user();

        $lost = new Lost;

        $image = $request->image;

        $imagename = time() . '.' . $image->getClientOriginalExtension();

        $request->image->move('lostImage', $imagename);
        $lost->image = $imagename;


        $lost->user_id = $user->id;
        $lost->user_name = $user->name;

        $lost->name = $request->name;
        $lost->landMark = $request->landMark;
        $lost->contact = $request->contact;
        $lost->dateLost = $request->dateLost;
        $lost->timeLost = $request->timeLost;
        $lost->description = $request->description;
        $lost->save();


        return redirect()->route('user.lost');
    }





    public function userFound(): Response
    {
        $founds = Found::all();
        return Inertia::render('User/Found', [
            'founds'=> $founds
        ]);
    }


    
    public function storeFound(Request $request)
    {
        $request->validate([
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'name' => 'required',
            'landMark' => 'required',
            'contact' => 'required',
            'dateFound' => 'required',
            'timeFound' => 'required',
            'description' => 'required',
        ]);

        $user = Auth::user();

        $found = new Found;

        $image = $request->image;

        $imagename = time() . '.' . $image->getClientOriginalExtension();

        $request->image->move('foundImage', $imagename);
        $found->image = $imagename;


        $found->user_id = $user->id;
        $found->user_name = $user->name;

        $found->name = $request->name;
        $found->landMark = $request->landMark;
        $found->contact = $request->contact;
        $found->dateFound = $request->dateFound;
        $found->timeFound = $request->timeFound;
        $found->description = $request->description;
        $found->save();


        return redirect()->route('user.found');
    }

    public function foundIt($lost){

        $lost = Lost::findOrFail($lost);
           return Inertia::render('User/FoundIt', [
            'lost' => $lost,
        ]);
    }


    public function storeFoundit(Request $request, Lost $lost)
    {
        $request->validate([
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'dateFound' => 'required',
            'location' => 'required',
            'itemDescription' => 'required',
        ]);


        $user = Auth::user();

        $foundit = new foundIt;

        $image = $request->image;

        $imagename = time() . '.' . $image->getClientOriginalExtension();

        $request->image->move('founditImage', $imagename);
        $foundit->image = $imagename;

      
    
        $foundit->userId = $user->userId;
        $foundit->user_id = $user->id;
        $foundit->userName = $user->name;
        $foundit->userEmail = $user->email;
        $foundit->userPhone = $user->contactNumber;

        $foundit->lost_id = $lost->id;
        $foundit->name = $lost->name;
        $foundit->landMark = $lost->landMark;

        $foundit->dateFound = $request->dateFound;
        $foundit->location = $request->location;
        $foundit->itemDescription = $request->itemDescription;

  
        $foundit->save();


        return redirect()->route('user.lost');
    }







    public function userNotify(): Response
    {
       
        if (Auth::check()) {
            $userid = Auth::user()->id;
            $foundits = Foundit::where('user_id', $userid)->get();
            $claimits = Claimit::where('user_id', $userid)->get();
        return Inertia::render('User/Notify', [

        'foundits' => $foundits,
        'claimits' => $claimits,

        ]);


    } else {
        // Redirect back if the user is not authenticated
        return redirect()->back();
    }

 
    }

    public function destroyFoundit(Foundit $foundit){
        $foundit->delete();

        return redirect()->back();
    }

    public function claimIt($found){

        $found = Found::findOrFail($found);
           return Inertia::render('User/ClaimIt', [
            'found' => $found,
        ]);
    }


    public function storeClaimit(Request $request, Found $found)
    {
        $request->validate([
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'dateLost' => 'required',
            'location' => 'required',
            'itemDescription' => 'required',
        ]);


        $user = Auth::user();

        $claimit = new ClaimIt;

        $image = $request->image;

        $imagename = time() . '.' . $image->getClientOriginalExtension();

        $request->image->move('claimitImage', $imagename);
        $claimit->image = $imagename;

      
    
        $claimit->userId = $user->userId;
        $claimit->user_id = $user->id;
        $claimit->userName = $user->name;
        $claimit->userEmail = $user->email;
        $claimit->userPhone = $user->contactNumber;

        $claimit->found_id = $found->id;
        $claimit->name = $found->name;
        $claimit->landMark = $found->landMark;

        $claimit->dateLost = $request->dateLost;
        $claimit->location = $request->location;
        $claimit->itemDescription = $request->itemDescription;

  
        $claimit->save();


        return redirect()->route('user.found');
    }


    public function destroyClaimit(Claimit $claimit){
        $claimit->delete();

        return redirect()->back();
    }





    
}
