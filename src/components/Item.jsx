import React from 'react'
import ItemCount from "./ItemCount";


  
  export default function Item({ elem }) {
    return (
      <div>
        <div className='flex flex-col gap-1 w-4/12 bg-slate-100 m-1'>
            <h1>{elem.nombre}</h1>
            <h2>{elem.precio}</h2>
            <p>{elem.descrip}</p>
                
            <ItemCount stock= {10} />
        </div>
      </div>
      
    );
  }