import React from 'react'

const ProductList = ({cartItems}) => {
    const renderList=cartItems.map(item=>(<li className="products__list-item">
            <span className="products__item-name">{item.name}</span>
            <span className="products__item-price">${item.price}</span>
        </li>)
    )

const total = cartItems.map(item=>item.price).reduce((acc,itemPrice)=>acc+itemPrice);

    return (
        <div className="products">
        <ul className="products__list">
          {renderList}
        </ul>
        <div className="products__total">Total: ${total}</div>
      </div>
    )
}
export default ProductList
