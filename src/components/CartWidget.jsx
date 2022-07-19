import React, {useContext} from 'react'
import {BiCartAlt} from 'react-icons/bi'
import { contexto } from '../context/CartContext'

const CartWidget = () => {

  const { qtyProducts } = useContext(contexto);
 
  return (
    <>

    <BiCartAlt className='text-white' size={20}/>
    
    {qtyProducts === 0 ? <p/>  : <p>{qtyProducts}</p>}
    
       
    </>

  )
}

export default CartWidget