import React, {useState} from 'react';
import ItemCount from './ItemCount';
import {Link} from "react-router-dom";


export const ItemDetail = ({productos}) => {
  return (

    <Link to= {`/Categorias/Productos/${productos.id}`} className= 'flex flex-col max-w-sm w-4/12 rounded overflow-hidden shadow-lg m-3 hover:bg-blue-100 justify-items-center items-center'>
    <img className='resize w-10'src={productos.img}/>
    <div className='px-3 py-3'> {productos.nombre} </div>
        <div className='font-bold text-xl m-a text-center'>
          
          {productos.precio}
          
          <p className='text-gray-700 text-base'>
            
            {productos.descrip}
            
          </p>
    </div>
    <div className='px-6 py-4'>
      <span></span>
      <ItemCount stock= {10} />
    </div>
    </Link>
 

    )
}

// export default ItemDetail