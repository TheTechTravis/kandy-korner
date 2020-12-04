import React from "react"
import "./KandyKorner.css"
import { LocationProvider } from "./location/LocationProvider"
import { ProductProvider } from "./product/ProductProvider"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"

export const KandyKorner = () => (
    // <h2>Kandy Korner</h2>
    <>
        <NavBar />
        <ApplicationViews />
    </>
)