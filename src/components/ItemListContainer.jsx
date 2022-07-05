import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import objetos from "../data/objetos";
import {FaTruckLoading} from 'react-icons/fa'

const promesa = new Promise((res, rej) => {
    setTimeout(() => {
      res(objetos);
    }, 2500);
  });

export default function ItemListContainer() {
    const [objetosList, setObjetosList] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      promesa.then((response) => {
        setLoading(false);
        setObjetosList(response);
      });
    }, []);
  
    if (loading) {
      return (
        <>
         <FaTruckLoading className="m-10" size={100}/>
        </>
      );
    }
    return (
      <div>
        <ItemList objec={objetosList} />
      </div>
    );
  }

/*
const ItemListContainer = ({mensaje, iconotrabajo}) => {
    return (
        <>
            <div className='flex flex-col my-6 items-center justify-center text-xl font-bold'>
            <p> {mensaje} </p>
            <p> {iconotrabajo} </p>
            </div>
            
        </>

    )
}

export default ItemListContainer}
*/