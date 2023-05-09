import React from "react";
import ProductItem from "./ProductItem.jsx";
import "./Product.css"

function ProductList({productList}){
    return (
        <div className="product_grid_container">
            {productList.map((productItem) => <ProductItem productItem={productItem} key={productItem.id}/>)}
        </div>
    )
}

export default ProductList;