import React, { Component } from 'react'
import { connect } from 'react-redux'

class SanPhamChiTietRedux extends Component {
    render() {
        let {spChiTiet} = this.props;
        return (
            <div>
                <div className="row mt-5">
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
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        spChiTiet: state.GioHangReducer.spChiTiet
    }
}

export default connect(mapStateToProps, null)(SanPhamChiTietRedux)
