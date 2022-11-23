import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { db } from "./firebase";
import { collection , where , query , getDocs } from "firebase/firestore"

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const { categoryName } = useParams()

    useEffect(() => {

        const ItemsCollection = collection( db , "Item" )

        if (categoryName) {
            const filtro = query(ItemsCollection,where("category","===",categoryName))
            const consulta = getDocs(filtro)

            consulta
            .then((resultado)=>{
                const Items = resultado.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                 setItems(Items)
            })
            .catch((error) => {
                console.log(error)
            })
        } else {
            const consulta = getDocs(ItemsCollection)

            consulta
                .then((resultado) => {

                    const Items = resultado.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                    setItems(Items)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }, [categoryName])

    return (
        <div>
            <h2>Productos</h2>
            {items.length === 0 ? (
                <h1>Cargando...</h1>
            ) : (
                <ItemList items={items} />
            )}
        </div>
    );
};

export default ItemListContainer;