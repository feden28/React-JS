import React from 'react'
//import logo from '../../public/imagenes/Donna.png'
import logo from '../imagenes/Donna.png'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (

    <nav className='flex justify-center items-baseline bg-slate-400 py-2'>
  
        <div className='flex gap-6 w-full jusify-between items-baseline'>

            <img className='flex flex-initial h-24 w-24 m-2' src={logo} alt=""/>
            <h1 className='flex text-3xl justify-self-center self-start text-white w-12/12'>Tienda Online</h1>
            
            <ul className='flex gap-2 text-white font-bold'>
                <li className='flex'>
                    <a href="">Nosotros</a>
                </li>
                <li className='flex'>
                    <a href="">Productos</a>
                </li>
                <li className='flex'>
                    <a href="">Contactanos</a>
                </li>
            </ul>
            <div>
                <CartWidget />
            </div>
                                        
        </div>
        
</nav>
  )
}

export default NavBar