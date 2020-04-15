import phoneData from '../../data/phoneData.json'
// khởi tạo giá trị ban đầu của store
const stateGioHang = {
    gioHang: [{
        "maSP": 1,
        "tenSP": "VinSmart Live",
        "manHinh": "AMOLED, 6.2\", Full HD+",
        "heDieuHanh": "Android 9.0 (Pie)",
        "cameraTruoc": "20 MP",
        "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 5700000,
        "hinhAnh": "./img/vsphone.jpg",
        "soLuong": 1
    }],
    spChiTiet: phoneData[0]
}

export const GioHangReducer = (state = stateGioHang, action) => {
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            // xử lí logic thêm giỏ hàng
            let gioHangCapNhat = [...state.gioHang]
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.spGioHang.maSP)
            if (index !== -1) {
                gioHangCapNhat[index].soLuong += 1
            } else {
                gioHangCapNhat.push(action.spGioHang)
            }
            state.gioHang = gioHangCapNhat;
            return { ...state }
        }
        case 'SAN_PHAM_CHI_TIET': {
            state.spChiTiet = action.spChiTiet
            return {...state}
        }
        default:
            break;
    }
    return { ...state }
}