import React, { Component } from 'react'


export default class FormSinhVien extends Component {

    state = {
        values: {
            maSV: '',
            hoTen: '',
            soDienThoai: '',
            email: ''
        },
        errors: {
            maSV: '',
            hoTen: '',
            soDienThoai: '',
            email: ''
        }

    }

    handleOnchange = (e) => {
        // lấy giá trị mỗi lần value input thay đổi bởi người dùng
        let tagInput = e.target;
        let { name, value, type, pattern } = tagInput
        let errorMessage = ''


        // kiểm tra rỗng
        if (value.trim() === '') {
            errorMessage = name + ' không được bỏ trống'
        }

        // kiểm tra email
        if (type === 'email') {
            let regex = new RegExp(pattern)
            if (!regex.test(value)) {
                errorMessage = name + ' không đúng định dạng'
            }
        }

        // kiểm tra số điện thoại
        if (name === "soDienThoai") {
            let regex = new RegExp(pattern)
            if (!regex.test(value)) {
                errorMessage = name + ' không đúng định dạng'
            }
        }

        let values = { ...this.state.values, [name]: value } // cập nhật giá trị value cho state
        let errors = { ...this.state.errors, [name]: errorMessage } // cập nhật lỗi cho state

        this.setState({
            values,
            errors
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
                                    <input className="form-control" name="maSV" value={this.state.values.maSV} onChange={this.handleOnchange} />
                                    <p className="text-danger">
                                        {this.state.errors.maSV}
                                    </p>
                                </div>
                                <div className="form-group col-6">
                                    <span>Họ Tên</span>
                                    <input className="form-control" name="hoTen" value={this.state.values.hoTen} onChange={this.handleOnchange} />
                                    <p className="text-danger">
                                        {this.state.errors.hoTen}
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-6">
                                    <span>Số điện thoại</span>
                                    <input className="form-control"
                                        type="text" pattern="^(0|[1-9][0-9]*)$"
                                        name="soDienThoai" value={this.state.values.soDienThoai}
                                        onChange={this.handleOnchange} />
                                    <p className="text-danger">
                                        {this.state.errors.soDienThoai}
                                    </p>
                                </div>
                                <div className="form-group col-6">
                                    <span>Email</span>
                                    <input className="form-control"
                                        type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                        name="email" value={this.state.values.email}
                                        onChange={this.handleOnchange} />
                                    <p className="text-danger">
                                        {this.state.errors.email}
                                    </p>
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


