import React, {useState, useContext} from 'react';
import ItemCount from './ItemCount';
import { Link } from "react-router-dom";
import { contexto} from "../context/CartContext";


export const ItemDetail = ({productos}) => {
  
  const [finalized, setfinalized] = useState(false)

  const { addProduct } = useContext(contexto);

  const onAdd = (count) => {
    addProduct({...productos, stock: count});
    setfinalized(true);
  }
  
  return (
    <div className= 'flex flex-col rounded overflow-hidden shadow-lg m-3 hover:bg-blue-100 justify-items-center items-center'>
      <img className='w-40'src={productos.img}/>
      <div className='px-3 py-3 font-bold '> {productos.nombre} </div>
          <div className='text-xl m-a text-center'>
            $ {productos.precio} .-
          </div>
          <div className='text-xl m-a text-center'>
            Stock: {productos.stock} botellas.-
          </div>  
            <p className='text-gray-700 text-base'>
              
              {productos.descrip}
              
            </p>
      
      <div className='px-6 py-4'>

        {finalized
              ? 
              <div className='flex justify-center'>
                <Link to="/cart">
                <button className='rounded mb-2 mr-2 px-2 pb-0.5 bg-slate-800 text-white'>Finalizar compra</button>
                </Link>
                <Link to="/Categorias/Productos">
                <button className='rounded px-2 pb-0.5 bg-slate-800 text-white'>Continuar Comprando</button>
                </Link>
              </div>
              : <ItemCount initial={1} stock={productos.stock} onAdd={onAdd} />}

          
        
      </div>
    </div>

    )
}
