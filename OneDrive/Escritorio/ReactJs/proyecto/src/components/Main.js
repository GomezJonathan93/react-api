import React from 'react';
import { Routes , Route } from "react-router-dom"
import Remeras from './Remeras';
import RemerasDetailContainer from './RemerasDetailContainer';
import RemerasContainer from './RemerasContainer'
import Figuras from './Figuras';
import FigurasContainer from './FigurasContainer';
import FigurasDetailContainer from './FigurasDetailContainer';
import Carrito from './Carrito';
import Almohadones from './Almohadones';
import AlmohadonesContainer from './AlmohadonesContainer';
import AlmohadonesDetailContainer from './AlmohadonesDetailContainer';
import Merchandising from './Merchandising';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';

const Main =() =>{
    return(
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>

                <Route path="/remeras/"  element={<RemerasContainer/>}/>

                <Route path="/remeras/:id"  element={<Remeras/>}/>

                <Route path="/remeras/item/:id"  element={<RemerasDetailContainer/>}/>

                <Route path="/figuras/"  element={<FigurasContainer/>}/>

                <Route path="/figuras/:id"  element={<Figuras/>}/>

                <Route path="/figuras/item/:id"  element={<FigurasDetailContainer/>}/>
                
                <Route path="/almohadones/"  element={<AlmohadonesContainer/>}/>
                
                <Route path="/almohadones/:id"  element={<Almohadones/>}/>

                <Route path="/almohadones/item/:id"  element={<AlmohadonesDetailContainer/>}/>

                <Route path="/merchandising"  element={<Merchandising/>}/>
                
                <Route path="/carrito" element={<Carrito/>}/>

                <Route path="/merchandising/"  element={<ItemListContainer/>}/>

                <Route path="/merchandising/:id"  element={<ItemListContainer/>}/>

                <Route path="/merchandising/item/:id"  element={<ItemDetailContainer/>}/>

                <Route path="*" element={<h1>404</h1>}/>

            </Routes>
        </main>
    )
}

export default Main