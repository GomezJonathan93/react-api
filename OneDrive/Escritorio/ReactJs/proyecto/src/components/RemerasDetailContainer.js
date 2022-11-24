import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RemerasDetail from "./RemerasDetail"
import { db } from "./firebase"
import { collection, doc, getDoc } from "firebase/firestore"

const RemerasDetailContainer = () => {
    
    const [item, setItem] = useState({})
    const { id } = useParams()

    useEffect(()=>{
        
        const ItemCollection = collection(db, "remeras")
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
                <RemerasDetail items={item} />
            )}

        </div>
    );
};

export default RemerasDetailContainer;