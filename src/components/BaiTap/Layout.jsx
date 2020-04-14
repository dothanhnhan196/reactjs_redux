import React, { Component } from 'react'
import Header from './Header'
import Silder from './Silder'
import ProductList from './ProductList'
import Footer from './Footer'

export default class Layout extends Component {
    render() {
        return (
            <div className="bg-dark">
                <Header />
                <Silder />
                <ProductList />
                <Footer />
            </div>
        )
    }
}
