import React from 'react'
import CartWidget from './CartWidget'
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {

    const categorias = [
        { name: "Los Helechos", id: 0, route: "/Categorias/loshelechos" },
        { name: "Finca Magnolia", id: 1, route: "/Categorias/fincamagnolia" },
        { name: "Texto Súbito", id: 2, route: "/Categorias/textosubito" },
        { name: "Estancia Mendoza", id: 3, route: "/Categorias/estanciamza" },
        { name: "FC Barcelona", id: 4, route: "/Categorias/barcelona" },
      ];

  return (

    <nav className='flex justify-center items-baseline bg-slate-400 py-2'>
  
        <div className='flex gap-6 w-full jusify-between items-baseline'>

        <Link to="/" className='flex flex-initial h-20 w-22 m-2 bg-slate-400'> <img  src={'https://firebasestorage.googleapis.com/v0/b/reactcomision37830.appspot.com/o/isologotipo-vinito.png?alt=media&token=48db173e-8c05-4c57-a7f0-2115785b5759'} alt=""/></Link>
        <Link to="/" className='flex text-3xl justify-self-center self-start text-white w-12/12'> <h1 >Vinito Maket</h1> </Link>
            
  
            <ul className='flex gap-2 text-white font-bold'>
           
           
           
            {categorias.map((categoria) => 
        
            <NavLink key={categoria.id} to={categoria.route}>{categoria.name}</NavLink>)}

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