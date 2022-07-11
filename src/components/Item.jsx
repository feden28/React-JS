import React, {useState, useEffect} from 'react'
import ItemCount from "./ItemCount";
import {Link} from "react-router-dom"


//<div className='flex flex-col max-w-sm w-4/12 rounded overflow-hidden shadow-lg m-3 hover:bg-blue-100 justify-items-center items-center'>
//</div>

  
  export default function Item({ elem }) {
    return (

      <Link to= {`/categories/Productos/${elem.id}`} className= 'flex flex-col max-w-sm w-4/12 rounded overflow-hidden shadow-lg m-3 hover:bg-blue-100 justify-items-center items-center'>
            <img className='resize w-10'src={elem.img}/>
            <div className='px-3 py-3'> {elem.nombre} </div>
                <div className='font-bold text-xl m-a text-center'>
                  
                  {elem.precio}
                  
                  <p className='text-gray-700 text-base'>
                    
                    {elem.descrip}
                    
                  </p>
            </div>
            <div className='px-6 py-4'>
              <span></span>
            
            </div>
         
      </Link>
    );
  }