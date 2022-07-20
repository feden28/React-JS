import React, {useContext} from 'react';
import {contexto} from "../context/CartContext";
import { Link } from 'react-router-dom';
import { FaRegTrashAlt, FaTrash } from 'react-icons/fa'

const Cart = () => {

  const dspNone = {
    display: 'none'
  }

  const dspContent = {
    display: 'content'
  }


  const { products } = useContext(contexto);
  const {qtyProducts} = useContext(contexto);
  const {deleteProduct, clear} = useContext(contexto);

  return (

    <>
    {qtyProducts === 0 ?
                         <h1 className='flex gap-2 m-10 rounded px-2 pb-0.5 bg-slate-600 text-white'> Aún no tiene Productos en el Carrito, <Link className='underline underline-offset-2' to= "/Categorias/Productos">Continuar Comprando</Link></h1>:

        
    
      
     products.map(product => 
    
     <div className='flex m-4 p-2'>
      <h1 className='mr-5' key= {product.id}><Link to={`/Categorias/Productos/${product.id}`}>{product.nombre}</Link>   - </h1>
      <div className='flex gap-4'>
          <p>{product.qty}</p>
          <p>${product.precio}</p>
          <p>${product.precio * product.qty}</p>
          <button onClick={() => deleteProduct(product.id)}><FaRegTrashAlt className='mt-1' /></button>
      </div>
           
     </div>)
      
     }
      <button style={qtyProducts === 0 ? dspNone : dspContent} onClick={() => clear()} className='flex gap-2 m-10 rounded px-2 pb-0.5 bg-slate-800 text-white'>Limpiar Carro<FaTrash className='mt-1'/></button>
     

    </>
)}

export default Cart