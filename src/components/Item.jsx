import React, {useState, useEffect, useContext} from 'react'
import {Link} from "react-router-dom"
import contexto from "../context/CartContext";

  
  export default function Item({ elem }) {

    const resultado = useContext(contexto);

    return (

    
      <Link to= {`/Categorias/Productos/${elem.id}`} className= 'm-1 flex flex-col basis-1/3 max-w-sm w-4/12 rounded overflow-hidden shadow-lg hover:bg-blue-100 justify-items-center items-center'>
            <img className='resize h-20'src={elem.img}/>
            <div className='px-3 py-3'> {elem.nombre} </div>
                <div className='font-bold text-xl m-a text-center'>
                  
                 $ {elem.precio}

            </div>
            <div className='px-6 py-4'>
              <span></span>
            
            </div>
         
      </Link>
    );
  }