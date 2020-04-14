import React, { Component } from 'react'

export default class SanPhamGioHang extends Component {
    render() {
        let { sanPham, xemChiTietSPGH, themGioHangSP } = this.props;
        return (
            <div className="col-4">
                <div className="card bg-dark text-white">
                    <img className="card-img-top" src={sanPham.hinhAnh} width={250} height={300} alt="imgSPGH"/>
                    <div className="card-body">
                        <h4 className="card-title">{sanPham.tenSP}</h4>
                        <button className="btn btn-success mr-3" onClick={() => xemChiTietSPGH(sanPham)}>Xem chi tiết</button>
                        <button className="btn btn-danger" onClick={() => themGioHangSP(sanPham)}>Thêm giỏ hàng</button>
                    </div>
                </div>
            </div>
        )
    }
}
