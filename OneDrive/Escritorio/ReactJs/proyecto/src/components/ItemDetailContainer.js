import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"
//import { products } from "./ProductList";
import { db } from "./firebase"
import { collection, doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = () => {
    // const [item, setItems] = useState();

    // const { id } = useParams();

    // useEffect(() => {
    //     const getProducts = () => {
    //         return new Promise((res, rej) => {
    //             const productoFiltrado = products.find(
    //                 (prod) => prod.id === parseInt(id)
    //             );
    //             const ref = productoFiltrado;
    //             setTimeout(() => {
    //                 res(ref);
    //             }, 2000);
    //         });
    //     };
    //     getProducts()
    //         .then((res) => {
    //             setItems(res);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, [id]);

    const [item, setItem] = useState({})
    const { id } = useParams()

    useEffect(()=>{
        
        const ItemCollection = collection(db, "Item")
        const refe = doc(ItemCollection,id) 
        const consulta = getDoc(refe)

        consulta
        .then(res=>{
            setItem(res.data())
        })
        .catch(error=>{
            console.log(error)
        })
    },[id])

    return (
        <div>
            <h2>Productos</h2>
            {! item  ? (
                <h1>Cargando...</h1>
            ) : (
                <ItemDetail items={item} />
            )}

        </div>
    );
};

export default ItemDetailContainer;