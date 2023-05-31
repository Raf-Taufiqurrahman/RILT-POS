<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    /**
     *  handle trait
     */
    use HasFactory;

    /**
     * fillable
     */
    protected $fillable = [
        'image', 'name', 'barcode', 'description', 'buy_price', 'sell_price', 'category_id', 'stock'
    ];
}
