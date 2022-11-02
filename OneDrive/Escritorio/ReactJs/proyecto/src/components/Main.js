import React from 'react';
import { Routes , Route } from "react-router-dom"
import Home from './Home'
import Eloboost from './Eloboost';
import Coaching from './Coaching';
import CartWidget from './cartwidget';
import Merchandising from './Merchandising'
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';

const Main =() =>{
    return(
        <main>
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                
                <Route path="/eloboost" element={<Eloboost/>}/>

                <Route path="/coaching"  element={<Coaching/>}/>

                <Route path="/merchandising"  element={<Merchandising/>}/>
                
                <Route path='/carrito' element={<CartWidget/>}/>

                <Route path="/merchandising/"  element={<ItemListContainer/>}/>

                <Route path="/merchandising/:id"  element={<ItemListContainer/>}/>

                <Route path="/merchandising/item/:id"  element={<ItemDetailContainer/>}/>

                <Route path='*' element={<h1>404</h1>}/>

            </Routes>
        </main>
    )
}

export default Main