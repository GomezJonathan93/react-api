import React from "react";
import CartWidget from "./cardwidget";
import ListContainer from "./itemlistcontainer";

function NavBar(){
    return(
        <header>
            <div className="div-titulo">
            <h1>Fishy Fishy Dish Store</h1>
            </div>
            <div className="greeting">
                <ListContainer
                    nombre= "main" campeon= "Yuumi"     
                />
            </div>
            <nav className="navBar">
                <ul className="ulNav">
                    <li>
                        <a href="#">Eloboost</a>
                    </li>
                    <li>
                        <a href="#">Coaching</a>
                    </li>
                    <li>
                        <a href="#">Merchandising</a>
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