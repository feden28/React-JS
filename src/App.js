import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {GrUserWorker} from 'react-icons/gr'
import {BrowserRouter,Routes,Route,} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      
      <ItemListContainer mensaje='Estamos Trabajando para usted!!'
      iconotrabajo={<GrUserWorker/>} />
      
    </BrowserRouter>
  );
}

export default App;
