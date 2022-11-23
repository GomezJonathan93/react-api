import React from "react";
import { useState } from "react";

const ItemCount = ({handleOnAdd}) =>{
    const [count, setCount] = useState(1);

    const handleSumar = () => {
        setCount(count + 1)
    }

    const handleRestar = () => {
        setCount(count - 1)
    }

    const handleConfirmar =()=>{
        handleOnAdd(count)
        setCount(0)
    }

    const handleReset =()=>{
        setCount(0)
    }

    return (
        <div>
            <div className="counterActions">
                <button onClick={handleSumar}>+</button>
                <p>{count}</p>
                <button onClick={handleRestar}>-</button>
            </div>
            <button onClick={handleReset}>Reset Contador</button>
            <button onClick={handleConfirmar}>agregar al carrito</button>
        </div>
    )
}

export default ItemCount