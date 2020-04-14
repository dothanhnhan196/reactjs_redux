import React, { Component } from 'react'
import ModalGioHang from './ModalGioHang'
import DanhSachGioHang from './DanhSachGioHang'
import phoneData from '../../../data/phoneData.json'

export default class BaiTapGioHang extends Component {

    constructor(props) {
        super(props);
        this.state = {
            spChiTiet: phoneData[2],
            gioHang: []
        }
    }

    xemChiTietSP = (sanPham) => {
        this.setState({
            spChiTiet: sanPham
        })
    }

    themGioHang = (spChon) => {

        // B1: từ sp được chọn tạo ra sp giỏ hàng
        let spGioHang = {
            "maSP": spChon.maSP,
            "hinhAnh": spChon.hinhAnh,
            "tenSP": spChon.tenSP,
            "soLuong": 1,
            "giaBan": spChon.giaBan
        }

        // kiểm tra spChon có trong giỏ hàng chưa
        var gioHangCapNhat = [...this.state.gioHang]
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === spGioHang.maSP);
        if (index !== -1) {
            // sản phẩm được click có trong this.state.gioHang
            gioHangCapNhat[index].soLuong += 1
        } else {
            // sản phẩm được click chưa có trong this.state.gioHang
            gioHangCapNhat.push(spGioHang)
        }

        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    xoaGioHang = (maSP) => {
        // tìm trong giỏ hàng có chứa sp chứa maSP được click thì xóa nó đi
        // var gioHangCapNhat = [...this.state.gioHang]
        // let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP);
        // if (index !== -1) {
        //     gioHangCapNhat.splice(index, 1)
        // }

        var gioHangCapNhat = this.state.gioHang.filter(sp => sp.maSP !== maSP)

        this.setState({
            gioHang: gioHangCapNhat
        })

    }

    tangGiamSoLuong = (maSP, tangGiam) => {
        // tangGiam == true: tăng số lượng | giảm số lượng | không giảm quá 1
        var gioHangCapNhat = [...this.state.gioHang]
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP)
        if (tangGiam) {
            gioHangCapNhat[index].soLuong += 1
        } else {
            if (gioHangCapNhat[index].soLuong > 1) {
                gioHangCapNhat[index].soLuong -= 1
            }
        }

        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    render() {
        let { spChiTiet } = this.state;
        let tongSL = this.state.gioHang.reduce((tsl, spGH) => {
            return tsl += spGH.soLuong;
        }, 0)

        return (
            <div className="container">
                <h3 className="text-center text-success">Bài tập Giỏ hàng</h3>
                <ModalGioHang gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong}/>
                <div className="btn btn-danger btn-sm mb-2" data-toggle="modal" data-target="#modelId">giỏ hàng ({tongSL})</div>
                <DanhSachGioHang mangSanPham={phoneData} xemChiTietSP={this.xemChiTietSP} themGioHang={this.themGioHang} />
                <div className="row mt-4">
                    <div className="col-5">
                        <h3 className="text-center">{spChiTiet.tenSP}</h3>
                        <img src={spChiTiet.hinhAnh} alt="phone" width={400} height={350} />
                    </div>
                    <div className="col-7">
                        <h3 className="text-center">Thông số kĩ thuật</h3>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Màn hình</th>
                                    <td>{spChiTiet.manHinh}</td>
                                </tr>
                                <tr>
                                    <th>Hệ điều hành</th>
                                    <td>{spChiTiet.heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <th>Camera trước</th>
                                    <td>{spChiTiet.cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <th>Camera sau</th>
                                    <td>{spChiTiet.cameraSau}</td>
                                </tr>
                                <tr>
                                    <th>RAM</th>
                                    <td>{spChiTiet.ram}</td>
                                </tr>
                                <tr>
                                    <th>ROM</th>
                                    <td>{spChiTiet.rom}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
