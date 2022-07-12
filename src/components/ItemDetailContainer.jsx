import React, {useEffect, useState} from 'react'
import {ItemDetail} from './ItemDetail'
import objetos from "../data/objetos";
import DotLoader from "react-spinners/DotLoader"
import { useParams } from "react-router-dom"



const promesa = new Promise((res, rej) => {

    setTimeout(() => {
      res(objetos);
    }, 2000);
  });

const ItemDetailContainer = ({greeting}) => {

    const {idItem} = useParams();

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    

    useEffect(() => {
        promesa.then((data) => {
            setProductos(data.find((item) => item.id == idItem))
            setCargando(false)
        }).catch(() => {
            console.log('Lo sentimos ocurrió un error')
        })
    }, [idItem]);

    console.log(productos)

    return (

        
    <>
        <h2 className="textDos">{greeting}</h2>
        <div key={productos.id} className='flex'>{cargando ? <DotLoader color={'#9013FE'} loading={cargando} size={50} cssOverride={{flex:'1', justifyContent:'center', alignItems:'center',textAlign:'center'}}  /> :
       
       
       <ItemDetail   productos={productos}/>}</div>
        
    </>
    
    )}

    
export default ItemDetailContainer