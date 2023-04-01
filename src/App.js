import { ItemCoun } from "./components/ItemCount/ItemCount";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {NavBar} from "./components/NavBar/NavBar";
import { ItemCount } from "./components/ItemCount/ItemCount";
import { Poke } from "./components/Poke/Poke";

function App() {

  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="hola"/>
      <ItemCount/>
      <Poke/>
    </div>
  );
}

export default App;
