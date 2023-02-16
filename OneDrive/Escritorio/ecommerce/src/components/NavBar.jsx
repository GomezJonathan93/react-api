import React from "react";
import { NavLink } from 'react-router-dom'
import CartWidget from "./CartWidget";

const NavBar = () =>{

    return(
    <header>
        <nav className="navBar">
            <ul className="ulNav">
                <NavLink className="ulNavLink" to='/productos'>Productos</NavLink>
                <NavLink className="ulNavLink" to='/productos/almohadones'>Almohadones</NavLink>
                <NavLink className="ulNavLink" to='/productos/figuras'>Figuras</NavLink>
                <NavLink className="ulNavLink" to='/productos/remeras'>Remeras</NavLink>
                <CartWidget />
            </ul>
        </nav>
    </header>
    )
}
export default NavBar