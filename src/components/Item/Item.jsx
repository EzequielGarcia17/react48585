import React from "react"
import "./Item.css"
import {Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";


export const Item = ({id, name, origen, price, amount, image, category}) => {
    return (
    <div>
        <Card className="item" style={{ width: '25em' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <p>{origen}</p>
                <p>Categoría: {category}</p>
                <Card.Text>${price} {amount}</Card.Text>
                <Link to={`/detail/${id}`}>
                    <Button variant="primary">Ver más</Button>
                </Link>
            </Card.Body>
        </Card>
    </div>
);
}

