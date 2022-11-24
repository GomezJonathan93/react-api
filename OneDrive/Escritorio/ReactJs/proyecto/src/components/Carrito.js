import { addDoc, collection, serverTimestamp  } from "firebase/firestore"
import { useContext } from "react"
import { useRef, useState } from "react"
import { contexto } from "./CustomProvider"
import { db } from "./firebase"
import CarritoList from './CarritoList'

const Carrito = () => {

    const valorDelContexto = useContext(contexto);
    const refName = useRef()
    const refAge = useRef()

    const [items, setItems] = useState(valorDelContexto.items)
    console.log(valorDelContexto)
    

    const [id, setId] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        const orden = {
            buyer: {
                name: "",
                phone: "",
            },
            products: [],
            total : 100,
            date : serverTimestamp()
        }

        const ordersCollection = collection(db, "orders")
        const consulta = addDoc(ordersCollection,orden)

        consulta
            .then((docRef) => {
                setId(docRef.id)
            })
            .then((error)=>{
                console.log(error)
            })
    }

    return (
        <div>
            <p>Precio total a pagar: ${valorDelContexto.precioFinal}</p>
            <p>Unidades totales a comprar: {valorDelContexto.cantidadTotal}</p>
            <CarritoList items={items}/>
            {id ? <h1>Orden generada con exito, su id es {id}</h1> : null}
            <form onSubmit={handleSubmit}>
                <div>
                    <input ref={refName} type="text" />
                </div>

                <div>
                    <input ref={refAge} type="text" />
                </div>
                <button >Confirmar Compra</button>
            </form>
        </div>
    )
}

export default Carrito