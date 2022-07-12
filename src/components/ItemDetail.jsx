import React from 'react';
import ItemCount from './ItemCount';


export const ItemDetail = ({productos}) => {
  
  
  return (
    <div className= 'flex flex-col max-w-sm w-4/12 rounded overflow-hidden shadow-lg m-3 hover:bg-blue-100 justify-items-center items-center'>
    <img className='resize w-10'src={productos.img}/>
    <div className='px-3 py-3'> {productos.nombre} </div>
        <div className='font-bold text-xl m-a text-center'>
          
          {productos.precio}
          
          <p className='text-gray-700 text-base'>
            
            {productos.descrip}
            
          </p>
    </div>
    <div className='px-6 py-4'>
      <ItemCount stock= {10} />
    </div>
    </div>
 

    )
}

// export default ItemDetail