import React, { Component } from 'react'

export default class BurgerComponent extends Component {
    render() {
        return (
            <div className="col-7">
                <h3 className="text-center mb-3">Cửa hàng burger</h3>
                <div className="box">
                    <div className="bread-top">
                        <div className="seeds" />
                        <div className="seeds2" />
                    </div>
                    <div className="salad" />
                    <div className="salad" />
                    <div className="bacon" />
                    <div className="cheese" />
                    <div className="cheese" />
                    <div className="meat" />
                    <div className="meat" />
                    <div className="bread-bottom" />
                </div>
            </div>
        )
    }
}
