import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {NavBar} from "./components/NavBar/NavBar";
/*import { Poke } from "./components/Poke/Poke";*/

function App() {

  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="hola"/>
    </div>
  );
}

export default App;
