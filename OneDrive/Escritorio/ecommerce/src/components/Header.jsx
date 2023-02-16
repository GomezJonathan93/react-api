import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom"

const Header = () =>{
    return(
<header id="main-header" className="header">
    <Link to="/">
        <h1>Fishy Fishy Dish Store</h1>
    </Link>
    <NavBar />
</header>
    )
}
export default Header