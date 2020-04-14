import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        let {phone, xemChiTiet} = this.props;
        let { hinhAnh, tenSP } = this.props.phone;

        return (
            <div className="col-4">
                <div className="card bg-dark text-white">
                    <img className="card-img-top" src={hinhAnh} alt="phone" width={250} height={300} />
                    <div className="card-body">
                        <h4 className="card-title">{tenSP}</h4>
                        <div className="btn btn-success" onClick={() => xemChiTiet(phone)}>Xem chi tiết</div>
                    </div>
                </div>
            </div>
        )
    }
}
