import React, { useState } from 'react'
import "./ItemCount.css"
import { toBeDisabled } from '@testing-library/jest-dom/dist/matchers'
import { isDisabled } from '@testing-library/user-event/dist/utils'

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
    <>
    <h3>Contador: {counter}
    </h3>
    <div>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <button onClick={reset}>resetear</button>
    </div>
    </>
)
}
