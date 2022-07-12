import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import objetos from "../data/objetos";
import BounceLoader from 'react-spinners/BounceLoader'
//import { useParams } from "react-router-dom";


const promesa = new Promise((res, rej) => {

    setTimeout(() => {
      res(objetos);
    }, 2000);
  });

const ItemListContainer = ({greeting}) => {

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
      <h1 className="m-2 text-black">{greeting}</h1>
      <BounceLoader className='flex' color={'#9013FE'} loading={loading} cssOverride={{flex:'1', justifyContent:'center', alignItems:'center',textAlign:'center'}} size={100} />
      </>
    );
  }
  return (
    <div className="m-2">
      <ItemList objec={objetosList} />
    </div>
  );

}



export default ItemListContainer