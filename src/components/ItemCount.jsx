import React, {useState} from 'react'
import {BiPlus, BiMinus} from 'react-icons/bi'

const  ItemCount = ({stock, initial, onAdd}) => {
    const [count, setcount] = useState(initial)
  
    const suma = () => {
        if (count < stock) {
            setcount(count + 1)
        }
        //count < stock && setcount(count + 1) - opción en una linea de Código.
    }

    const resta = () => {
        if(count > 1 ){
            setcount(count - 1)
        }
        //count > 0 && setcount(count -1) - opción una linea de código.
    }

    const agregaProducto = () => {
        onAdd(count);
       
    }

  return (
    <>
    <div className='flex gap-6 py-6 px-10'>
        <button onClick={resta}> <BiMinus/> </button>
        <h3> {count} </h3>
        <button onClick={suma}> <BiPlus/> </button>

        <button className='rounded px-2 pb-0.5 bg-slate-800 text-white' onClick={agregaProducto}> Agregar </button>

    </div>
    </>
    )
}

export default  ItemCount