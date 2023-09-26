<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $category = $request->category;
        $brand =  json_decode($request->brand) ?? [];
        $colors = json_decode($request->color) ?? [];
        $sizes = json_decode($request->size) ?? [];
        $sortBy = $request->sortBy;
        $totalProducts = Product::count();
        $page = $request->input('page', 1);
        $limit = $request->input('limit', 10);
        $min = $request->min;
        $max = $request->max;
        $query = Product::query();
        if ((!empty($category) && $category != 'all') || (count($brand) > 0) || (count($colors) > 0) || (count($sizes) > 0) || !empty($min) || !empty($max)) {
            if (count($colors) > 0) {
                $query->join('products_colors', 'products.id', '=', 'products_colors.product_id')
                    ->join('colors', 'products_colors.color_id', '=', 'colors.id')
                    ->select('products.*', 'colors.name AS color_name')
                    ->whereIn('colors.id', $colors);
            }
            if (count($sizes) > 0) {
                $query->join('products_sizes', 'products.id', '=', 'products_sizes.product_id')
                    ->join('sizes', 'products_sizes.size_id', '=', 'sizes.id')
                    ->select('products.*', 'sizes.name AS size_name')
                    ->whereIn('sizes.id', $sizes);
            }
            if ((!empty($category) && $category != 'all')) {
                $query->join('categories', 'products.category_id', '=', 'categories.id')
                    ->select('products.*', 'categories.name AS category_name', 'categories.slug AS category_slug')->where('categories.slug', $category);
            }
            if (count($brand) > 0) {
                $query->whereIn('brand_id', $brand);
            }
            if (!empty($min)) {
                $query->where('products.price', '>=', $min);
            }
            if (!empty($max)) {
                $query->where('products.price', '<=', $max);
            }
        } 
        if($sortBy == 'Featured'){
            $query->orderBy('products.created_at', 'asc');
        }else if($sortBy == 'BestSelling'){
            $query->orderBy('products.created_at', 'desc');
        }else if($sortBy == 'AlphabeticallyA-Z'){
            $query->orderBy('products.name', 'asc');
        }else if($sortBy == 'AlphabeticallyZ-A'){
            $query->orderBy('products.name', 'desc');
        }else if($sortBy == 'Price-low-to-high'){
            $query->orderBy('products.price', 'asc');
        }else if($sortBy == 'Price-low-to-low'){
            $query->orderBy('products.price', 'desc');
        }else if($sortBy == 'Date-old-to-new'){
            $query->orderBy('products.created_at', 'asc');
        }else if($sortBy == 'Date-new-to-old'){
            $query->orderBy('products.created_at', 'desc');
        }
        $products = $query->with(['images'])->paginate($limit, ['*'], 'page', $page);
        $respone = [
            "total" => $totalProducts,
            "data" => $products,
        ];
        return response()->json($respone);
    }
    public function search(Request $request, $idCat)
    {
        $value = $request->search;
        if (!($idCat == 'all')) {
            return Product::join('categories', 'products.category_id', '=', 'categories.id')->where([['products.name', 'like', '%' . $value . '%'], ['categories.slug', $idCat]])->select('products.*')->with(['images'])->get();
        } else {
            return Product::where([['products.name', 'like', '%' . $value . '%']])->with(['images'])->get();
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
        $product = Product::with(['images', 'colors', 'sizes'])->where('slug', $slug)->first();
        return $product;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
