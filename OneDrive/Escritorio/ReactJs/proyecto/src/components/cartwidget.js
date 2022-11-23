import React from "react";
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { contexto } from "./CustomProvider"

const CartWidget =() =>{

    const valorDelContexto = useContext(contexto)

    return(
        <Link to='/carrito'>
            <i className="fa-solid fa-cart-shopping"></i>
            <span>{valorDelContexto.cantidadTotal}</span>
        </Link>
    )
}

export default CartWidget