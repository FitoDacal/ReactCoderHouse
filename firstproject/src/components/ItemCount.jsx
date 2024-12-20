import React, { useState } from "react";

export default function ItemCount({stock, initial=1, onAdd}) {
    
    const [count, setCount] = useState(initial);

    const sumar = () => {
        if (count < stock) {
            setCount (count + 1);
        }
    }

    const restar = () => {
        if (count > 1) {
            setCount (count - 1);
        }
    }

    return (
        <div className="d-flex flex-column align-items-center my-3">
            <div className="d-flex justify-content-center align-items-center mb-2">
                <button className="btn btn-secondary mx-2" onClick={restar}>-</button>
                <h3>{count}</h3>
                <button className="btn btn-secondary mx-2" onClick={sumar}>+</button>
            </div>
            <button onClick={() => onAdd(count)}>Add to cart</button>
        </div>
    )
}