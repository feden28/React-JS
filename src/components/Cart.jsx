import React, { useContext } from 'react';
import { contexto } from "../context/CartContext";
import { Link } from 'react-router-dom';
import { FaRegTrashAlt, FaTrash } from 'react-icons/fa';
import { db } from '../firebase/firebase';
import { collection, doc, addDoc, serverTimestamp, updateDoc } from "firebase/firestore";

const Cart = () => {

  const datosComprador = {
    nombre: 'Juan',
    apellido: 'Gomez',
    email: 'juangomez@gmail.com',
  }

  const finalizarCompra = () => {
    const ventasCollection = collection(db, 'ventas');
    addDoc(ventasCollection, {
      datosComprador,
      items: products,
      date: serverTimestamp(),
      total: valueTotal,
    });
    
    /*const actualizaStock = () => {
      products.forEach(product => {
        
        const updateCollection = doc(db, "productos", product.id);
        updateDoc(updateCollection, {stock: })
        
      });
    }*/
    

  }


  const dspNone = {
    display: 'none'
  }

  const dspContent = {
    display: 'content'
  }


  const { products } = useContext(contexto);
  const { qtyProducts } = useContext(contexto);
  const { deleteProduct, clear } = useContext(contexto);
  const { valueTotal } = useContext(contexto);

  return (

    <>
      {qtyProducts === 0 ?
        <h1 className='flex gap-2 m-10 rounded px-2 pb-0.5 bg-slate-600 text-white'> Aún no tiene Productos en el Carrito, <Link className='underline underline-offset-2' to="/Categorias/Productos">Continuar Comprando</Link></h1> :




        products.map(product =>

          <div key={product.id} className='flex m-4 p-2'>
            <h1 className='mr-5'><Link to={`/Categorias/Productos/${product.id}`}>{product.nombre}</Link>   - </h1>
            <div className='flex gap-4'>
              <p>{product.qty}</p>
              <p>${product.precio}</p>
              <p>${product.precio * product.qty}</p>
              <button onClick={() => deleteProduct(product.id)}><FaRegTrashAlt className='mt-1' /></button>
            </div>

          </div>)

      }
       <div style={qtyProducts === 0 ? dspNone : dspContent} className='flex gap-2 m-5 rounded px-2 pb-0.5 bg-slate-400 text-white'>Total de la Compra: ${valueTotal}</div>

      <button style={qtyProducts === 0 ? dspNone : dspContent} onClick={() => clear()} className='flex gap-2 m-10 rounded px-2 pb-0.5 bg-slate-800 text-white'>Limpiar Carro<FaTrash className='mt-1' /></button>
      <button style={qtyProducts === 0 ? dspNone : dspContent} onClick={finalizarCompra} className='flex gap-2 m-10 rounded px-2 pb-0.5 bg-slate-800 text-white'>Finalizar Compra</button>

    </>
  )
}

export default Cart