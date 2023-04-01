import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import "./NavBar.css"

export const NavBar = () => {
    return (
        <div className="header">
        <p>Logo Ecommerce GT</p>
        <p>Frutas y Verduras</p>
        <p>Carniceria</p>
        <p>Almacen</p>
        <CartWidget/>
        </div>
    )
}