import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FigurasDetail from "./FigurasDetail"
import { db } from "./firebase"
import { collection, doc, getDoc } from "firebase/firestore"

const FigurasDetailContainer = () => {
    
    const [item, setItem] = useState({})
    const { id } = useParams()

    useEffect(()=>{
        
        const ItemCollection = collection(db, "figuras")
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
                <FigurasDetail items={item} />
            )}

        </div>
    );
};

export default FigurasDetailContainer;