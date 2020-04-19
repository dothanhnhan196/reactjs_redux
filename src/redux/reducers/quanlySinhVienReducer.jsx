const stateDefault = {
    mangSinhVien: [
        { maSV: 1, hoTen: 'Đỗ Thành Nhân', soDienThoai: '016969', email: 'dothanhnhan196@gmail.com' }
    ]
}

export const QuanLiSinhVienReducer = (state = stateDefault, action) => {
    return { ...state }
}