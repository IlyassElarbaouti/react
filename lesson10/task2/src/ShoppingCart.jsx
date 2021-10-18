import React, { Component } from 'react'
import CartTitle from './CartTitle.jsx'
import ProductsList from './ProductsList.jsx'

export default class ShoppingCart extends Component {
    constructor({userName}){
        super({userName})
        this.state={
       cartItems: [{name:'iphone',price:900},
        {name:'iphone',price:900}]
    }
    }
    
    render() {
        const count = this.state.cartItems.length
        return (
            <>
        <CartTitle  count={count} userName={this.props.userName}/>
        <ProductsList cartItems={this.state.cartItems}/>
        </>
        )
    }
}

