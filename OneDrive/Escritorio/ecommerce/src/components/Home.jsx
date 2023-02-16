import React from "react";
import Productos from "./Productos";

const Home =()=>{
    return(
    <>
        <main>
            <div className="portada">
                <img src="images/logo/transp-min.png"></img>
                <div className="textoPortada">
                    <h2>¡Bienvenido, Invocador!</h2>
                    <p className="primerP">Somos <span>Fishy Fishy Dish</span>, tu e-commerce favorito de la gata mágica</p>
                    <p>donde encontrarás todos sus productos relacionados a Yuumi</p>
                    <p>con los mejores precios del mercado y envío a domicilio.</p>
                </div>
            </div>
        </main>
        <Productos/>
    </>
    )
}
export default Home