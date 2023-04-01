import { ItemCoun } from "./components/ItemCount/ItemCount";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {NavBar} from "./components/NavBar/NavBar";
import { ItemCount } from "./components/ItemCount/ItemCount";

function App() {

  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="hola"/>
      <ItemCount/>
    </div>
  );
}

export default App;
