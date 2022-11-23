import React from "react"
import { Link } from "react-router-dom"
import NavBar from "./NavBar"

const Header = () => {
    
    return (
        <header id="main-header" className="header">
            <Link to="/">
                <h1>Fishy Fishy Dish Store</h1>
            </Link>
            <NavBar/>
        </header>
    )
}

export default Header