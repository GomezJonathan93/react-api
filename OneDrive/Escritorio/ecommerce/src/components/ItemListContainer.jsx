import { collection, getDocs, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "./firebase"
import ItemList from "./ItemList"

const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const { cat } = useParams()

    useEffect(() => {

        const productosCollection = collection(db, "Item")

        if (cat) {  
            const filtro = query(productosCollection,where("category","==",cat))
            const consulta = getDocs(filtro)

            consulta
            .then((resultado)=>{
                const productos = resultado.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                 setItems(productos)
            })
            .catch((error) => {
                console.log(error)
            })
        } else {

            const consulta = getDocs(productosCollection)

            consulta
                .then((resultado) => {
                    const productos = resultado.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                    setItems(productos)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }, [cat])
    return (
        <div className="containerListContainer">
            <p className="productosTitulo">Nuestros Productos</p>
            <p className="productosP">¡No olvides que con tu compra superior a $8000 y certificando que sos high elo, Oro 4 o más, accedes a Envío Gratis!</p>
            {items.length == 0 ? <h1>Cargando...</h1> : <ItemList items={items} />}
        </div>
    )
}
export default ItemListContainer