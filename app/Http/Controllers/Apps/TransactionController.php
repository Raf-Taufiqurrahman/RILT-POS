<?php

namespace App\Http\Controllers\Apps;

use App\Models\Cart;
use App\Models\Product;
use App\Models\Category;
use App\Models\Customer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TransactionController extends Controller
{
    public function index(Request $request)
    {
        $carts = Cart::query()
            ->with('product')
            ->where('cashier_id', $request->user()->id)
            ->latest()
            ->get();

        $customers = Customer::query()
            ->latest()->get();

        $categories = Category::query()
            ->latest()
            ->get();

        $products = Product::query()
            ->with('category')
            ->latest()
            ->paginate(7);

        return inertia('Transaction/Index', [
            'carts' => $carts,
            'carts_total' => $carts->sum('price'),
            'cusomters' => $customers,
            'categories' => $categories,
            'products' => $products,
        ]);
    }
}
