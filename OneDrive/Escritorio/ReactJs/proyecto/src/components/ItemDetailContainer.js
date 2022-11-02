import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"
import { products } from "./ProductList";

const ItemDetailContainer = () => {
    const [items, setItems] = useState();

    const { id } = useParams();

    useEffect(() => {
        const getProducts = () => {
            return new Promise((res, rej) => {
                const productoFiltrado = products.find(
                    (prod) => prod.id === parseInt(id)
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
            {! items  ? (
                <h1>Cargando...</h1>
            ) : (
                <ItemDetail items={items} />
            )}

        </div>
    );
};

export default ItemDetailContainer;