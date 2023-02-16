import { createContext, useState, useContext } from "react"
export const contexto = createContext()

const { Provider } = contexto
export const useCarrito = () => {
    return useContext(contexto)
}
const CustomProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])
    const [valorTotal, setTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)

    const vaciarCarrito = () => {
        setCarrito([])
        setTotal(0)
    }
    const agregarProducto = (items, cantidad) => {
        if (isInCart.inCart) {
        } else {
            setCarrito([
                ...carrito,
                { ...items, cantidad }
            ])
            setTotal(valorTotal + items.precio * cantidad)
            setCantidadTotal(cantidadTotal + cantidad)
        }
    }
    const isInCart = (id) => {
        return { inCart: false, item: {}, index: 0 }
    }
    const valorDelContexto = {
        items: carrito,
        precioFinal: valorTotal,
        vaciarCarrito: vaciarCarrito,
        cantidadTotal : cantidadTotal,
        agregarProducto: agregarProducto
    }
    return (
         <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}
export default CustomProvider