import React, { useState } from 'react'
import "./ItemCount.css"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export const ItemCount = () => {
    const [counter, setCounter] = useState(0)

    const sumar = () =>{
        setCounter ( counter +1 )
    }

    const restar = () =>{
        if (counter > 0) {
        setCounter ( counter -1 )
        }
    }
    const reset = () =>{
        setCounter(0)
    }

return (
    <div>
    <h3>Cantidad</h3>
    <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" onClick={restar}>-</Button>
        <Button variant="secondary">{counter}</Button>
        <Button variant="secondary" onClick={sumar}>+</Button>
        <Button variant="secondary" onClick={reset}>🔄</Button>
    </ButtonGroup>
    </div>
)
}

