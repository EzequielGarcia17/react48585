import React from 'react'
import { Card } from 'react-bootstrap';
import { ItemCount } from '../ItemCount/ItemCount';
import "./ItemDetail.css"

export const ItemDetail = ({id, name, description, origen, price, amount, image, category}) => {
    return (
    <div className="detalle">
    <Card className="itemdetalle">
        <Card.Img className="heroDet" variant="top" src={image} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <p className="subt">Origen: <span className="light">{origen}</span></p>
            <p className="subt">Categoría: <span className="light">{category}</span></p>
            <Card.Text  className="subt priceDet">${price} {amount}</Card.Text>
            <ItemCount/>
                <div className="compra ctaDet">Comprar</div>
        </Card.Body>
    </Card>
    </div>
    )
}

