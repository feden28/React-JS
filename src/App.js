import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {GrUserWorker} from 'react-icons/gr'

function App() {
  return (
    <>
      <NavBar/>
      
      <ItemListContainer mensaje='Estamos Trabajando para usted!!'
      iconotrabajo={<GrUserWorker/>} />
      
    </>
  );
}

export default App;
