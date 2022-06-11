<?php

use App\Http\Controllers\Api\DispositivosController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(DispositivosController::class)->group(function (){
    Route::get('/dispositivos', 'index');
    Route::post('/dispositivo', 'store');
    Route::get('/dispositivo/{id}', 'show');
    Route::put('/dispositivo/{id}', 'update');
    Route::delete('/dispositivo/{id}', 'destroy');
});