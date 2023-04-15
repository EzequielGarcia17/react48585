import React, {useEffect, useState} from "react";
import { pedirProductos } from "../../helpers/pedirProductos";
import { FaSpinner } from "react-icons/fa"
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () =>{

    const [item, setItem] = useState(null)

    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        pedirProductos()
        .then(res =>{
            setItem(res)
        })
        .catch((error) => console.log(error))
        .finally (() => {
            setLoading(false)
        } )
    },[])

    return(
        <div>{
            loading
            ?<FaSpinner/>
            :<ItemDetail productos={items}/>
        }
        </div>
    )
}