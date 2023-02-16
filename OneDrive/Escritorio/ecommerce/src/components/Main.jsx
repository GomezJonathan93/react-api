import React from "react";
import { Routes , Route } from "react-router-dom"
import Home from "./Home";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer"
import Carrito from "./Carrito";
import SobreMi from "./SobreMi";

const Main = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/productos" element={<ItemListContainer/>}/>
            <Route path='/productos/:cat'  element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/carrito' element={<Carrito/>}/>
            <Route path='/sobremi' element={<SobreMi/>}/>
            <Route path="*" element={<h1>404</h1>}/>
        </Routes>
    )
}
export default Main