import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContairner';
import { Cart } from './components/Cart/Cart';
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from 'react-router-dom'
import { CartContext } from './components/context/CartContext';
import { useState } from 'react';



function App() {
  const [carrito, setCarrito] = useState([])
console.log(carrito)
  const addToCart = (item) => {
    setCarrito([...carrito, item])
  }

  const calcularCantidad = () =>{
    return carrito.reduce((acc, prod) => acc + prod.counter,0)
  }

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.price * prod.counter, 0)
  }

  const removerItem = (itemId) =>{
    const newCart = carrito.filter((prod) => prod.id !== itemId)
    setCarrito(newCart)
  }

  const vaciarCarrito = () =>{
    setCarrito([])
  }

  return (
  <CartContext.Provider value={{
    addToCart,
    calcularCantidad,
    precioTotal,
    removerItem,
    carrito,
    vaciarCarrito
  }}>
    <div className='App'>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<Navigate to='/'/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
      <footer className="foot">FIN DE LA APP</footer>
    </div>
  </CartContext.Provider>
  );
}

export default App;
