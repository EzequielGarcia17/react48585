import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import "./NavBar.css"

export const NavBar = () => {
    return (
        <div>
        <p>Logo Ecommerce</p>
        <p>Enlace1</p>
        <p>Enlace2</p>
        <p>Enlace3</p>
        <CartWidget/>
        </div>
    )
}