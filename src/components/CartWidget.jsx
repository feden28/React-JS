import React, {useContext} from 'react'
import {BiCartAlt} from 'react-icons/bi'
import { contexto } from '../context/CartContext'

const CartWidget = () => {

  const { qtyProducts } = useContext(contexto);
 
  const estilo = {
    display: 'none'
  }

  return (
    <div  className='flex'>

    <BiCartAlt className='text-white' size={20}/>
    
    {qtyProducts === 0 ? <p style={estilo}>{qtyProducts}</p>  : <p className='flex gap-1 text-white font-bold'>{qtyProducts}</p>}
    
       
    </div>

  )
}

export default CartWidget