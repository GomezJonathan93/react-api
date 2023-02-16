import React from "react";
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { contexto } from "./CustomProvider"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const CartWidget = () =>{
    const valorDelContexto = useContext(contexto)
    return(
        <Link to='/carrito'>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span >{valorDelContexto.cantidadTotal}</span>
        </Link>
    )
}
export default CartWidget