import React from "react"
import "./KandyKorner.css"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import { ProductList } from "./product/ProductList"
import { ProductProvider } from "./product/ProductProvider"

export const KandyKorner = () => (
    // <h2>Kandy Korner</h2>
    <LocationProvider>
        <ProductProvider>
            <LocationList />
            <ProductList />
        </ProductProvider>
    </LocationProvider>
)