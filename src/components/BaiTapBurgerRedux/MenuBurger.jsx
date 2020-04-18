import React, { Component } from 'react'
import { connect } from 'react-redux'

class MenuBurger extends Component {

    renderMenu = () => {
        let { menu, burger, addBreadMid } = this.props;
        return Object.entries(menu).map(([propMenu, price], index) => { //propMenu là tên thuộc tính || price là giá trị
            return (
                <tr key={index}>
                    <td>{propMenu}</td>
                    <td>
                        <button className="btn btn-success mr-2" onClick={() => addBreadMid(propMenu, 1)}> + </button>
                        {burger[propMenu]}
                        <button className="btn btn-danger ml-2" onClick={() => addBreadMid(propMenu, -1)}> - </button>
                    </td>
                    <td>{price}</td>
                    <td>{burger[propMenu] * price}</td>
                </tr>
            )
        })
    }

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
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderMenu()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan='1'></td>
                            <th>Tổng tiền: {this.props.total}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

const mapStateToProp = (state) => {
    return {
        menu: state.BurgerReducer.menu,
        total: state.BurgerReducer.total,
        burger: state.BurgerReducer.burger
    }
}

const mapDisPatchToProp = (dispatch) => {
    return {
        addBreadMid: (propBurber, amout) => {
            const action = {
                type: 'ADD_BREADMID',
                propBurber,
                amout
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProp, mapDisPatchToProp)(MenuBurger)
