import React from "react";

const CarritoItem = ({modelo, img, precio, id}) => {
    return(
        <article className="cardArticle">
            <h1 className="cardTitulo">{modelo} </h1>
            <h2>${precio} cada unidad</h2>
            <img src={img} alt={modelo} className="cardImg"/>
        </article>
    )
}

export default CarritoItem