@extends('layout.admin')
@section('title', 'Admin | Thương hiệu')
@section('crumb')
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li class="breadcrumb-item text-sm"><a class="opacity-5 text-white" href="{{ route('dashboard') }}">Admin</a></li>
            <li class="breadcrumb-item text-sm text-white active" aria-current="page">Thương hiệu</li>
        </ol>
    </nav>
@endsection
@section('content')

    <div class="container-fluid py-4">
        <div class="row">
            <div class="col-12">
                <div class="card mb-4">
                    <div class="card-header pb-0 d-flex justify-content-between">
                        <h6>Danh sách đơn hàng đã nhập</h6>
                        <a class="btn" href="{{ route('brand.create') }}">THÊM</a>
                    </div>
                    <div class="card-body px-0 pt-0 pb-2">
                        <div class="table-responsive p-0">
                            <table id="datatable" class="table table-hover align-items-center mb-0">
                                <thead>
                                    <tr>
                                        <th
                                            class="text-uppercase text-center text-secondary text-xxs font-weight-bolder opacity-7">
                                            mã đơn hàng</th>
                                        <th
                                            class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                            nội dung nhập hàng</th>
                                        <th
                                            class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                            ghi chú</th>
                                        <th
                                            class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                            người nhập</th>
                                        <th
                                            class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                            ngày tạo</th>
                                        <th class="text-secondary opacity-7">

                                        </th>

                                        <th
                                            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                            #</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($listInvoice as $item)
                                        <tr>
                                            <td class="align-middle text-center">
                                                {{ $item->id }}
                                            </td>

                                            <td class="align-middle text-center text-xs">
                                                {{ $item->content }}
                                            </td>
                                            <td class="align-middle text-center text-xs">
                                                {{ $item->note }}
                                            </td>
                                            <td class="align-middle text-center">
                                                <span class="text-secondary text-xs font-weight-bold">
                                                    {{ $item->created_by }}
                                                </span>
                                            </td>
                                            <td class="align-middle text-center">
                                                <span class="text-secondary text-xs font-weight-bold">
                                                    {{ $item->created_at }}
                                                </span>
                                            </td>
                                            <td class="align-middle">
                                                <button type="button" class=" bg-transparent border-0 " data-bs-toggle="modal"
                                                    data-bs-target="#staticBackdrop{{ $item->id }}">
                                                    <i class="text-danger fa-solid fa-eye"></i>

                                                </button>
                                                <a href="{{ route('brand.edit', ['brand' => $item->id]) }}"
                                                    class="p-3 text-secondary" data-toggle="tooltip"
                                                    data-original-title="Edit user">
                                                    <i class="fs-6 fa-solid fa-pen"></i>
                                                </a>
                                                <a class="py-2 delete" data-id="{{ $item->id }}"
                                                    style="cursor: pointer">
                                                    <i class="text-danger fa-solid fa-trash-can"></i>
                                                </a>

                                            </td>

                                            <td class="align-middle ">
                                                <a href="" class="text-secondary font-weight-bold text-xs"
                                                    data-toggle="tooltip" data-original-title="Edit user">
                                                    <input type="checkbox" value="{{ $item->id }}" name=""
                                                        class="deletes" id="">
                                                </a>
                                            </td>
                                        </tr>
                                        <div class="modal fade " id="staticBackdrop{{ $item->id }}"
                                            data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                                            aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                            <div class="modal-dialog  modal-lg bg-white rounded-sm">
                                                <div>
                                                    <div class="modal-content p-2 border-0 rounded-2 ">
                                                        <div id="print-element">
                                                            <p style="font-size: 13px">Công ty TNHH 1 Mình tao</p>
                                                            <div class="border-bottom border-secondary">
                                                                <h1 class=" text-center fs-5" id="exampleModalLabel">chi
                                                                    tiết
                                                                    phiếu nhập hàng</h1>
                                                                {{-- <button type="button" class="btn-close text-danger" data-bs-dismiss="modal"
                                                                aria-label="Close">x</button> --}}
                                                            </div>
                                                            <div class="modal-body">
                                                                <ul style="list-style: none" class="p-0 m-0">
                                                                    <li>Mã đơn hàng: {{ $item->id }}</li>
                                                                    <li>Nội dung: {{ $item->content }}</li>
                                                                    <li>Ghi chú: {{ $item->note }}</li>
                                                                    <li>Người nhập: {{ $item->created_by }}</li>
                                                                    <li>Ngày tạo: {{ $item->created_at }}</li>
                                                                </ul>
                                                                <div class="mt-4">
                                                                    <div class="row" style="background: #00000030">
                                                                        <div class=" border text-center col-1">id</div>
                                                                        <div class=" border text-center col-4">tên sản phẩm
                                                                        </div>
                                                                        <div class=" border text-center col">nhà cung cấp
                                                                        </div>
                                                                        <div class=" border text-center col">số lượng</div>
                                                                        <div class=" border text-center col">đơn giá</div>
                                                                        <div class=" border text-center col">tổng tiền</div>
                                                                    </div>
                                                                    @php $sum = 0; @endphp
                                                                    @foreach ($item->details as $detail)
                                                                        <div class="row  border">
                                                                            @php $sum += $detail->amount; @endphp
                                                                            <div class="border text-center col-1">
                                                                                {{ $detail->id }}</div>
                                                                            <div class="border text-center col-4">
                                                                                {{ $detail->product->name }}</div>
                                                                            <div class="border text-center col">
                                                                                {{ $detail->supplier->name }}</div>
                                                                            <div class="border text-center col">
                                                                                {{ $detail->quantity }}</div>
                                                                            <div class="border text-center col">
                                                                                {{ $detail->price }}</div>
                                                                            <div class="border text-center col">
                                                                                {{ $detail->amount }}</div>
                                                                        </div>
                                                                    @endforeach
                                                                    <div class="row border py-2">
                                                                        <div class="col-8 text-center font-weight-bold">
                                                                            Tổng giá trị nhập hàng
                                                                        </div>
                                                                        <div
                                                                            class="col-4 text-end font-weight-bold text-danger">
                                                                            @php echo number_format($sum) @endphp đ</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="text-end mb-5">
                                                                <p style="text-align: end"
                                                                    class="text-align-end font-weight-bold me-4">Người xuất
                                                                    hoá
                                                                    đơn</p>

                                                                <p style="text-align: end" class="text-right me-5">(ký rõ họ
                                                                    tên)</p>
                                                            </div>
                                                        </div>

                                                        <div class="modal-footer bg-white">
                                                            <button class="btn btn-primary" onclick="handleClickPrint()">In</button>
                                                            <button type="button" class="btn btn-secondary"
                                                                data-bs-dismiss="modal">Close</button>
                                                            
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    @endforeach
                                </tbody>
                            </table>
                            <style>
                                @media print {
                                    body * {
                                        visibility: hidden;
                                    }
                                  
                                    #print-element,
                                    #print-element * {
                                        visibility: visible;
                                    }

                                    #print-element {
                                        position: absolute;
                                        left: 0;
                                        top: 0;
                                    }
                                }
                            </style>
                            <script>
                                function handleClickPrint() {
                                    window.print();
                                }
                            </script>
                            <ul style="list-style: none;" class="d-flex mt-3">
                                <li class="mx-2 "><b>Chức năng: </b></li>
                                <li class="mx-2  "><button class="text-danger" style="border:none;background: none;"
                                        id="btnDelete">Thêm vô thùng rác <i class="fa-regular fa-trash-can"></i></button>
                                </li>
                                <li class="mx-2"> <a class="text-success" href="{{ route('brand.create') }}">Tạo
                                        mới</a>
                                </li>

                            </ul>
                            <p class="text-center"></p>

                            <a href="{{ route('brand.trash') }}" class="float-end btn my-3" type="submit">Thùng rác</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('script')
    <script src="{{ asset('js/admin/index.js') }}"></script>
    <script>
        setHandleClick('brand')
    </script>
@endsection
