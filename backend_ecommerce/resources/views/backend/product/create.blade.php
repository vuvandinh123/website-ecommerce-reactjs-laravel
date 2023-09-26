@extends('layout.admin')
@section('title', 'Admin | Thêm sản phẩm')

@section('content')
    <div class="container-fluid py-4">
        <div style="background: #f6f6f6" class=" border-radius-2xl p-5">
            <a href="{{ route('product.index') }}" class="fs-6">Come Back</a>
            <div class="">
                <h4 class="text-center mb-4">New Product</h4>
            </div>
            <form action="{{ route('product.store') }}" id="create" method="post"enctype="multipart/form-data">
                @csrf
                <div class="row">
                    <div class="col-md-8  ">
                        <div class="bg-white mb-2 rounded p-4">
                            <h5 class="text-dark py-2">Genaral</h5>
                            <div>
                                <label for="" class="form-label">Name <span class="text-danger">*</span></label>
                                <input name="name" id="name" type="text" class="form-control" placeholder="name">
                                <span class="text-danger alert" style="font-size: 12px"></span>
                            </div>
                            <div class="">
                                <label for="" class="form-label my-2">Quantity <span
                                        class="text-danger">*</span></label>
                                <input type="text" placeholder="" class="form-control" name="qty" id="qty">
                                <span class="text-danger alert" style="font-size: 12px"></span>
                            </div>
                            <div class="">
                                <label for="" class="form-label my-2">Giá <span class="text-danger">*</span></label>
                                <input type="number" placeholder="" class="form-control" name="price" id="price">
                                <span class="text-danger alert" style="font-size: 12px"></span>
                            </div>
                            <div class="col-md-12">
                                <label for="" class="form-label my-2">Description <span
                                        class="text-danger">*</span></label>
                                <textarea placeholder="" style="min-height: 40px" class="form-control" name="des" id="detail" cols="30"
                                    rows="3"></textarea>
                                <span class="text-danger alert" style="font-size: 12px"></span>
                            </div>
                        </div>
                        <div class="bg-white mb-2 rounded p-4">
                            <h5>Media</h5>
                            <div style="display: flex ;flex-wrap: wrap;gap: 10px">
                                <label for="image" style="height: 200px ; width: 200px;"
                                    class="d-flex  border justify-content-center align-items-center">
                                    <input class="d-none" onchange="displayImages(this)" type="file" name="images[]"
                                        multiple id="image">
                                    <i class="fa-solid fa-camera fs-2"></i>
                                </label>
                                <div style="display: flex ;flex-wrap: wrap;gap: 10px" id="imageContainer" class="">
                                </div>
                            </div>

                        </div>
                        <div class="bg-white rounded p-4">
                            <h5>Search engine optimize</h5>
                            <div class="">
                                <label for="" class="form-label my-1">Meta title<span
                                        class="text-danger">*</span></label>
                                <input class="form-control" type="text" name="metatitle">
                                <span class="text-danger alert" style="font-size: 12px"></span>
                            </div>
                            <div class="">
                                <label for="" class="form-label my-1">Meta keywords<span
                                        class="text-danger">*</span></label>
                                <input class="form-control" type="text" name="metakey">
                                <span class="text-danger alert" style="font-size: 12px"></span>
                            </div>
                            <div class="">
                                <label for="" class="form-label my-1">Meta Description <span
                                        class="text-danger">*</span></label>
                                <textarea placeholder="" style="min-height: 40px" class="form-control" name="metades" cols="30" rows="5"></textarea>
                                <span class="text-danger alert" style="font-size: 12px"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md rounded ">
                        <div class="bg-white p-4 mb-2">
                            <h5 class="text-dark py-2">Product status</h5>
                            <div class="">
                                <p class="text-sm mt-4">Status</p>
                                <div class="form-check">
                                    <input class="form-check-input" value="2" type="radio" name="status"
                                        id="Disabled" value="option1" checked>
                                    <label class="form-check-label" for="Disabled">
                                        Disabled
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input value="1" class="form-check-input" type="radio" name="status"
                                        id="Enabled" value="option1" checked>
                                    <label class="form-check-label" for="Enabled">
                                        Enabled
                                    </label>
                                </div>
                            </div>
                            <div class="border-top">
                                <p class="text-sm mt-3">Visibility Home</p>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="visibility_home" id="visibility_home"
                                        value="0" checked>
                                    <label class="form-check-label" for="visibility_home">
                                        Not visible
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="visibility_home" id="visible"
                                        value="1" checked>
                                    <label class="form-check-label" for="visible">
                                        visible
                                    </label>
                                </div>
                            </div>

                        </div>
                        <div class="bg-white p-4">
                            <h5 class="text-dark fs-6  py-2">ATTRIBUTE GROUP</h5>
                            <div class="border-bottom">
                                <div class="">
                                    <label for="" class="form-label">Brand <span
                                            class="text-danger">*</span></label>
                                    <select name="brand" class="form-select" id="brand">
                                        <option selected disabled value="">change</option>
                                        @foreach ($brands as $item)
                                            <option class="text-capitalize" value="{{ $item->id }}">
                                                {{ $item->name }}
                                            </option>
                                        @endforeach
                                    </select>
                                    <span class="text-danger alert" style="font-size: 12px"></span>
                                </div>
                                <div class="">
                                    <label for="" class="form-label">Category <span
                                            class="text-danger">*</span></label>
                                    <select name="category" class="form-select" id="category">
                                        <option selected disabled value="">change</option>
                                        @foreach ($categorys as $item)
                                            <option class="text-capitalize" value="{{ $item->id }}">
                                                {{ $item->name }}</option>
                                        @endforeach
                                    </select>
                                    <span class="text-danger alert" style="font-size: 12px"></span>
                                </div>
                            </div>
                            <style>
                                .change-value {
                                    height: 0;
                                    overflow: hidden;
                                    transition: .5s ease-out;
                                }

                                .change-checkbox[type="checkbox"]:checked+label+div {
                                    height: 40px;
                                }
                                .image-wrapper {
                                    display: inline-block;
                                    margin: 10px;
                                }
                            </style>
                            <div class="border-bottom">
                                <h5 class="mt-3">Attribute</h5>
                                <div>
                                    <label for="" class="form-label">Color</label>
                                    @foreach ($colors as $item)
                                        <div class="form-check">
                                            <input class="form-check-input change-checkbox" name="colors[]"
                                                type="checkbox" value="{{ $item->id }}" id="{{ $item->id }}">
                                            <label class="form-check-label" for="{{ $item->id }}">
                                                {{ $item->name }}
                                            </label>
                                            <div class="row change-value">
                                                <div class="col-6">
                                                    <input name={{ $item->id . 'colorqty' }} style="height: 30px"
                                                        placeholder="quantity" type="number"
                                                        class="form-control rounded-0">
                                                </div>
                                                <div class="col-6">
                                                    <input name={{ $item->id . 'colorprice' }} style="height: 30px"
                                                        placeholder="price" type="number"
                                                        class="form-control rounded-0">
                                                </div>
                                            </div>
                                        </div>
                                    @endforeach
                                </div>

                            </div>
                            <div class="border-bottom">
                                <h5 class="mt-3">Size</h5>
                                @foreach ($sizes as $item)
                                    <div class="form-check">
                                        <input class="form-check-input change-checkbox" name="sizes[]" type="checkbox"
                                            value="{{ $item->id }}" id="{{ $item->name }}">
                                        <label class="form-check-label" for="{{ $item->name }}">
                                            {{ $item->name }}
                                        </label>
                                        <div class="row change-value">
                                            <div class="col-6">
                                                <input style="height: 30px" name={{ $item->id . 'sizeqty' }}
                                                    placeholder="quantity" type="number" class="form-control rounded-0">
                                            </div>
                                            <div class="col-6">
                                                <input style="height: 30px" name={{ $item->id . 'sizeprice' }}
                                                    placeholder="price" type="number" class="form-control rounded-0">
                                            </div>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </div>

                    </div>
                    <div class="col-md-12 mt-2">
                        <div class="bg-white p-4 rounded">
                            <h5>Product Details</h5>
                            <div class="">
                                <textarea placeholder="" style="min-height: 40px" class="form-control" name="detail" id="detail"
                                    cols="30" rows="5"></textarea>
                                <span class="text-danger alert" style="font-size: 12px"></span>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-12">
                        <button class="btn btn-success px-3 w-100 mt-5" type="submit">Thêm</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endsection
@section('script')
    <script>
        // $(document).ready(function() {
        //     validateInput(['#name', '#price', '#qty', '#brand', '#category', '#metakey', '#metades', '#detail'],
        //         'Vui lòng nhập trường này');
        //     validateNumber(['#price', '#qty', '#pricesale']);
        //     validationName('product', '#name');
        //     $('#create').submit(function(e) {
        //         let fieldIds = ['name', 'brand', 'category', 'qty', 'price', 'metakey', 'metades', 'detail']
        //         handleSubmit(e, fieldIds, 'vui lòng nhập trường này', '#name')
        //     });
        // });
    </script>
    <script>
      
        function displayImages(input) {
            var imageContainer = document.getElementById('imageContainer');
            imageContainer.innerHTML = ''; // Xóa các hình ảnh hiện có
            if (input.files && input.files.length > 0) {
                for (var i = 0; i < input.files.length; i++) {
                    var reader = new FileReader();
                    var image = document.createElement('img');
                    reader.onload = (function(image) {
                        return function(e) {
                            image.src = e.target.result;
                            image.style.maxWidth = '200px';
                            image.style.maxHeight = '200px';
                            imageContainer.appendChild(image);
                        };
                    })(image);

                    reader.readAsDataURL(input.files[i]);
                }
            }
        }
    </script>
@endsection
