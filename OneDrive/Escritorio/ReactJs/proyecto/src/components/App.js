import React from "react";
import Header from './Header';
import { BrowserRouter } from "react-router-dom"
import Main from './Main'
import Footer from "./Footer";
import CustomProvider from "./CustomProvider"
//import { app, db } from "./firebase"

const App = () =>{
    return(
       <CustomProvider>
           <BrowserRouter>
               <Header />
               <Main />
               <Footer />
           </BrowserRouter>
       </CustomProvider>
    )
}

export default App