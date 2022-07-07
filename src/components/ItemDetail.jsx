import React from 'react'

const ItemDetail = ({productos}) => {
  return (
    <div key={productos.id} className='w-6/12 border-4 border-cyan-100 bg-cyan-50 rounded m-10' >
        <h1 className='text-lg text-center capitalize font-medium'>{productos.title}</h1>
        <p className='text-center'>{productos.description}</p>
    </div>
    
    )
}

export default ItemDetail