import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {NavBar} from "./components/NavBar/NavBar";

function App() {

  return (
    <div>
      <NavBar/>
      <h1>Que tal</h1>
      <ItemListContainer greeting="hola"/>
    </div>
  );
}

export default App;
