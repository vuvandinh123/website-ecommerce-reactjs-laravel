<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $listCategory = Category::where('status', '!=', '0')->orderBy('created_at', 'desc')->get();
        return view('backend.category.index', compact('listCategory'));
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categorys = Category::where('status', '!=', '0')->get();
        $html1 = $html2 = '';
        foreach ($categorys as $item) {
            $html1 .= '<option value="' . $item->id . '">' . $item->name . '</option>';
        }
        return view('backend.category.create', compact('html1', 'html2'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $category = new Category();
        $category->name = $request->input('name');
        $category->slug = Str::slug($category->name, '-');
        $category->parent_id = $request->input('parent_id');
        $category->metakey = $request->input('metakey');
        $category->metadesc = $request->input('metades');
        $category->created_by = 1;
        $category->updated_by = 1;
        $image = $request->file('image');
        if (isset($image)) {
            $filename = $category->slug . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('images'), $filename);
            $category->image = $filename;
        }
        $category->save();
        return redirect()->route('category.index')->with('success', 'Thêm danh mục thành công');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $category = Category::find($id);
        return view('backend.category.show', compact('category'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $categorys = Category::where('status', '!=', '0')->get();
        $category = Category::find($id);
        return view('backend.category.edit', compact('categorys', 'category'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $category = Category::find($id);
        $category->name = $request->input('name');
        $category->slug = Str::slug($category->name, '-');
        $category->parent_id = $request->input('parent_id');
        $category->metakey = $request->input('metakey');
        $category->metadesc = $request->input('metades');
        $category->created_by = 1;
        $category->updated_by = 1;
        $image = $request->file('image');
        if (isset($image)) {
            $filePath = public_path('images/' . $category->image);
            if (file_exists($filePath)) {
                unlink($filePath);
            }
            $filename = $category->slug . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('images/categorys'), $filename);
            $category->image = $filename;
        }
        $category->save();
        return redirect()->route('category.index')->with('success', 'Cập nhập danh mục thất bại');
    }
    public function status($id)
    {
        $category = Category::find($id);
        $category->status = $category->status == 2 ? 1 : 2;
        $category->save();
        return response()->json(array('mes' => $category), 200);
    }
    public function trash()
    {
        $listCategory = Category::where('status', '=', 0)->get();
        return view('backend.category.trash', compact('listCategory'));
    }
    public function restore()
    {
        $category = Category::find($_POST['data']);
        $category->status = 1;
        $category->save();
        return response()->json(array('mes' => $category->status), 200);
    }
    // xoa san pham vo thung rac
    public function setTrash($id)
    {
        $category =  Category::find($id);
        $category->status = 0;
        $category->save();
        return response()->json(array('mes' => 'thanh cong'), 200);
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy()
    {
        $category = Category::find($_POST['data']);
        $filePath = public_path('images/' . $category->image);
        if (file_exists($filePath)) {
            unlink($filePath);
        }
        $category->delete();
        return response()->json(array('mes' => 'thanh cong'), 200);
    }
}
