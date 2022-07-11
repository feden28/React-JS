import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import objetos from "../data/objetos";
import {FaTruckLoading} from 'react-icons/fa'
import { useParams } from "react-router-dom";


const promesa = new Promise((res, rej) => {

    setTimeout(() => {
      res(objetos);
    }, 2000);
  });

const ItemListContainer = () => {

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



export default ItemListContainer