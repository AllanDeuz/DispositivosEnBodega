<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\BodegaDispositivo;

class RelacionController extends Controller
{
    public function index(){
        $bodegaDispositivos = BodegaDispositivo::all();
        return $bodegaDispositivos;
    }

    public function store(Request $request)
    {
        $bodegaDispositivo = new BodegaDispositivo();
        $bodegaDispositivo->bodega_id = $request->bodega_id;
        $bodegaDispositivo->dispositivo_id = $request->dispositivo_id;

        $bodegaDispositivo->save();

    }

    public function show($id)
    {
        $bodegaDispositivo = BodegaDispositivo::find($id);
        return $bodegaDispositivo;
    }

    public function update(Request $request, $id)
    {
        $bodegaDispositivo = BodegaDispositivo::find($id);
        $bodegaDispositivo->bodega_id = $request->bodega_id;
        $bodegaDispositivo->dispositivo_id = $request->dispositivo_id;

        $bodegaDispositivo->save();
        return $bodegaDispositivo;
    }

    public function destroy($id)
    {
        $bodegaDispositivo = BodegaDispositivo::destroy($id);
        return $bodegaDispositivo;
    }
}
