import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { Product } from "./Product"
import "./Product.css"

export const ProductList = () => {
    // This state changes when `getLocations()` is invoked below
    const { products, getProducts } = useContext(ProductContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("ProductList: Initial render before data")
        getProducts()
    }, [])

    return (
        <div className="products">
            <h2>Products</h2>
        {
            products.map(product => <Product key={product.id} product={product} />)
        }
        </div>
    )
}