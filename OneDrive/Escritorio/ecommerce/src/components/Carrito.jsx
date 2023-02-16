import { useContext } from "react"
import { useState } from "react"
import { contexto } from "./CustomProvider"
import CarritoList from './CarritoList'
import Swal from "sweetalert2"

const Carrito = () => {
    const valorDelContexto = useContext(contexto);
    const [carrito, setCarrito] = useState()
    const [items, setItems] = useState(valorDelContexto.items)
    function comprar (){
        Swal.fire({
            icon: 'success',
            iconColor: '#ffff',
            title: '¡Compra Realizada!',
            footer: '<a href="https://www.linkedin.com/in/gomezjonathanwd/">Mi LinkedIn</a>',
            customClass: {
                title: 'custom-alerta',
                footer: 'custom-alerta',
            },
            background: '#8F00FF'
        });
    }
    return (
        <div className="carritoContainer">
            <CarritoList items={items}/>
            <div className="carritoP">
                <p><span>Precio total a pagar:</span> ${valorDelContexto.precioFinal}</p>
            </div>
            <div className="carritoBoton">
                <button className="buttonComprar" onClick={comprar}>Comprar</button>
            </div>
        </div>
    )
}
export default Carrito