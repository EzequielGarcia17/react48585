import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContairner';
import "./App.css"

import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from 'react-router-dom'

function App() {

  return (
    <div className='App'>
    
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<Navigate to='/'/>} />
      </Routes>
    </Router>
    <footer className="foot">FIN DE LA APP</footer>
  </div>
  );
}

export default App;
