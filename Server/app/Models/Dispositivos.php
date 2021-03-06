<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dispositivos extends Model
{
    use HasFactory;
    protected $fillable = ['nombre', 'marca', 'modelo'];

    public function bodegas()
    {
        return $this->belongsToMany(Bodega::class, 'bodega_dispositivos');
    }
}
