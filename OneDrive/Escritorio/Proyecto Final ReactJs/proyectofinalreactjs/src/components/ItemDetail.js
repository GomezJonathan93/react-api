import React from "react";
//import ItemDetailContainer from "./ItemDetailContainer";

const ItemDetail =(modelo, img, precio, id, descripcion) =>{
    return(
        <div>
            <h2>{modelo} - ${precio}</h2>
            <div className="detailFlex">
                <img src={img} alt={modelo} />
                <div>
                    <p>{descripcion}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail