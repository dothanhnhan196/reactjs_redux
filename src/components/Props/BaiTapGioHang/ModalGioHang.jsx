import React, { Component } from 'react'

export default class ModalGioHang extends Component {

    renderModalGH = () => {
        let { gioHang, xoaGioHang, tangGiamSoLuong } = this.props;
        return gioHang.map((spGH, index) => {
            return (
                <tr key={index}>
                    <td>{spGH.maSP}</td>
                    <td><img src={spGH.hinhAnh} alt="imgModal" width={70} height={70} /></td>
                    <td>{spGH.tenSP}</td>
                    <td>
                        <button className="mr-1" onClick={() => tangGiamSoLuong(spGH.maSP, true)}>+</button>
                        {spGH.soLuong}
                        <button className="ml-1" onClick={() => tangGiamSoLuong(spGH.maSP, false)}>-</button>
                    </td>
                    <td>{spGH.giaBan.toLocaleString()}</td>
                    <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
                    <td>
                        <div className="btn btn-danger mr-2" onClick={() => xoaGioHang(spGH.maSP)}>Xóa</div>
                    </td>
                </tr>
            )
        })
    }

    render() {

        let tongTien = this.props.gioHang.reduce((tongTien, spGioHang) => {
            return tongTien += spGioHang.soLuong * spGioHang.giaBan
        }, 0).toLocaleString()

        return (
            <div>
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content" style={{ width: '1000px' }}>
                            <div className="modal-header">
                                <h5 className="modal-title">Giỏ hàng</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <td>Mã SP</td>
                                            <td>Hình ảnh</td>
                                            <td>Tên SP</td>
                                            <td>Số lượng</td>
                                            <td>Đơn giá</td>
                                            <td>Thành tiền</td>
                                            <td>Tính năng</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderModalGH()}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan='5'></td>
                                            <td>Tổng tiền: {tongTien}</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
