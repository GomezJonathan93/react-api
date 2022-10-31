import React from "react";
import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom"

//arrays de objetos merch
const almohadones = [
    {
        id: 1,
        modelo:"Yuumi Abeja",
        tamaño:"medium",
        precio: 850,
        stock: 50,
        img:"images/Almohadones/yuumibee.png",
    },
    {
        id: 2,
        modelo: "Yuumi Gap",
        tamaño: "small",
        precio: 360,
        stock: 10,
        img: "images/Almohadones/yuumigap.png",
    },
    {
        id: 3,
        modelo: "Yuumi Original",
        tamaño: "small",
        precio: 680,
        stock: 150,
        img: "images/Almohadones/yuumioriginal.png",
    },
    {
        id: 4,
        modelo: "Yuumi Rompecorazones",
        tamaño: "small",
        precio: 1100,
        stock: 150,
        img: "images/Almohadones/yuumipink.png",
    }
]

const remeras = [
    {
        id: 5,
        modelo: "Yuumi Gun",
        talle: "L",
        precio: 2500,
        stock: 10,
        img: "images/remeras/yuumigun.png"
    },
    {
        id: 6,
        modelo: "Yuumi Libro",
        talle: "S",
        precio: 2000,
        stock: 15,
        img: "images/remeras/yuumilibro.png"
    },
    {
        id: 7,
        modelo: "Yuumi Chibi",
        talle: "XL",
        precio: 3000,
        stock: 20,
        img: "images/remeras/yuumichibi.png"
    }
]

const figuras = [
    {
        id: 8,
        modelo:"Yuumi Original",
        precio: 500,
        stock: 50,
        img:"images/figuras/figura2.png",
    },
    {
        id: 9,
        modelo: "Yuumi Directora",
        precio: 5000,
        stock: 5,
        img: "images/figuras/figura1.png",
    },
    {
        id: 10,
        modelo: "Yuumi EDG",
        precio: 8100,
        stock: 80,
        img: "images/figuras/yuumiedg.png",
    }
]

const ItemDetailContainer =() =>{

    const [items,setItems] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        
        if(!id){
            //¿Acá iría el fetch de todos los array, ya que no se me ha solicitado ninguna categoria especial??
        }else{
            console.log("Pido solo "+id) //Acá iría el fetch de el id que se me pide? ¿Cómo hago eso? Mi proyecto no lo necesita.
        }
        
        let pedidoAlServerRemeras = new Promise((res)=>{
            setTimeout(()=>{
                res(remeras)
            },2000)
        })

        pedidoAlServerRemeras
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