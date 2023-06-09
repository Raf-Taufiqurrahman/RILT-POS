<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    /**
     *  handle trait
     */
    use HasFactory;

    /**
     * fillable
     */
    protected $fillable = ['name', 'no_telp', 'address'];

    /**
     * local scope search
     */
    public function scopeSearch($query)
    {
        return $query->when(request('search'), fn($search) => $search->where('name', 'like', '%'. request('search') . '%'));
    }
}
