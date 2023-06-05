<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
    /**
     *  handle trait
     */
    use HasFactory;

    /**
     * fillable
     */
    protected $fillable = ['image', 'name', 'description'];

    /**
     * accessor image category
     */
    protected function image(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => asset('/storage/category/' . $value)
        );
    }

    /**
     * local scope search
     */
    public function scopeSearch($query)
    {
        $query->when(request()->search, function($search){
            $search->where('name', 'like', '%'. request()->search . '%');
        });
    }
}
