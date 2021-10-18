import React from 'react'

const CartTitle = ({count,userName}) => {
    return (
        <div>
            <div class="cart-title">{userName.firstName}, you added {count} items</div>
        </div>
    )
}

export default CartTitle
