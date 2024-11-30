import React, { useState } from "react";

export default function ItemCount({stock, initial, onAdd}) {
    
    const [count, setCount] = useState(initial);

    const sumar = () => {
        if (count < stock) {
            setCount (count + 1);
        }
    }

    const restar = () => {
        if (count > 0) {
            setCount (count - 1);
        }
    }

    const agregarAlCarrito = () => {
        if (count > 0) {
            onAdd(count);
        }
    }


    return (
        <div>
            {/* <h3>(Nombre del producto)</h3> */}
            <button onClick={sumar}>+</button>
            <span>{count}</span>
            <button onClick={restar}>-</button>
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    )
}