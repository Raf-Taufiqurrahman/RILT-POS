<?php

namespace App\Http\Controllers\Apps;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * path product image
     */
    private $path = 'public/product/';

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // get all product data
        $products = Product::query()
            ->with('category')
            ->search()
            ->latest()
            ->paginate(7)->withQueryString();

        // render view
        return inertia('Product/Index', [
            'products' => $products,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // get all category data
        $categories = Category::select('id', 'name')->get();

        // render view
        return inertia('Product/Create', [
            'categories' => $categories,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductRequest $request)
    {
        // upload image
        $image = $request->file('image');
        $image->storeAs($this->path,$image->hashName());

        // create new product
        Product::create([
            'image'         => $image->hashName(),
            'barcode'       => $request->barcode,
            'name'          => $request->name,
            'description'   => $request->description,
            'category_id'   => $request->category_id,
            'buy_price'     => $request->buy_price,
            'sell_price'    => $request->sell_price,
            'stock'         => $request->stock,
        ]);

        // render view
        return redirect(route('apps.product.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        // get all category data
        $categories = Category::select('id', 'name')->get();

        // render view
        return inertia('Product/Edit', [
            'product' => $product->load('category'),
            'categories' => $categories,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProductRequest $request, Product $product)
    {
        // update product by id
        $product->update([
            'barcode'       => $request->barcode,
            'name'          => $request->name,
            'description'   => $request->description,
            'category_id'   => $request->category_id,
            'buy_price'     => $request->buy_price,
            'sell_price'    => $request->sell_price,
            'stock'         => $request->stock,
        ]);

        // check request image
        if($request->file('image')){
            // delete old image
            Storage::disk('local')->delete($this->path. basename($product->image));

            // upload image
            $image = $request->file('image');
            $image->storeAs($this->path, $image->hashName());

            // update product image by id
            $product->update([
                'image' => $image->hashName(),
            ]);
        }

        // render view
        return redirect(route('apps.product.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        // delete product image by id
        Storage::disk('local')->delete($this->path. basename($product->image));

        // delete product data by id
        $product->delete();

        // render view
        return back();
    }
}
