import React from "react"
import { Link } from "react-router-dom"
import NavBar from "./navbar"
//import ListContainer from "./itemlistcontainer";

const Header = () => {
    
    return (
        <header id="main-header" className="header">
            <Link to="/">
                <h1>Fishy Fishy Dish Store</h1>
            </Link>
            {/* <div className="greeting">
                <ListContainer
                    nombre= "main" campeon= "Yuumi"     
                />
            </div> */}
            <NavBar/>
        </header>
    )
}

export default Header