<?php

use App\Http\Controllers\Api\DispositivosController;
use App\Http\Controllers\Api\BodegaController;
use App\Http\Controllers\Api\RelacionController;

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

Route::controller(BodegaController::class)->group(function (){
    Route::get('/bodegas', 'index');
    Route::post('/bodega', 'store');
    Route::get('/bodega/{id}', 'show');
    Route::put('/bodega/{id}', 'update');
    Route::delete('/bodega/{id}', 'destroy');
});

Route::controller(RelacionController::class)->group(function (){
    Route::get('/enbodegas', 'index');
    Route::post('/enbodega', 'store');
    Route::get('/enbodega/{id}', 'show');
    Route::put('/enbodega/{id}', 'update');
    Route::delete('/enbodega/{id}', 'destroy');
});