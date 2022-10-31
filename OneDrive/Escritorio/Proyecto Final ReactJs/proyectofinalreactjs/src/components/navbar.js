import React from "react";
import CartWidget from "./cartwidget";
//import ListContainer from "./itemlistcontainer";
import { Link } from 'react-router-dom'

const NavBar = () =>{
    return(
        <header>
            {/* <div className="div-titulo">
            <h1>Fishy Fishy Dish Store</h1>
            </div>
            <div className="greeting">
                <ListContainer
                    nombre= "main" campeon= "Yuumi"     
                />
            </div> */}
            <nav className="navBar">
                <ul className="ulNav">
                    <li>
                        {/* <a href="#">Eloboost</a> */}
                        <Link to='/Eloboost'>Eloboost</Link>
                    </li>
                    <li>
                        {/* <a href="#">Coaching</a> */}
                        <Link to='/Coaching'>Coaching</Link>
                    </li>
                    <li>
                        {/* <a href="#">Merchandising</a> */}
                        <Link to='/Merchandising'>Merchandising</Link>
                    </li>
                    <li>
                        <CartWidget />
                    </li>
                </ul>
            </nav>
            </header>
    )
}

export default NavBar