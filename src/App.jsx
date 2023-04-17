import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import Anuncio from './components/Anuncio/Anuncio';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
      <Routes>
    
        <Route path='/' element={<ItemListContainer greeting = "Venta Online"/>}/>
        <Route path='/categoria/:idCategoria' element= {<ItemListContainer/>}/>
        <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>

      </Routes>
    </BrowserRouter>
    <Anuncio/>
    </>
  );
}

export default App;

