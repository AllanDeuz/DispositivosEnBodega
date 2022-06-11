<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Bodega;

class BodegaController extends Controller
{

    public function index()
    {
        $bodegas = Bodega::all();
        return $bodegas;
    }

    public function store(Request $request)
    {
        $bodega = new Bodega();
        $bodega->nombre = $request->nombre;

        $bodega->save();

    }

    public function show($id)
    {
        $bodega = Bodega::find($id);
        return $bodega;
    }

    public function update(Request $request, $id)
    {
        $bodega = Bodega::find($id);
        $bodega->nombre = $request->nombre;

        $bodega->save();
        return $bodega;
    }

    public function destroy($id)
    {
        $bodega = Bodega::destroy($id);
        return $bodega;
    }
}

