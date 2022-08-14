import React, { useContext } from 'react';
import { contexto } from "../context/CartContext";
import { Link } from 'react-router-dom';
import { FaRegTrashAlt, FaTrash } from 'react-icons/fa';

const Cart = () => {

  const { products } = useContext(contexto);
  const { qtyProducts } = useContext(contexto);
  const { deleteProduct, clear } = useContext(contexto);
  const { valueTotal } = useContext(contexto);

  return (

    <div>
      {qtyProducts === 0 ?
        <h1 className='flex gap-2 m-10 rounded px-2 pb-0.5 bg-slate-600 text-white text-center'> Aún no tiene Productos en el Carrito, <Link className='underline underline-offset-2' to="/">Continuar Comprando</Link></h1> 
        :
        <div>

            {products.map(product => 
            
            <div key={product.id} className='flex m-4 p-2'>
              <h1 className='mr-5'><Link to={`/Categorias/Productos/${product.id}`}>{product.nombre}</Link>   - </h1>
              <div className='flex gap-4'>
                <p>{product.stock}</p>
                <p>${product.precio}</p>
                <p>${product.precio * product.stock}</p>
                <button onClick={() => deleteProduct(product.id)}><FaRegTrashAlt className='mt-1' /></button>
              </div>

            </div>)}

          <div className='flex gap-2 m-5 rounded px-2 pb-0.5 bg-slate-400 text-white'>Total de la Compra: ${valueTotal}</div>

          <button onClick={() => clear()} className='flex gap-2 m-10 rounded px-2 pb-0.5 bg-slate-800 text-white'>Limpiar Carro<FaTrash className='mt-1' /></button>
          <button className='flex gap-2 m-10 rounded px-2 pb-0.5 bg-slate-800 text-white'><Link to={'/form'}>Finalizar compra</Link></button>
          
        </div>

      }

    </div>
  )
}

export default Cart


