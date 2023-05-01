import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import "./Cart.css"
import { CartContext } from '../context/CartContext'

export const Cart = () => {

    const {carrito, precioTotal, removerItem, vaciarCarrito} = useContext(CartContext)

    return (
        <div  className='compras'>
        {carrito.map((prod) => (
            <div>
                <h3>Tu carrito</h3>
                <div>
                    Listado
                    <p>{prod.name}</p>
                    <p>${prod.price} {prod.amount}</p>
                    <p>Cantidad: {prod.counter}</p>
                    <Button onClick={() => removerItem(prod.id)}>Eliminar</Button>
                </div>

            </div>
            ))
        }
        <hr></hr>
        <p>PRECIO TOTAL ${precioTotal()}</p>
        <hr></hr>
        <Button className="btn btn-danger" onClick={vaciarCarrito()}>vaciarCarrito</Button>
        </div>
    )
}


