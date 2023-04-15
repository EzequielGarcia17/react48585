import React from 'react'
import {Item} from '../Item/Item'
import "./ItemList.css"

export const ItemList = ({productos=[]}) => {
return (
    <div>
        <h1>Nuestros productos</h1>
        {productos.map((item) => <Item {...item} key={item.id}/>)}
    </div>
    )
}

