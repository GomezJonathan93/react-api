import React from 'react';
import RemerasItem from "./RemerasItem";

const Remeras = ({items}) =>{
    return(
        <section className="products">
            {
                items.map((item)=>{
                    return <RemerasItem key={item.id} {...item}/>
                })
            }
        </section>
    )
}

export default Remeras