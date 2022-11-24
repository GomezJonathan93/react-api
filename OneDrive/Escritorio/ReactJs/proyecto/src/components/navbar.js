import React from "react";
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom'

const NavBar = () =>{
    return(
        <header>
            <nav className="navBar">
                <ul className="ulNav">
                    <Link to='/Merchandising'>Todos los Productos</Link>
                    <Link to='/Remeras'>Remeras</Link>
                    <Link to='/Almohadones'>Almohadones</Link>
                    <Link to='/Figuras'>Figuras</Link>
                    <CartWidget />
                </ul>
            </nav>
            </header>
    )
}

export default NavBar