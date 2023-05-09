import React from "react";
import "./Product.css"

function ProductItem({productItem}){
    return (<div className="product_grid_item">
        <p>Product</p>
        <p>Name: {productItem.title}</p>
        <p>Price: {productItem.price} $</p>
        <img src={productItem.image}/>    
    </div>
    )
}

export default ProductItem;