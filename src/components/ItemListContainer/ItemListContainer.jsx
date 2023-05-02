import React, { useEffect, useState } from 'react'
import { pedirProductos } from '../../helpers/pedirProductos'
import { FaSpinner } from "react-icons/fa"
import "./itemListContainer.css"
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {
    const [items, setItems] = useState([])

    const [loading, setLoading] = useState()

    const {categoryId} = useParams()


useEffect(() =>{
            setLoading(true)
            pedirProductos()
                .then((res) =>{
                if(categoryId){
                    setItems(res.filter(prod => prod.category === categoryId))
                }else{
                    setItems(res)
                }
            })
            .catch((error) => console.log(error))
            .finally(() =>{setLoading(false)})
        }, [categoryId])

return (
    <div className='productos'>
    {
        loading
        ?<div className="spinner">
        <FaSpinner/>
        </div>
        :<ItemList productos={items}/>
    }
    </div>
    )}








