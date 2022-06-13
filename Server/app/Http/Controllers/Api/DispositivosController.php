<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Dispositivos;
use App\Models\Bodega;
use App\Models\BodegaDispositivo;

class DispositivosController extends Controller
{

    public function index()
    {
        $dispositivos = Dispositivos::all();
        return $dispositivos;
    }

    public function store(Request $request)
    {
        $dispositivo = new Dispositivos();
        $dispositivo->nombre = $request->nombre;
        $dispositivo->marca = $request->marca;
        $dispositivo->modelo = $request->modelo;

        $dispositivo->save();

    }

    public function show($id)
    {
        $dispositivo = Dispositivos::find($id);
        return $dispositivo;
    }

    public function update(Request $request, $id)
    {
        $dispositivo = Dispositivos::find($id);
        $dispositivo->nombre = $request->nombre;
        $dispositivo->marca = $request->marca;
        $dispositivo->modelo = $request->modelo;

        $dispositivo->save();
        return $dispositivo;
    }

    public function destroy($id)
    {
        $dispositivo = Dispositivos::destroy($id);
        return $dispositivo;
    }

    public function enBodega()
    {   
        $dispositivos = Dispositivos::all();
        $bodegas = Bodega::all();
        $bodegaDispositivos = BodegaDispositivo::all();

        //SELECT bodega_dispositivos.id, dispositivos.nombre, dispositivos.marca, dispositivos.modelo, bodegas.nombre 
        //FROM bodegas, bodega_dispositivos, dispositivos
        //WHERE bodegas.id = bodega_dispositivos.bodega_id
        //AND dispositivos.id = bodega_dispositivos.dispositivo_id

        $dispositivosEnBodega = Dispositivos::join("bodega_dispositivos", "dispositivos.id", "=", "bodega_dispositivos.dispositivo_id")
        ->select('bodega_dispositivos.id', 'bodega_dispositivos.dispositivo_id','dispositivos.nombre', 'dispositivos.marca', 'dispositivos.modelo', 'bodega_dispositivos.bodega_id')
        ->get();

        return $dispositivosEnBodega;
    }

    public function estaBodega($id)
    {
        $bodegaDispositivo = Dispositivos::find($id);
        return $bodegaDispositivo;
    }
}
