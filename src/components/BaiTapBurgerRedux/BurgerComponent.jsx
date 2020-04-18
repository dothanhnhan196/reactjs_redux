import React, { Component } from 'react'
import './BaiTapBurger.css'
import { connect } from 'react-redux'

class BurgerComponent extends Component {

    renderBreadMid = () => {
        let { burger } = this.props
        let content = []
        for (let propBurger in burger) {
            let breadMid = []
            for (let i = 0; i < burger[propBurger]; i++) {
                breadMid.push(<div key={i} className={propBurger}></div>)
            }
            content.push(breadMid)
        }
        return content

        // return Object.entries(burger).map(([propBurger, value], index) => { // propBurger là tên thuộc tính || value là giá trị
        //     let breadMid = []
        //     for (let i = 0; i < value; i++) {
        //         breadMid.push(<div key={i} className={propBurger}></div>)
        //     }
        //     return breadMid
        // })

    }

    render() {
        return (
            <div className="col-7">
                <h3 className="text-center mb-3">Bánh burger của bạn</h3>
                <div className="box">
                    <div className="bread-top"></div>
                    {this.renderBreadMid()}
                    <div className="bread-bottom"></div>
                </div>
            </div>
        )
    }
}

const mapStateToProp = (state) => {
    return {
        burger: state.BurgerReducer.burger
    }
}


export default connect(mapStateToProp, null)(BurgerComponent)
