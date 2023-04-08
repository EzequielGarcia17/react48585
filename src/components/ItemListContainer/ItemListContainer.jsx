import React, { useEffect, useState } from 'react'
import { pedirProductos } from '../../helpers/pedirProductos'
import { ItemList } from '../ItemList/ItemList'
import { FaSpinner } from "react-icons/fa"
import "./itemListContainer.css"

export const ItemListContainer = (props) => {
    const [items, setItems] = useState ([])

    const [loading, setLoading] = useState(false)

    //Funcion pruductos


useEffect (() =>{
    setLoading(true)
    pedirProductos()
        .then((res)=>{
            setItems(res)
            console.log(res)
        })
        .catch((error) => console.log(error))
        .finally (() =>{setLoading(false)})
},
[])

return (
    <>
    {
        loading
        ?<div className="spinner">
        <FaSpinner/>
        </div>
        :<ItemList productos={items}/>
    }
    </>
    )}
