import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({mensaje, iconotrabajo}) => {
    return (
        <>
            <div className='flex flex-col my-6 items-center justify-center text-xl font-bold'>
            <p> {mensaje} </p>
            <p> {iconotrabajo} </p>
            </div>
            <ItemCount stock= {10} />
        </>
        
        

    )
}

export default ItemListContainer