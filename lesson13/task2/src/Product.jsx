import React from 'react'

const Product = ({match}) => {
    return <div class="product">{`Product is ${match.params.productId}`}</div>;
}

export default Product
