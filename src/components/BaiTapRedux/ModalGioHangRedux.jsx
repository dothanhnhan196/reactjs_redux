import React, { Component } from 'react'
import { connect } from 'react-redux' // kết nối reactComponet tới reduxStore

class ModalGioHangRedux extends Component {

    renderGioHang = () => {
        let { gioHang, xoaGioHang, tangGiamSoLuong } = this.props
        return gioHang.map((spGH, index) => {
            return (
                <tr key={index}>
                    <td>{spGH.maSP}</td>
                    <td>{spGH.tenSP}</td>
                    <td><img src={spGH.hinhAnh} alt="phone" width={75} height={75} /></td>
                    <td>{(spGH.giaBan).toLocaleString()}</td>
                    <td>
                        <button className="mr-1" onClick={() => tangGiamSoLuong(spGH.maSP, true)}>+</button>
                        {spGH.soLuong}
                        <button className="ml-1" onClick={() => tangGiamSoLuong(spGH.maSP, false)}>-</button>
                    </td>
                    <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
                    <td>
                        <div className="btn btn-outline-danger" onClick={() => xoaGioHang(spGH.maSP)}>X</div>
                    </td>
                </tr>
            )
        })
    }

    render() {

        let tongTien = this.props.gioHang.reduce((tongTien, spGH) => {
            return tongTien += spGH.soLuong * spGH.giaBan
        }, 0).toLocaleString()
        
        // this.props.gioHang là thuộc tính nhận từ redux store
        // console.log(this.props.gioHang)
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã sp</th>
                            <th>Tên sp</th>
                            <th>Hình ảnh</th>
                            <th>Giá bán</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan='5'></td>
                            <td>Tổng tiền: {tongTien}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

// state: là store tổng => truy xuất đến gioHangReducer => biến state trên GioHangReducer(gioHang)
const mapStateToProps = (state) => {
    return {
        gioHang: state.GioHangReducer.gioHang // tạo ra 1 props của Component
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // xoaGioHang: (index) => {
        //     const action = {
        //         type: 'XOA_GIO_HANG',
        //         index
        //     }
        //     dispatch(action)
        // }
        xoaGioHang: (maSP) => {
            const action = {
                type: 'XOA_GIO_HANG',
                maSP
            }
            dispatch(action)
        },
        tangGiamSoLuong: (maSP, tangGiam) => {
            const action = {
                type: 'TANG_GIAM_SL',
                maSP,
                tangGiam
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalGioHangRedux)
