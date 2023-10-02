<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Color;
use App\Models\Image;
use App\Models\Product;
use App\Models\Product_color;
use App\Models\Product_size;
use App\Models\Products_sizes;
use App\Models\Size;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $listProduct =
            Product::where('products.status', '!=', 0)
            ->join('categories', 'products.category_id', '=', 'categories.id')
            ->join('brands', 'products.brand_id', '=', 'brands.id')
            ->orderBy('created_at', 'desc')
            ->select('products.*', 'categories.name as category_name', 'brands.name as brand_name')
            ->with(['images'])
            ->get();
        return view('backend.product.index', compact('listProduct'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $brands = Brand::where('status', 1)->select('id', 'name')->get();
        $categorys = Category::where('status', 1)->select('id', 'name')->get();
        $colors = Color::select('id', 'name')->get();
        $sizes = Size::select('id', 'name')->get();
        return view('backend.product.create', compact('brands', 'categorys', 'colors', 'sizes'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $product = new Product();
        $product->name = $request->input('name');
        $product->slug = Str::slug($product->name, '-');
        $product->category_id = $request->input('category');
        $product->brand_id = $request->input('brand');
        $product->price = $request->input('price');
        $product->quantity = $request->input('qty');
        $product->description = $request->input('description');
        $product->detail = $request->input('detail');
        $product->metakey = $request->input('metakey');
        $product->metadesc = $request->input('metades');
        $product->meta_title = $request->input('metatitle');
        $product->visibility_home = $request->input('visibility_home');
        $product->created_by = 1;
        $product->status = $request->input('status');

        if ($product->save()) {
            if ($request->has('colors')) {
                foreach ($request->input('colors') as $id) {
                    $color = new Product_color();
                    $color->product_id = $product->id;
                    $color->color_id = $id;
                    $color->quantity = $request->input($id . 'colorqty') ?? 0;
                    $color->price = $request->input($id . 'colorprice') ?? $product->price;
                    $color->save();
                }
            }
            if ($request->has('sizes')) {
                foreach ($request->input('sizes') as $id) {
                    $size = new Product_size();
                    $size->product_id = $product->id;
                    $size->size_id = $id;
                    $size->quantity = $request->input($id . 'sizeqty') ?? 0;
                    $size->price = $request->input($id . 'sizeprice') ?? $product->price;
                    $size->save();
                }
            }
            if ($request->hasFile('images')) {
                $i = 0;
                foreach ($request->file('images') as $file) {
                    $image = new Image();
                    $filename = $product->slug . Carbon::now()->format('YmdHis') . Carbon::now()->micro . $i++ . '.' . $file->getClientOriginalExtension();
                    $file->move(public_path('images'), $filename);
                    $image->image_url = $filename;
                    $image->product_id = $product->id;
                    $image->save();
                }
            }
            return redirect()->route('product.index')->with('success', 'Thêm sản phẩm thành công');
        }
        return redirect()->route('product.index')->with('success', 'Thêm sản phẩm thất bại');
    }

    public function image(string $id)
    {
        $images = Image::where('product_id', '=', $id)->get();
        return view('backend.product.upload', compact('images'));
    }

    public function upload(Request $request, $id)
    {
        if ($request->hasFile('images')) {
            $i = 0;
            foreach ($request->file('images') as $file) {
                $image = new Image();
                $filename = Carbon::now()->format('YmdHis') . Carbon::now()->micro . $i++ . '.' . $file->getClientOriginalExtension();
                $file->move(public_path('images'), $filename);
                $image->name = $filename;
                $image->product_id = $id;
                $image->save();
            }
        } else {
            return redirect()->route('product.image', ['id' => $id])->with('success', 'Thất bại');
        }
        return redirect()->route('product.image', ['id' => $id])->with('success', 'thành công');
    }
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product =  Product::where('products.status', '!=', 0)
            ->join('categories', 'products.category_id', '=', 'categories.id')
            ->join('brands', 'products.brand_id', '=', 'brands.id')
            ->orderBy('created_at', 'desc')
            ->select('products.*', 'categories.name as category_name', 'brands.name as brand_name')
            ->with(['images'])
            ->find($id);
        return view('backend.product.show', compact('product'));
    }

    public function status($id)
    {
        $product = Product::find($id);
        $product->status = $product->status == 2 ? 1 : 2;
        $product->save();
        return response()->json(array('mes' => $product->status), 200);
    }
    public function setTrash($id)
    {
        $product =  Product::find($id);
        $product->status = 0;
        $product->save();
        return response()->json(array('mes' => 'thanh cong'), 200);
    }
    public function trash()
    {
        $listProduct = Product::where('status', '=', 0)->get();
        return view('backend.product.trash', compact('listProduct'));
    }
    public function restore()
    {
        $product = Product::find($_POST['data']);
        $product->status = 1;
        $product->save();
        return response()->json(array('mes' => $product->status), 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $product = Product::where('products.status', '!=', 0)->with(['images', 'colors', 'sizes'])->find($id);
        $brands = Brand::where('status', 1)->select('id', 'name')->get();
        $categorys = Category::where('status', 1)->select('id', 'name')->get();
        $colors = Color::select('id', 'name')->get();
        $sizes = Size::select('id', 'name')->get();
        return view('backend.product.edit', compact('brands', 'categorys', 'colors', 'sizes', 'product'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $product = Product::find($id);
        $product->name = $request->input('name');
        $product->slug = Str::slug($product->name, '-');
        $product->category_id = $request->input('category');
        $product->brand_id = $request->input('brand');
        $product->price = $request->input('price');
        $product->quantity = $request->input('qty');
        $product->detail = $request->input('detail');
        $product->metakey = $request->input('metakey');
        $product->metadesc = $request->input('metades');
        $product->meta_title = $request->input('metatitle');
        $product->visibility_home = $request->input('visibility_home');
        $product->created_by = 1;
        $product->status = $request->input('status');
        $product->colors()->detach();
        $product->sizes()->detach();
        if ($product->save()) {
            if ($request->has('colors')) {
                foreach ($request->input('colors') as $id) {
                    $color = new Product_color();
                    $color->product_id = $product->id;
                    $color->color_id = $id;
                    $color->quantity = $request->input($id . 'colorqty') ?? 0;
                    $color->price = $request->input($id . 'colorprice') ?? $product->price;
                    $color->save();
                }
            }
            if ($request->has('sizes')) {
                foreach ($request->input('sizes') as $id) {
                    $color = new Product_Size();
                    $color->product_id = $product->id;
                    $color->size_id = $id;
                    $color->quantity = $request->input($id . 'sizeqty') ?? 0;
                    $color->price = $request->input($id . 'sizeprice') ?? $product->price;
                    $color->save();
                }
            }
            return redirect()->route('product.index')->with('success', 'Thêm sản phẩm thành công');
        }
        return redirect()->route('product.index')->with('success', 'Thêm sản phẩm thất bại');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy()
    {
        $id = $_POST['data'] ?? null;
        if ($id) {
            $product = Product::find($id);
            if ($product) {
                $product->images->each(function ($image) {
                    $image->delete();
                    $filePath = public_path('images/' . $image->image_url);
                    if (file_exists($filePath)) {
                        unlink($filePath);
                    }
                });
                $product->colors()->detach();
                $product->sizes()->detach();
                $product->delete();
            } else {
                // Xử lý trường hợp sản phẩm không tồn tại
            }
        } else {
            // Xử lý trường hợp dữ liệu đầu vào không hợp lệ
        }
        return response()->json(array('mes' => 'thanh cong'), 200);
    }
}
