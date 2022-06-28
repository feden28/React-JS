import React, {useState} from 'react'
import {BiPlus, BiMinus} from 'react-icons/bi'

const  ItemCount = ({stock}) => {
    const [cantidad, setCantidad] = useState(0)



    const suma = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        }
        //cantidad < stock && setCantidad(cantidad + 1) - opción en una linea de Código.
    }

    const resta = () => {
        if(cantidad >0 ){
            setCantidad(cantidad - 1)
        }
        //cantidad > 0 && setCantidad(cantidad -1) - opción una linea de código.
    }

    const OnAdd = () => {
        cantidad > 0 && alert(`Muchas Gracias por comprar ${cantidad} productos`) 
        cantidad == 0 && alert('Agregue una cantidad mayor a 0')
        
    }

  return (
    <>
    <div className='flex gap-6 py-6 px-10'>
        <button onClick={resta}> <BiMinus/> </button>
        <h3> {cantidad} </h3>
        <button onClick={suma}> <BiPlus/> </button>

        <button className='rounded px-2 pb-0.5 bg-slate-800 text-white' onClick={OnAdd}> Agregar </button>

    </div>
    </>
    )
}

export default  ItemCount