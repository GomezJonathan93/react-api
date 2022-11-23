import React from "react";
import ItemCount from "./ItemCount";
//import { useState } from "react"
import { useCarrito } from "./CustomProvider"

const ItemDetail =({items}) =>{

    const { agregarProducto } = useCarrito()

    const handleOnAdd = (cantidad) =>{
        agregarProducto(items,cantidad)
    }

    return(
        <div>
            <h2>{items.modelo} - ${items.precio}</h2>
            <div className="detailFlex">
                <img src={items.img} alt={items.modelo}/>
                <div>
                    <p>{items.descripcion}</p>
                    <ItemCount init={1} handleOnAdd={handleOnAdd}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail