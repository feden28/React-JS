import React, {useState, useContext} from 'react'
import { contexto } from '../context/CartContext'
import { db } from '../firebase/firebase';
import { collection, doc, addDoc, serverTimestamp, updateDoc, getDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';
//import BounceLoader from 'react-spinners/BounceLoader'

const Form = () => {

    const { products, clear, valueTotal } = useContext(contexto)
    const [idOrden, setIdOrden] = useState()
    //const [loading, setLoading] = useState(false)
    const [buyer, setBuyer] = useState({
        Nombre: '',
        Email: ''
    })

    const { Nombre, Email } = buyer

    const Input = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]: e.target.value
        }))
    }

    const actualizaStock = () => {
        products.forEach(async (product) => {
          
          const updateCollection = doc(db, "productos", product.id);
          const documento = await getDoc(updateCollection)
          const stockbase = documento.data()
          updateDoc(updateCollection, {stock: stockbase.stock - product.stock })
          
        });
      }


    const generarPedido = async (data) => {
        try {
            const col = collection(db, 'ventas')
            const order = await addDoc(col, data)
            setIdOrden(order.id)
            //setLoading(false)
            clear()

        } catch (error) {
            return(
                error
            )
        }
    }

    const enviar = (e) => {
        e.preventDefault()
        const dia = serverTimestamp()
        const items = products;
        const total = valueTotal;
        const data = { buyer, dia, items, total }
        generarPedido(data)
        actualizaStock()
    }

  return (

    <>
            {!idOrden && <div>
                    <form className='flex flex-col' onSubmit={enviar}>
                        <div>
                            <h2 className='text-xl m-a text-center font-bold underline decoration-double decoration-slate-400'> Carga tus datos</h2>
                        </div>
                        <div className='flex flex-col rounded overflow-hidden m-3 justify-center justify-items-center items-center'>
                            
                                <input className='m-2 border border-slate-400 rounded' type="text" name="Nombre" onChange={Input} value={Nombre} placeholder="Nombre" required />
                                <input className='m-2 border border-slate-400 rounded' type="email" name="Email" onChange={Input} placeholder="Mail" value={Email} required />
                                <button className='flex text-white bg-slate-600 rounded p-1 text-l m-2 text-center' > Enviar </button>
                            
                        </div>
                    </form>

                    
                </div>}
            <div>
                {
                    idOrden && (
                        <div>
                        <h3 className='flex gap-2 m-10 rounded px-2 pb-0.5 bg-slate-600 text-white justify-center' >¡Gracias por Comprar!</h3>
                        <div className='flex flex-col gap-2 m-10 rounded px-2 pb-0.5 bg-slate-100'>
                            <p>Su codigo de operacion es: <span className='underline font-mono text-slate-700 decoration-slate-700'>{` ${idOrden}`} </span> </p>
                            <p>Le enviarenos a  <span className='font-mono text-slate-700'> {`${Email}`} </span>  los detalles de su compra.</p>
                        </div>
                        <div className='flex gap-2 m-10 rounded px-2 pb-0.5 bg-slate-600 text-white underline underline-offset-2 justify-center'><Link to="/" >Realizar otra compra </Link></div>
                    </div>
                    )
                }
            </div>
        </>


  )
}

export default Form