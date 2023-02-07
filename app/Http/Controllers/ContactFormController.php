<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactFormController extends Controller
{
    public function submit(Request $request) {
        $this->validate($request, [
            'name' => 'required|string',
            'email' => 'required|email',
            'message' => 'required',
        ]);
        
        Mail::send('mailSend', [
            'name' => $request->name,
            'email' => $request->email,
            'messages' => $request->message ],
            function ($message)  {
                    $message->to('jalloulabdo88@gmail.com', 'Jalloulabdo')
                    ->subject('Your Website Contact Form');
                    
    });

        

        return response()->json('correct', 200);
    }
}
