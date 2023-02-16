import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"
import { db } from "./firebase"
import { collection, doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = () => {
    
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
            {! item  ? (
                <h1>Cargando...</h1>
            ) : (
                <ItemDetail items={item} />
            )}
        </div>
    );
};
export default ItemDetailContainer