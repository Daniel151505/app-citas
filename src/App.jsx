import Formulario from "./components/formulario";
import Header from "./components/header";
import ListadoPacientes from "./components/listadoPacientes";

function App() {

  const edad = 18;

  return (
    <>
      <Header/>
      <Formulario/>
      <ListadoPacientes/>
    </>
  )
}

export default App
