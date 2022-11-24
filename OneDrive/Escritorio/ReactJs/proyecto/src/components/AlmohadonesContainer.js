import React from 'react';
import { db } from "./firebase";
import { collection , where , query , getDocs } from "firebase/firestore"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Almohadones from "./Almohadones"

const AlmohadonesContainer = () =>{

    const [items, setItems] = useState([])
    const { categoryName } = useParams()

    useEffect(() => {

        const ItemsCollection = collection( db , "almohadones" )

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


    return(
        <div>
            <h2>Almohadones</h2>
            {items.length === 0 ? (
                <h1>Cargando...</h1>
            ) : (
                <Almohadones items={items} />
            )}
        </div>
    )
}

export default AlmohadonesContainer