import React, { Component } from 'react'
import { connect } from 'react-redux' // kết nối reactComponet tới reduxStore

class ModalGioHangRedux extends Component {

    renderGioHang = () => {
        let { gioHang } = this.props
        return gioHang.map((spGH, index) => {
            return (
                <tr key={index}>
                    <td>{spGH.maSP}</td>
                    <td>{spGH.tenSP}</td>                    
                    <td><img src={spGH.hinhAnh} alt="phone" width={75} height={75}/></td>
                    <td>{(spGH.giaBan).toLocaleString()}</td>
                    <td>{spGH.soLuong}</td>
                    <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
                </tr>
            )
        })
    }

    render() {
        // this.props.gioHang là thuộc tính nhận từ redux store
        console.log(this.props.gioHang)
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
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
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

export default connect(mapStateToProps, null)(ModalGioHangRedux)
