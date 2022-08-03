import React, {createContext, useState, useEffect} from 'react'

export const contexto = createContext();

const { Provider } = contexto;

const CustomProvider = ({children }) => {

    const [products, setProducts] = useState([]);
    const [qtyProducts, setQtyProducts] = useState(0);
    const [valueTotal, setValueTotal] = useState(0);

    const getTotalValue = () => {
        let total = 0
        products.forEach(product => {
            total += (product.qty * product.precio)
        })
        setValueTotal(total);
    }

    const getQtyProducts = () => {
        let qty = 0;
        
        products.forEach(product => {
            qty += product.qty;   
        })
        setQtyProducts(qty);
    }

    useEffect(() => {
        getQtyProducts();
        getTotalValue();
    }, [products])
    

    const addProduct = (product) => {
        if (isInCart(product.id)){
            const found = products.find(p => p.id === product.id);
            const index = products.indexOf(found)
            const aux = [...products];
            aux[index].qty += product.qty;
            setProducts(aux);
        } else {
            setProducts([...products, product])
        }
    }

    const deleteProduct = (id) => {
        setProducts(products.filter(product => product.id!= id));
 
    };

    const isInCart = (id) => {
        return products.some(products =>products.id ===id);
    };

    const clear = () => {
        setProducts([]);
        setQtyProducts(0);
        setValueTotal(0);
    }


  return (
    <Provider value={{products, addProduct, deleteProduct, clear, qtyProducts, valueTotal}}>
    {children }
    </Provider>
  )
}

export default CustomProvider