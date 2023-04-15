import React from 'react'
import { Card } from 'react-bootstrap';
import { ItemCount } from '../ItemCount/ItemCount';

export const ItemDetail = ({id, name, description, origen, price, amount, image, category}) => {
    return (
    <div>
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <p>{origen}</p>
                <p>${price} {amount}</p>
                <p>Categoría: {category}</p>
                <ItemCount/>
                <div className="compra">Comprar</div>
            </Card.Body>
        </Card>
    </div>
    )
}

