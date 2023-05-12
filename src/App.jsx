import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import Anuncio from './components/Anuncio/Anuncio';
import { ProveedorContexto } from './contexto/CarritoContexto';
import Cart from './components/Cart/Cart';
import Checkout from './components/checkout/Checkout';



function App() {
  return (
    <>
    <BrowserRouter>
    <ProveedorContexto>

    <NavBar />
      <Routes>
    
        <Route path='/' element={<ItemListContainer greeting = "Venta Online"/>}/>
        <Route path='/cat/:cat' element= {<ItemListContainer/>}/>
        <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element = {<Cart/>} />
        <Route path='/checkout' element = {<Checkout/>} />
        <Route path='*' element={<h2>Terminar despues</h2>}></Route>
      </Routes>
    <Anuncio/>
    </ProveedorContexto>
    </BrowserRouter>
    </>
  );
}

export default App;

