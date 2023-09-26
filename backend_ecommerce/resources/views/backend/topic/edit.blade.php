@extends('layout.admin')
@section('title', 'Admin | Cập nhật bài viết')

@section('content')
<div class="container-fluid py-4">
    <div class="bg-white border-radius-2xl p-5">
    <a href="{{ route('topic.index') }}" class="fs-6">Quay lại</a>
        <div class="">
            <h4 class="text-center mb-4">Cập nhật chủ đề bài viết</h4>
            
        </div>
        <form action="{{ route('topic.update',['topic'=>$topic->id]) }}" id="create" method="post"enctype="multipart/form-data">
            @csrf
            @method('put')
            <div class="row">
                <div class="col-md-6">
                    <label for="" class="form-label">Tên chủ đề bài viết <span class="text-danger">*</span></label>
                    <input name="name" value="{{ $topic->name }}" id="name" type="text" class="form-control" placeholder="Tên chủ đề bài viết">
                    <span class="text-danger alert" style="font-size: 12px"></span>
                </div>
                <div class="col-md-6">
                    <label for="" class="form-label">Cấp cha <span class="text-danger">*</span></label>
                    <select name="parent_id" class="form-select" id="parent_id">
                        <option selected disabled value="">Chọn cấp cha</option>
                        <option value="0">Không có cấp cha</option>
                        @foreach ($topics as $item)
                            <option {{ $topic->parent_id == $item->id ? 'selected' : '' }} class="text-capitalize"
                                value="{{ $item->id }}">{{ $item->name }}
                            </option>
                        @endforeach
                    </select>
                    <span class="text-danger alert" style="font-size: 12px"></span>
                </div>
                
                <div class="col-md-6">
                    <label for="" class="form-label my-2">Từ khóa tìm kiếm <span
                            class="text-danger">*</span></label>
                    <input type="text" value="{{ $topic->metakey }}" placeholder="ví dụ: sản phẩm đến từ tương lai" class="form-control"
                        name="metakey" id="metakey">
                    <span class="text-danger alert" style="font-size: 12px"></span>
                </div>
                
                <div class="col-md-6">
                    <label for="status" class="form-label">Trạng thái <span class="text-danger">*</span></label>
                    <select name="status" class="form-select" id="status">
                        <option {{ $topic->status ==2 ? 'selected':'' }} value="2">Hiện</option>
                        <option {{ $topic->status ==1 ? 'selected':'' }}  value="1">Ẩn</option>
                    </select>
                    <span class="text-danger alert" style="font-size: 12px"></span>
                </div>
                <div class="col-md-12">
                    <label for="" class="form-label my-2">Mô tả tìm kiếm <span
                            class="text-danger">*</span></label>
                    <textarea
                        placeholder="ví dụ: Mua giày online với giá cả hợp lý tại cửa hàng của chúng tôi! Chúng tôi cung cấp những kiểu giày mới nhất, chất lượng tốt nhất và đa dạng về kiểu dáng. Hãy khám phá bộ sưu tập của chúng tôi ngay hôm nay và tìm cho mình đôi giày ưng ý nhất!"
                        style="min-height: 40px" class="form-control" name="metades" id="metades" cols="30" rows="5">{{ $topic->metadesc }}</textarea>
                    <span class="text-danger alert" style="font-size: 12px"></span>
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
    $(document).ready(function() {
            validateInput(['#name', '#parent_id','#metakey','#metades'], 'Vui lòng nhập trường này');
            $('#create').submit(function(e) {
                let fieldIds = ['name', 'parent_id', 'metakey', 'metades']
                handleSubmit(e, fieldIds, 'vui lòng nhập trường này')
            });
        });
</script>
@endsection