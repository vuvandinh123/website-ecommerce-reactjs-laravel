<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    // public function login()
    // {
    //     return view('backend.Login.index');
    // }
    // public function login(Request $request)
    // {
    //     $username  = $request->username;
    //     $password = $request->password;
    //     $hashedPassword = bcrypt($password);
    //     $data = array('password'=>$password,'role'=>1);
    //     if(filter_var($username,FILTER_VALIDATE_EMAIL)){
    //         $data['email'] = $username;
    //     }
    //     if(Auth::attempt($data)){
    //         $user = User::where('email', $request->username)->first();
    //         $token = $user->createToken('Personal Access Token')->token;
    //         // return redirect()->route('dashboard');
    //         return response()->json(['token' => $token], 200);
    //     }
    //     else{
    //         // $error = 'Tài khoản hoặc mật khẩu không đúng';
    //         // return view('backend.Login.index',compact('error'));
    //         return response()->json(['error' => 'Unauthorized'], 401);
    //         // return response()->json(array('mes'=>'thanh cong'),200);
    //     }
    //     // return view('backend.Login.index');
    // }
    // public function logout(){
    //     Auth::logout();
    //     return redirect()->route('admin.login');
    // }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);
        $credentials = request(['email', 'password']);
        if(!Auth::attempt($credentials))
            return response()->json([
                'message' => 'Unauthorized123'
            ], 401);
        $user = $request->user();
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;
        if ($request->remember_me)
            $token->expires_at = Carbon::now()->addWeeks(1);
        $token->save();
        return response()->json([
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString()
        ]);
    }
  
    /**
     * Get the authenticated User
     *
     * @return [json] user object
     */
    public function user(Request $request)
    {
        return response()->json($request->user());
    }
}
