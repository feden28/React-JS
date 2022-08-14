import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter,Routes,Route,} from "react-router-dom"
import Cart from './components/Cart';
import CustomProvider from './context/CartContext';
import  Form from './components/Form';

function App() {
  return (
    <BrowserRouter>
      <CustomProvider> 
        <NavBar/>
        
        <Routes>
            <Route path='/' element={<ItemListContainer greeting='Bienvenido mi Tienda Online'/>} />
            <Route path="/Categorias/:categoriaSelec" element={<ItemListContainer/>} />
            <Route path="/Categorias/Productos/:idItem" element={<ItemDetailContainer greeting='Detalles del producto'/>} />
            <Route path="/Cart" element={<Cart/>} />
            <Route path="/form" element={<Form/>} />
        </Routes>

        </CustomProvider>
    </BrowserRouter>
  );
}

export default App;
