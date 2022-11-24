import React from "react";
import FigurasItem from "./FigurasItem";

const Figuras = ({items}) => {
    return (
        <section className="products">
            {
                items.map((item)=>{
                    return <FigurasItem key={item.id} {...item}/>
                })
            }
        </section>
    )
}

export default Figuras