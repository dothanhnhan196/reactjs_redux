import React, { Component } from 'react'
import { connect } from 'react-redux'

class SanPhamRedux extends Component {
    render() {
        let { sanPham } = this.props;
        return (
            <div>
                <div className="card text-white bg-dark">
                    <img className="card-img-top" src={sanPham.hinhAnh} alt="phone" width={150} height={300} />
                    <div className="card-body">
                        <h4 className="card-title">{sanPham.tenSP}</h4>
                        <p className="card-text">{(sanPham.giaBan).toLocaleString()}</p>
                        <div className="btn btn-success btn-sm mr-3" onClick={() => this.props.chiTietSanPham(sanPham)}>Chi tiết  sản phẩm</div>
                        <div className="btn btn-danger btn-sm" onClick={() => this.props.themGioHang(sanPham)}>Thêm sản phẩm</div>
                    </div>
                </div>
            </div>
        )
    }
}

// xây dựng hàm tạo ra props là hàm xử lí sự kiện => đưa dữ liệu lên store
const mapDispatchToProps = (dispatch) => {
    return {
        // tạo ra props component (là fuction) => đưa dữ liệu lên reducer
        themGioHang: (sanPham) => {
            const spGioHang = {
                maSP: sanPham.maSP,
                tenSP: sanPham.tenSP,
                giaBan: sanPham.giaBan,
                soLuong: sanPham.soLuong,
                hinhAnh: sanPham.hinhAnh
            }
            // tạo action đưa dữ liệu lên reducer
            const action = {
                type: 'THEM_GIO_HANG', // bắt buộc đặt tên type
                spGioHang // nội dung gửi lên reducer
            }
            // dùng hàm dispatch để đưa dữ liệu lên reducer
            dispatch(action)
        },
        chiTietSanPham: (spChiTiet) => {
            const action = {
                type: 'SAN_PHAM_CHI_TIET',
                spChiTiet
            }
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps)(SanPhamRedux)
