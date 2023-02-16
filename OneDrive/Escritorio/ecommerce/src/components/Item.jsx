import React from "react";
import { Link } from "react-router-dom"

const Item = ({modelo, img, precio, id}) => {
    return(
        <article className="cardArticle">
            <h1 className="cardTitulo">{modelo} </h1>
            <h2>${precio}</h2>
            <img src={img} alt={modelo} className="cardImg"/>
            <button className="cardBoton">
                <Link to={"/item/" + id} > Ver detalle</Link>
            </button>            
        </article>
    )
}
export default Item