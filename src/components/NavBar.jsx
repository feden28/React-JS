import React from 'react'
import logo from '../imagenes/Donna.png'
import CartWidget from './CartWidget'
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
  return (

    <nav className='flex justify-center items-baseline bg-slate-400 py-2'>
  
        <div className='flex gap-6 w-full jusify-between items-baseline'>

        <Link to="/" className='flex flex-initial h-24 w-24 m-2'> <img  src={logo} alt=""/></Link>
        <Link to="/" className='flex text-3xl justify-self-center self-start text-white w-12/12'> <h1 >Tienda Online</h1> </Link>
            
            <ul className='flex gap-2 text-white font-bold'>
                <Link to={`/Categorias/Nosotros`} ><li className='flex'>
                    Nosotros
                </li></Link>
                <Link to={`/Categorias/Productos`} ><li className='flex'>
                    Productos
                </li></Link>
                <Link to={`/Categorias/Contactanos`} ><li className='flex'>
                    Contactanos
                </li></Link>
            </ul>

            <NavLink to="/Cart">
            <div>
                <CartWidget/>
            </div>
            </NavLink>
                                        
        </div>
        
</nav>
  )
}

export default NavBar