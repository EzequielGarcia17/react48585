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
import { CartProvider } from './components/context/CartContext';
import { Checkout } from './components/Checkout/Checkout';
//import { UiProvider } from './components/context/UiContext';







function App() {

  return (
  //<UiProvider>
  <CartProvider>
    <div className='App'>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<Navigate to='/'/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </Router>
      <footer className="foot"></footer>
    </div>
  </CartProvider>
 // </UiProvider>
  );
}

export default App;
