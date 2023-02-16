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
        setCount(1)
    }

    const handleReset =()=>{
        setCount(1)
    }
    return (
        <div>
            <p className="countP">Unidades a comprar:</p>
            <div className="counterActions">
                <button onClick={handleSumar}>+</button>
                <p className="countP">{count}</p>
                <button disabled={count <= 1} onClick={handleRestar}>-</button>
            </div>
            <div className="countActionContainer">
                <button className="countAction" onClick={handleReset}>Reset Contador</button>
                <button className="countAction" onClick={handleConfirmar}>Agregar al carrito</button>
            </div>
        </div>
    )
}
export default ItemCount