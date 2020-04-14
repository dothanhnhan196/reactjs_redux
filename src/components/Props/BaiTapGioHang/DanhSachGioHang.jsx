import React, { Component } from 'react'
import SanPhamGioHang from './SanPhamGioHang';

export default class DanhSachGioHang extends Component {

    renderDSSP = () => {
        let { xemChiTietSP, mangSanPham, themGioHang } = this.props;
        return mangSanPham.map((sanPham, index) => {
            return (
                <SanPhamGioHang key={index} sanPham={sanPham} xemChiTietSPGH={xemChiTietSP} themGioHangSP={themGioHang} />
            )
        })
    }

    render() {
        return (
            <div className="row">
                {this.renderDSSP()}
            </div>
        )
    }
}
