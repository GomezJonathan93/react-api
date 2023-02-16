import React from "react";
import { Link } from "react-router-dom";

const Productos =()=>{
    return(
        <div className="containerProductos">
            <h3 className="h3Productos">Nuestros Productos</h3>
            <p className="pProductos">¡Contamos con una selecta colección de productos a tu disposición para que le demuestres a tu familia y posiblemente inexistentes amigos que estás tan orgulloso como nosotros de ser un depravado! Da verguenza ajena con nuestras <span>Remeras</span>, duerme abrazado como un rarito a nuestros <span>Almohadones</span> y exhibe en el sótano en el que vives las <span>Figuras</span> más exclusivas de Yuumi! </p>
            <div className="preview-cards">
                <Link to='/productos/almohadones'>
                    <img src="/images/botones/botonalmohadonesyuumi.jpg" alt="" id="boton-almohadon"></img>
                </Link>
                <Link to='/productos/remeras'>
                    <img src="images/botones/botonremerayuumi.jpg" alt="" id="boton-remera"></img>
                </Link>
                <Link to='/productos/figuras'>
                    <img src="images/botones/botonyuumifiguras.png" alt="" id="boton-figura"></img>
                </Link>
            </div>
        </div>
    )
}
export default Productos