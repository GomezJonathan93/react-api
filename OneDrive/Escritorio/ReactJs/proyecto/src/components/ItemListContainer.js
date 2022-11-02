import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { products } from "./ProductList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    //console.log(items);

    const { categoryName } = useParams();
    //console.log(categoryName);

    useEffect(() => {
        const getProducts = () => {
            return new Promise((res, rej) => {
                const prodFiltrados = products.filter(
                    (prod) => prod.category === categoryName
                );
                const ref = categoryName ? prodFiltrados : products;
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
    }, [categoryName]);

    return (
        <div>
            <h2>Productos</h2>
            {items.length == 0 ? (
                <h1>Cargando...</h1>
            ) : (
                <ItemList items={items} />
            )}
        </div>
    );
};

export default ItemListContainer;