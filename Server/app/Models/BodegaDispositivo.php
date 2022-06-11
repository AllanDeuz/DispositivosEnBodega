<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BodegaDispositivo extends Model
{
    use HasFactory;
    protected $fillable = ['bodega_id', 'dispositivo_id'];
}
