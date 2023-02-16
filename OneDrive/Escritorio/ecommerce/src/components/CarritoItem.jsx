import React from "react";

const CarritoItem = ({modelo, img, precio, id, cantidad}) => {
    return(
        <article className="carritoCard">
            <h1 className="carritoTitulo">{modelo} </h1>
            <h2>${precio} cada unidad</h2>
            <h3>Unidades: {cantidad}</h3>
            <img src={img} alt={modelo} className="cardImg"/>
        </article>
    )
}
export default CarritoItem