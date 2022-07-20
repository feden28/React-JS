import React, {useState, useContext} from 'react';
import ItemCount from './ItemCount';
import { Link } from "react-router-dom";
import { contexto} from "../context/CartContext";


export const ItemDetail = ({productos}) => {
  
  const [finalized, setfinalized] = useState(false)

  const { addProduct } = useContext(contexto);

  const onAdd = (count) => {
    addProduct({...productos, qty: count});
    setfinalized(true);
  }
  
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

        {finalized
              ? 
              <>
                <Link to="/cart">
                <button className='rounded my-2 mx-12 px-2 pb-0.5 bg-slate-800 text-white'>Finalizar compra</button>
                </Link>
                <Link to="/Categorias/Productos">
                <button className='rounded px-2 mx-8 pb-0.5 bg-slate-800 text-white'>Continuar Comprando</button>
                </Link>
              </>
              : <ItemCount initial={1} stock={10} onAdd={onAdd} />}

          
        
      </div>
    </div>

    )
}

// export default ItemDetail