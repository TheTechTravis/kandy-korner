import React from "react"
import "./KandyKorner.css"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"

export const KandyKorner = () => (
    // <h2>Kandy Korner</h2>
    <LocationProvider>
        <LocationList />
    </LocationProvider>
)