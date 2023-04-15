import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import "./NavBar.css"
import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <div className="header">
            <Link className="link" to='/'>Logo</Link>
            <Link className="link" to='/productos/Verduleria'>Verdulería</Link>
            <Link className="link" to='/productos/Carnes'>Carnes</Link>
            <Link className="link" to='/productos/Almacen'>Almacen</Link>
            <Link className="link" to='/cart'><CartWidget/></Link>
        </div>
    )
}

