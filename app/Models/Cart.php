<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    /**
     *  handle trait
     */
    use HasFactory;

    /**
     * fillable
     */
    protected $fillable = ['cashier_id', 'product_id', 'qty', 'price'];
}
