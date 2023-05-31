<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profit extends Model
{
    /**
     *  handle trait
     */
    use HasFactory;

    /**
     * fillable
     */
    protected $fillable = ['transaction_id', 'total'];
}
