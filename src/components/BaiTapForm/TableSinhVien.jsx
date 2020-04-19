import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableSinhVien extends Component {

    state

    renderSinhVien = () => {
        let { mangSinhVien } = this.props;
        return mangSinhVien.map((sinhVien, index) => {
            return (
                <tr key={index}>
                    <td>{sinhVien.maSV}</td>
                    <td>{sinhVien.hoTen}</td>
                    <td>{sinhVien.soDienThoai}</td>
                    <td>{sinhVien.email}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>Mã SV</th>
                            <th>họ tên </th>
                            <th>Số điện thoại </th>
                            <th>Email </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderSinhVien()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProp = (state) => {
    return {
        mangSinhVien: state.QuanLiSinhVienReducer.mangSinhVien
    }
}

export default connect(mapStateToProp, null)(TableSinhVien)
