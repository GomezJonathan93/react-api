import React from "react";

const ItemDetail =({items}) =>{
    return(
        <div>
            <h2>{items.modelo} - ${items.precio}</h2>
            <div className="detailFlex">
                <img src={items.img} alt={items.modelo} />
                <div>
                    <p>{items.descripcion}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail