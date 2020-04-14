import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import phoneData from '../../data/phoneData.json'

export default class BaiTapComponent extends Component {
    render() {
        return (
            <div>
                <DanhSachSanPham phone={phoneData}/>  
            </div>
        )
    }
}
