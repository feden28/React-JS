import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
//import objetos from "../data/objetos";
import BounceLoader from 'react-spinners/BounceLoader'
import {db} from "../firebase/firebase";
import {getDocs, collection, query, where} from "firebase/firestore"
import { useParams } from "react-router-dom";



const ItemListContainer = ({greeting}) => {
  
  const [objetosList, setObjetosList] = useState([]);
  const [loading, setLoading] = useState(false);

  const {categoriaSelec } = useParams();

  useEffect(() => {

   
    const productCollection = categoriaSelec
      ? query(collection(db, 'productos'), where('category', '==', categoriaSelec))
      : collection(db, 'productos');

    setLoading(true);
   // const productCollection = collection(db, 'productos');
    //const q = query(productCollection, where('categoryID', '==', 'categoryID'))
    getDocs(productCollection)
    .then(result => {
     const lista = result.docs.map (doc => {
        
        return {
          id: doc.id,
          ...doc.data(),
        }
      })
      setObjetosList(lista);
      })
    .finally(() => setLoading(false))

   /* 
   const promesa = new Promise((res, rej) => {

    setTimeout(() => {
      res(lista);
    }, 2000);
  });

   setLoading(true);
    promesa.then((response) => {
      setLoading(false);
      setObjetosList(response);

    });*/
  }, [categoriaSelec]);

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