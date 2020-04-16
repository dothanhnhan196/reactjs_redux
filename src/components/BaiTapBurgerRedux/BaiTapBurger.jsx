import React, { Component } from 'react'
import '../../index.css'
import BurgerComponent from './BurgerComponent'
import MenuBurger from './MenuBurger'

export default class BaiTapBurger extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <BurgerComponent />
                    <MenuBurger />
                </div>
            </div>
        )
    }
}
