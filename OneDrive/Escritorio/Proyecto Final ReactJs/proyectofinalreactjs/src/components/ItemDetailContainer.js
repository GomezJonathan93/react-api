import React from "react";
import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom"
import ProductList from "./ProductList";

const ItemDetailContainer =() =>{

    const [items,setItems] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        
        if(!id){
            //¿Acá iría el fetch de todos los array, ya que no se me ha solicitado ninguna categoria especial??
        }else{
            console.log("Pido solo "+id) //Acá iría el fetch de el id que se me pide? ¿Cómo hago eso? Mi proyecto no lo necesita.
        }
        
        let pedidoAlServer = new Promise((res)=>{
            setTimeout(()=>{
                res(ProductList)
            },2000)
        })

        pedidoAlServer
        .then((respuesta)=>{
            setItems(respuesta)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[id])


    return(
        <div>
            { items.length == 0 ? <h1>Procesando pedido. ¡Espere!</h1> : <ItemDetail items={items}/>}
        </div>
    )
}

export default ItemDetailContainer