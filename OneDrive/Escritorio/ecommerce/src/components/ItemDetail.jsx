import React from "react";
import ItemCount from "./ItemCount";
import { useCarrito } from "./CustomProvider"

const ItemDetail =({items}) =>{

    const { agregarProducto } = useCarrito()

    const handleOnAdd = (cantidad) =>{
        agregarProducto(items,cantidad)
    }

    return(
        <div className="cardDetail">
            <h2 className="detailTitulo"><span className="detailSpan">{items.modelo}</span> - ${items.precio} c/u</h2>
            <div className="detailFlex">
                <img src={items.img} alt={items.modelo}/>
                <div>
                    <p className="detailP">{items.descripcion}</p>
                    <ItemCount init={1} handleOnAdd={handleOnAdd}/>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail