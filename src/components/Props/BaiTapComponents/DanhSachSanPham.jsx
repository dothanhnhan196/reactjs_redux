import React, { Component } from 'react'
import phoneData from '../../data/phoneData.json'
import SanPham from './SanPham';

export default class DanhSachSanPham extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sanPhamChiTiet: phoneData[0]
        }
    }

    renderSanPham = () => {
        return phoneData.map((phone, index) => {
            return (
                <SanPham key={index} phone={phone} xemChiTiet={this.xemChiTiet} />
            )
        })
    }

    xemChiTiet = (phone) => {
        this.setState({
            sanPhamChiTiet: phone
        })
    }

    render() {
        let { sanPhamChiTiet } = this.state;
        return (
            <div className="container mt-2">
                <h1 className="text-center text-success">Bài tập truyền Props</h1>
                <div className="row">
                    {this.renderSanPham()}
                </div>
                <div className="row mt-5">
                    <div className="col-5">
                        <h3 className="text-center">{sanPhamChiTiet.tenSP}</h3>
                        <img src={sanPhamChiTiet.hinhAnh} alt="phoneImg" width={400} height={450} />
                    </div>
                    <div className="col-7">
                        <h3 className="text-center">Thông số kĩ thuật</h3>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Màn hình</th>
                                    <td>{sanPhamChiTiet.manHinh}</td>
                                </tr>
                                <tr>
                                    <th>Hệ diều hành</th>
                                    <td>{sanPhamChiTiet.heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <th>Camera trước</th>
                                    <td>{sanPhamChiTiet.cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <th>Camera sau</th>
                                    <td>{sanPhamChiTiet.cameraSau}</td>
                                </tr>
                                <tr>
                                    <th>RAM</th>
                                    <td>{sanPhamChiTiet.ram}</td>
                                </tr>
                                <tr>
                                    <th>ROM</th>
                                    <td>{sanPhamChiTiet.rom}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
