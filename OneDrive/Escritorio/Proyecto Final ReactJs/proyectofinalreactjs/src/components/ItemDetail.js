import React from "react";

const ItemDetail =({Items}) =>{
    return(
        <div>
            <h2>{Items.modelo} - ${Items.precio}</h2>
            <div className="detailFlex">
                <img src={Items.img} alt={Items.modelo} />
                <div>
                    <p>{Items.descripcion}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail