@extends('layout.admin')
@section('title', 'Admin | Thêm thương hiệu')

@section('css')
    <link rel="stylesheet" href="{{ asset('froala_editor/css/froala_editor.min.css') }}">
    <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />

    <style>
        .ck-editor__editable[role="textbox"] {
            /* editing area */
            min-height: 200px;
        }

        .ck-content .image {
            /* block images */
            max-width: 80%;
            margin: 20px auto;
        }
    </style>
@endsection
@section('content')
    <div class="container-fluid py-4">
        <div class="bg-white border-radius-2xl p-5">
            <a href="{{ route('invoice.index') }}" class="fs-6">Quay lại</a>
            <div class="">
                <h4 class="text-center mb-4">Nhập hàng</h4>

            </div>
            <form action="{{ route('invoice.store') }}" id="create" method="post"enctype="multipart/form-data">
                @csrf
                <div class="row">
                    <div class="col-md-12">
                        <label for="" class="form-label">Nội dung<span class="text-danger">*</span></label>
                        <textarea class="form-control" name="content" id="" cols="30" rows="3">

                        </textarea>

                        <span class="text-danger alert" style="font-size: 12px"></span>
                    </div>
                    <div class="col-md-12">
                        <label for="sort_order" class="form-label">Ghi chú<span class="text-danger">*</span></label>
                        <textarea class="form-control" name="note" id="" cols="30" rows="3">
                        </textarea>
                        <span class="text-danger alert" style="font-size: 12px"></span>
                    </div>
                    <div id="edit"></div>
                    <div class="col-md-12">
                        <button class="btn btn-success px-3 w-100 mt-5" type="submit">Thêm</button>
                    </div>
                </div>
                <div class="row">
                    <h4>Du liệu nhập hàng</h4>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Sản phẩm</th>
                                <th>Nhà cung cấp</th>
                                <th>Số lượng</th>
                                <th>Đơn giá</th>
                                <th>Ngày sản xuất</th>
                                <th>Tổng tiền</th>
                                <th>Xoá</th>
                            </tr>
                        </thead>
                        <tbody id="add-product">
                            <tr>
                                <td>
                                    <select style="width: 150px" id="select-state" class="select form-control"
                                        placeholder="Pick a state...">
                                        @foreach ($products as $item)
                                            <option value="{{ $item->id }}">{{ $item->name }}</option>
                                        @endforeach
                                    </select>
                                </td>
                                <td>
                                    <select style="width: 150px" id="select-state2"
                                        class="select form-control js-example-basic-single" placeholder="Pick a state...">
                                        @foreach ($supplier as $item)
                                            <option value="{{ $item->id }}">{{ $item->name }}</option>
                                        @endforeach
                                    </select>
                                </td>
                                <td>
                                    <input type="number" class="form-control w-50">
                                </td>
                                <td>
                                    <input type="number" class="form-control w-75">
                                </td>
                                <td>
                                    <input type="date" class="form-control w-75">
                                </td>
                                <td class="text-center">
                                    111111
                                </td>
                                <td class="text-center">
                                    <span><i class="fa-regular fa-trash-can"></i></span>
                                </td>
                            </tr>

                        </tbody>

                    </table>
                    <div>
                        <div class="d-flex justify-content-end">
                            <span id="btn-new" class="btn">thêm</span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endsection
@section('script')
    <script src="{{ asset('froala_editor/js/froala_editor.min.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
    <script type="text/javascript" src='https://cdn.tiny.cloud/1/no-api-key/tinymce/6/tinymce.min.js'></script>
    <script src="https://cdn.tiny.cloud/1/pkujmrtdapk72uundfzjrz4n8oyk7317vzss52lu4wpm94pj/tinymce/6/tinymce.min.js"
        referrerpolicy="origin"></script>
    <script>
        tinymce.init({
            selector: '#metades',
            plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
            tinycomments_mode: 'embedded',
            tinycomments_author: 'Author name',
            mergetags_list: [{
                    value: 'First.Name',
                    title: 'First Name'
                },
                {
                    value: 'Email',
                    title: 'Email'
                },
            ]
        });
        $(document).ready(function() {
            validateInput(['#name', '#sort_order', '#metakey', '#metades'], 'Vui lòng nhập trường này');
            $('#create').submit(function(e) {
                let fieldIds = ['name', 'sort_order', 'metakey', 'metades']
                handleSubmit(e, fieldIds, 'vui lòng nhập trường này')
            });
        });
        $(document).ready(function() {
            $('.select').select2();
        });
    </script>

@endsection
