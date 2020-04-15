import React, { Component } from 'react'
import SanPhamRedux from './SanPhamRedux'
import phoneData from '../../data/phoneData.json'

export default class DanhSachSPRedux extends Component {

    // viết phương thức render sản phẩm
    renderSanPham = () => {
        return phoneData.map((sanPham, index) => {
            return (
                <div className="col-4" key={index}>
                    <SanPhamRedux sanPham={sanPham} />
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h3 className="text-sucess">Danh sách sản phẩm</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>
            </div>
        )
    }
}
