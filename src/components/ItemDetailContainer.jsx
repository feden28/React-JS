import React, {useEffect, useState} from 'react'
import {ItemDetail} from './ItemDetail'
import DotLoader from "react-spinners/DotLoader"
import { useParams } from "react-router-dom"
import { db } from '../firebase/firebase';
import {getDoc, collection, doc} from "firebase/firestore";


const ItemDetailContainer = ({greeting}) => {

    const {idItem} = useParams();

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    

    useEffect(() => {
        setCargando(false);
        const productCollection = collection(db, 'productos');
        const refDoc = doc(productCollection, idItem);
        getDoc(refDoc)
            .then(result => {
                const producto = {
                    id: result.id,
                    ...result.data(),
                }
                setProductos(producto);
            })
        .catch(() => {
            console.log('Lo sentimos ocurrió un error')})

                        /*
                        const promesa = new Promise((res, rej) => {

                        setTimeout(() => {
                            res(objetos);
                        }, 2000);
                            });

                            promesa.then((data) => {
                                setProductos(data.find((item) => item.id == idItem))
                                setCargando(false)
                            }).catch(() => {
                                console.log('Lo sentimos ocurrió un error')
                            })*/
    }, [idItem]);


    return (

        
    <>
        <div key={productos.id} className='flex flex-col rounded overflow-hidden shadow-lg m-3 hover:bg-blue-100 justify-items-center items-center '>{cargando ? <DotLoader color={'#9013FE'} loading={cargando} size={50} cssOverride={{flex:'1', justifyContent:'center', alignItems:'center',textAlign:'center'}}  /> :
       
       
       <ItemDetail   productos={productos}/>}</div>
        
    </>
    
    )}

    
export default ItemDetailContainer