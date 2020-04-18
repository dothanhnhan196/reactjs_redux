import React, { Component } from 'react'
import BurgerComponent from './BurgerComponent'
import MenuBurger from './MenuBurger'

export default class BaiTapBurger extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="text-center text-success">Bài tập Burger</h3>
                <div className="row">
                    <BurgerComponent />
                    <MenuBurger />
                </div>
            </div>
        )
    }
}


