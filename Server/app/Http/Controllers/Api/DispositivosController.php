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
        $dispositivos = Dispositivos::select('*')->orderBy('nombre')->get();
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

        //SELECT bodega_dispositivos.id, dispositivos.nombre, dispositivos.marca, dispositivos.modelo, bodega_dispositivos.bodegas_id 
        //FROM bodegas, bodega_dispositivos, dispositivos
        //WHERE bodegas.id = bodega_dispositivos.bodega_id
        //AND dispositivos.id = bodega_dispositivos.dispositivo_id

        $dispositivosEnBodega = Dispositivos::join("bodega_dispositivos", "dispositivos.id", "=", "bodega_dispositivos.dispositivo_id")
        ->select('bodega_dispositivos.id', 'bodega_dispositivos.dispositivo_id','dispositivos.nombre', 'dispositivos.marca', 'dispositivos.modelo', 'bodega_dispositivos.bodega_id')
        ->orderBy('dispositivos.nombre')
        ->get();

        return $dispositivosEnBodega;
    }

    public function filtroBodega($bodega_id){
        $dispositivos = Dispositivos::all();
        $bodegas = Bodega::all();
        $bodegaDispositivos = BodegaDispositivo::where('bodega_id', $bodega_id)->get();

        //quiero los datos de los dispositivos que estan en la bodega que seleccione
        //SELECT bodega_dispositivos.id, dispositivos.nombre, dispositivos.marca, dispositivos.modelo, bodega_dispositivos.bodegas_id
        //FROM bodegas, bodega_dispositivos, dispositivos
        //WHERE bodegas.id = bodega_dispositivos.bodega_id
        //AND dispositivos.id = bodega_dispositivos.dispositivo_id
        //AND bodega_dispositivos.bodega_id = $id

        $dispositivosEnBodega = Dispositivos::join("bodega_dispositivos", "dispositivos.id", "=", "bodega_dispositivos.dispositivo_id")
        ->select('bodega_dispositivos.id', 'bodega_dispositivos.dispositivo_id','dispositivos.nombre', 'dispositivos.marca', 'dispositivos.modelo', 'bodega_dispositivos.bodega_id')
        ->where('bodega_dispositivos.bodega_id', $bodega_id)
        ->get();

        return $dispositivosEnBodega;
    }

    public function filtroMarca($marca){
        $dispositivos = Dispositivos::where('marca', $marca)->get();
        $bodegas = Bodega::all();
        $bodegaDispositivos = BodegaDispositivo::all();

        //quiero los datos de los dispositivos con marca = $marca que estan en la bodeda
        //SELECT bodega_dispositivos.id, dispositivos.nombre, dispositivos.marca, dispositivos.modelo, bodega_dispositivos.bodegas_id
        //FROM bodegas, bodega_dispositivos, dispositivos
        //WHERE bodegas.id = bodega_dispositivos.bodega_id
        //AND dispositivos.id = bodega_dispositivos.dispositivo_id
        //AND dispositivos.marca = $marca

        $dispositivosEnBodega = Dispositivos::join("bodega_dispositivos", "dispositivos.id", "=", "bodega_dispositivos.dispositivo_id")
        ->select('bodega_dispositivos.id', 'bodega_dispositivos.dispositivo_id','dispositivos.nombre', 'dispositivos.marca', 'dispositivos.modelo', 'bodega_dispositivos.bodega_id')
        ->where('dispositivos.marca', $marca)
        ->get();

        return $dispositivosEnBodega;

    }

    public function filtroModelo($modelo){
        $dispositivos = Dispositivos::where('modelo', $modelo)->get();
        $bodegas = Bodega::all();
        $bodegaDispositivos = BodegaDispositivo::all();

        //quiero los datos de los dispositivos con modelo = $modelo que estan en la bodeda
        //SELECT bodega_dispositivos.id, dispositivos.nombre, dispositivos.marca, dispositivos.modelo, bodega_dispositivos.bodegas_id
        //FROM bodegas, bodega_dispositivos, dispositivos
        //WHERE bodegas.id = bodega_dispositivos.bodega_id
        //AND dispositivos.id = bodega_dispositivos.dispositivo_id
        //AND dispositivos.modelo = $modelo

        $dispositivosEnBodega = Dispositivos::join("bodega_dispositivos", "dispositivos.id", "=", "bodega_dispositivos.dispositivo_id")
        ->select('bodega_dispositivos.id', 'bodega_dispositivos.dispositivo_id','dispositivos.nombre', 'dispositivos.marca', 'dispositivos.modelo', 'bodega_dispositivos.bodega_id')
        ->where('dispositivos.modelo', $modelo)
        ->get();

        return $dispositivosEnBodega;
    }

    //Seleccionar todas las marcas de los dispositivos
    public function marcas(){

        $marcas = Dispositivos::select('id', 'marca')->distinct()->orderBy('marca')->get();

        $marcasDistintas = [];
        $idMarcas = [];

        foreach ($marcas as $marca) {
            if (!in_array($marca->marca, $marcasDistintas)) {
                array_push($idMarcas, $marca->id);
                array_push($marcasDistintas, $marca->marca);
            }
        }

        $marcasJson = [];
        for ($i=0; $i < count($idMarcas); $i++) { 
            $marcasJson[$i] = [
                "id" => $idMarcas[$i],
                "marca" => $marcasDistintas[$i]
            ];
        }

        return $marcasJson;

    }

    //Seleccionar todos los modelos de los dispositivos
    public function modelos(){
        $modelos = Dispositivos::select('id', 'modelo')->distinct()->orderBy('modelo')->get();

        $modelosDistintos = [];
        $idModelos = [];

        foreach ($modelos as $modelo) {
            if (!in_array($modelo->modelo, $modelosDistintos)) {
                array_push($idModelos, $modelo->id);
                array_push($modelosDistintos, $modelo->modelo);
            }
        }

        $modelosJson = [];
        for ($i=0; $i < count($idModelos); $i++) { 
            $modelosJson[$i] = [
                "id" => $idModelos[$i],
                "modelo" => $modelosDistintos[$i]
            ];
        }

        return $modelosJson;
    }

    public function estaBodega($id)
    {
        $bodegaDispositivo = Dispositivos::find($id);
        return $bodegaDispositivo;
    }
}
