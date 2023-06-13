<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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

    /**
     * accessor image category
     */
    protected function image(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => asset('/storage/product/' . $value)
        );
    }

    /**
     * local scope search
     */
    public function scopeSearch($query)
    {
        return $query->when(request('search'), fn($search) => $search->where('name', 'like', '%'. request('search') . '%'));
    }

    /**
     * relation belongsTo category
     */
    public function category() : BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
