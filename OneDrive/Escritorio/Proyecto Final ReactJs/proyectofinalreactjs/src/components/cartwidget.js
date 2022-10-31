import React from "react";
import { Link } from 'react-router-dom'

const CartWidget =() =>{
    return(
        <Link to='/carrito'><i class="fa-solid fa-cart-shopping"></i></Link>
    )
}

export default CartWidget