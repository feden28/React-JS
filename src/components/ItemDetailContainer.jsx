import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(data=>setProductos(data))
            .catch(err=>console.log(err))
    }, []);

    console.log(productos)

    return (
        <>
            <ItemDetail productos= {productos}/>
        </>
    )}

export default ItemDetailContainer