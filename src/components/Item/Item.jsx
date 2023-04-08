import React from "react"
import {Card, Button } from 'react-bootstrap';
import { ItemCount } from "../ItemCount/ItemCount";

export const Item = ({id, description, origen, price, image}) => {
    return (
    <div>
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{description}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <p>{origen}</p>
                <p>{price}</p>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    <ItemCount/>
    </div>
);
}

