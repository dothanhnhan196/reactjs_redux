import React, { Component } from 'react'

export default class MenuBurger extends Component {
    render() {
        return (
            <div className="col-5">
                <h3>Chọn thức ăn</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>thức ăn</th>
                            <th></th>
                            <th>Giá</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Salad</td>
                            <td>
                                <button className="btn btn-success mr-3">+</button>
                                <button className="btn btn-danger"> - </button>
                            </td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Balcon</td>
                            <td>
                                <button className="btn btn-success mr-3">+</button>
                                <button className="btn btn-danger"> - </button>
                            </td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Cheese</td>
                            <td>
                                <button className="btn btn-success mr-3">+</button>
                                <button className="btn btn-danger"> - </button>
                            </td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Meat</td>
                            <td>
                                <button className="btn btn-success mr-3">+</button>
                                <button className="btn btn-danger"> - </button>
                            </td>
                            <td>10</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan='1'></td>
                            <th>Tổng tiền:</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}
