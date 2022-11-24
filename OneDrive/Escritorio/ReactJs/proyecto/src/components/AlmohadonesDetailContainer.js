import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlmohadonesDetail from "./AlmohadonesDetail"
import { db } from "./firebase"
import { collection, doc, getDoc } from "firebase/firestore"

const AlmohadonesDetailContainer = () => {
    
    const [item, setItem] = useState({})
    const { id } = useParams()

    useEffect(()=>{
        
        const ItemCollection = collection(db, "almohadones")
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
                <AlmohadonesDetail items={item} />
            )}

        </div>
    );
};

export default AlmohadonesDetailContainer;