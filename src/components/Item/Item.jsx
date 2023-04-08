import React from "react"

export const Item = ({id, description, origen, price, image}) => {
    return(
        <div>
            <p>Id: {id}</p>
            <p>Descripcion: {description}</p>
            <p>Origen: {origen}</p>
            <p>PRECIO: ${price}</p>
            <img src={image} alt={image} />
        </div>
    )
}