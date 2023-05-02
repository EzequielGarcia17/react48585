import { useState } from "react"
import React from "react"
import "./Checkout.css"
import { Link } from "react-router-dom"

export const Checkout = () => {

    const [email, setEmail] = useState("")

    const [nombre, setNombre] = useState("")

    const [apellido, setApellido] = useState("")

    const [telefono, setTelefono] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("Email:", email)
        console.log("Nombre:", nombre)
        console.log("Apellido:", apellido)
        console.log("Teléfono:", telefono)
    }

    return (
        <div className="checkout">
            <h3>Terminar Compra</h3>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label htmlFor="" for="exampleInputEmail1" class="form-label">Email
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </label>
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Nombre
                        <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
                    </label>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Apellido
                        <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e) => setApellido(e.target.value)} value={apellido}/>
                    </label>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Teléfono
                        <input type="number" class="form-control" id="exampleInputPassword1" onChange={(e) => setTelefono(e.target.value)} value={telefono}/>
                    </label>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Suscribite para saber de nuestras promociones</label>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Acepto terminos y condiciones</label>
                </div>
                <button type="submit" class="btn btn-success">Finalizar</button>
                <Link to="/cart" class="btn btn-info">Volver al Carrito</Link>
            </form>
        </div>
    )
}