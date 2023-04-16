import React from 'react'
import { useState } from 'react'

const ItemCount = () => {
    const minimoProductos = 1
    
    const [contador, setContador] = useState(1)

    const incrementar = () => {
        setContador(contador + 1)
    }

    const decrementar = () => {
        if (contador > minimoProductos) {
            
            setContador(contador - 1)
        }
    }
return (
    <>
    <button onClick={ decrementar }>-</button>
    <p>{contador}</p>
    <button onClick={ incrementar }>+</button>
    </>
)
}

export default ItemCount