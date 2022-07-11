import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {GrUserWorker} from 'react-icons/gr'
import {BrowserRouter,Routes,Route,} from "react-router-dom"
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      
      <Routes>
          <Route path='/' />
          <Route path="/Categorias/Productos" element={<ItemListContainer/>} />
          <Route path="/Categorias/Productos/:id" element={<ItemDetailContainer/>} />
          <Route path="/Cart" element={<Cart/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
