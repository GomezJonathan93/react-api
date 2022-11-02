import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail"
import { products } from "./ProductList";

const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);
    //console.log(items);

    const { id } = useParams();
    //console.log(categoryName);

    useEffect(() => {
        const getProducts = () => {
            return new Promise((res, rej) => {
              const productoFiltrado = products.find(
                    (prod) => prod.id === id
                );
                const ref = productoFiltrado;
                setTimeout(() => {
                    res(ref);
                }, 2000);
            });
        };
        getProducts()
            .then((res) => {
                setItems(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return (
        <div>
            <h2>Productos</h2>
            {items.length == 0 ? (
                <h1>Cargando...</h1>
            ) : (
                <ItemDetail items={items} />
            )}
        </div>
    );
};

export default ItemDetailContainer;