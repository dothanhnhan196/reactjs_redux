import React, { Component } from 'react'

export default class FormSinhVien extends Component {

    state = {
        maSV: '',
        hoTen: '',
        soDienThoai: '',
        email: ''
    }

    handleOnchange = (e) => {
        // lấy giá trị mỗi lần value input thay đổi bởi người dùng
        let tagInput = e.target;
        let { name, value } = tagInput

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header bg-dark text-white"><h3>Thông tin sinh viên</h3></div>
                    <div className="card-body">
                        <form action="">
                            <div className="row">
                                <div className="form-group col-6">
                                    <span>Mã sinh viên</span>
                                    <input className="form-control" name="maSV" value={this.state.maSV} onChange={this.handleOnchange} />
                                </div>
                                <div className="form-group col-6">
                                    <span>Họ Tên</span>
                                    <input className="form-control" name="hoTen" value={this.state.hoTen} onChange={this.handleOnchange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-6">
                                    <span>Số điện thoại</span>
                                    <input className="form-control" name="soDienThoai" value={this.state.soDienThoai} onChange={this.handleOnchange} />
                                </div>
                                <div className="form-group col-6">
                                    <span>Email</span>
                                    <input className="form-control" name="email" value={this.state.email} onChange={this.handleOnchange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-right">
                                    <button className="btn btn-success">Thêm sinh viên</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
