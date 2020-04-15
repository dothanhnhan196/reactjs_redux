import React, { Component } from 'react'
import ModalGioHangRedux from './ModalGioHangRedux'
import DanhSachSPRedux from './DanhSachSPRedux'
import SanPhamChiTietRedux from './SanPhamChiTietRedux'

export default class BaiTapGioHangRedux extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="text-center text-danger">Bài tập giỏ hàng Redux</h3>
                <ModalGioHangRedux />
                <DanhSachSPRedux />
                <SanPhamChiTietRedux />
            </div>
        )
    }
}
