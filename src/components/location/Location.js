import React from "react"
import "./Location.css"

export const Location = ({ location }) => (
    <section className="location">
        <h3 className="location__name"> Location: {location.name} </h3>
        <address className="location__address"> Address: {location.address} </address>
<div className="location__accesibility"> Handicap Accessible: {String(location.accessibility)} </div>
    </section>
)