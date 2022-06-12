<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bodega extends Model
{
    use HasFactory;
    protected $fillable = ['nombre'];

    public function dispositivos()
    {
        return $this->belongsToMany(Dispositivos::class, 'bodega_dispositivos');
    }
}
