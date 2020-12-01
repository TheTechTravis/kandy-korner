import React from "react"
import "./Product.css"

export const Product = ({ product }) => (
    <section className="product">
        <h3 className="product__name"> Name: {product.name} </h3>
        <div className="location__price"> Price: {product.price} </div>
        <div className="product__type"> Product Type: {product.productTypeId} </div>
        <div className="product__location"> Location Available: {product.locationId} </div>
    </section>
)