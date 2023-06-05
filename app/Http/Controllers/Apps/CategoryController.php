<?php

namespace App\Http\Controllers\Apps;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    /**
     * path category image
     */
    private $path = 'public/category/';

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // get all categories data
        $categories = Category::query()
            ->latest()
            ->search()
            ->paginate('7')->withQueryString();

        // render view
        return inertia('Category/Index', [
            'categories' => $categories,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // render view
        return inertia('Category/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CategoryRequest $request)
    {
        // upload image
        $image = $request->file('image');
        $image->storeAs($this->path, $image->hashName());

        // create new category data
        Category::create([
            'name' => $request->name,
            'image' => $image->hashName(),
        ]);

        // render view
        return redirect(route('apps.category.index'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        // render view
        return inertia('Category/Edit', [
            'category' => $category,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Category $category, CategoryRequest $request)
    {
        // update category by id
        $category->update([
            'name' => $request->name,
        ]);

        // update category image
        if($request->file('image')){
            // delete old image
            Storage::disk('local')->delete($this->path . basename($category->image));

            // get request image
            $image = $request->file('image');
            $image->storeAs($this->path, $image->hashName());

            // update category by id
            $category->update(['image' => $image->hashName()]);
        }

        // render view
        return redirect(route('apps.category.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        // delete category image
        Storage::disk('local')->delete($this->path. basename($category->image));

        // delete category data
        $category->delete();

        // render view
        return back();
    }
}
