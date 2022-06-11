<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Dispositivos;

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
}
