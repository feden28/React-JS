import React, {useEffect, useState} from 'react'
import {ItemDetail} from './ItemDetail'
import objetos from "../data/objetos";
import { BarLoader } from 'react-spinners';
import { useParams } from "react-router-dom"



const promesa = new Promise((res, rej) => {

    setTimeout(() => {
      res(objetos);
    }, 2000);
  });

const ItemDetailContainer = () => {

    const {id} = useParams();

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    

    useEffect(() => {
        promesa.then((data) => {
            const getData = data[id]
            setProductos(getData)
            setCargando(false)
        }).catch(() => {
            console.log('Lo sentimos ocurrió un error')
        })
    }, [id]);

    console.log(productos)

    return (

        
        <div key={productos.id} >
            <ItemDetail product={productos} />

        Hola Mundo
        </div>
    
    )}

    
export default ItemDetailContainer