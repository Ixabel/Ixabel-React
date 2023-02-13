import logo from './logo.svg';
import './App.css';
import HolaMundo from "./componentes/HolaMundo";
import AdiosMundo from "./componentes/AdiosMundo";
import Saludar from "./componentes/Saludar";

function App() {
  const user = {
    nombre:"Agustin Navarro",
    edad:26,
    color:"Azul"
  };
  const saludarFn = (nombre, edad) => {
    //console.log("Hola " + nombre + " tiene " + edad + " años");
    console.log(`Hola ${nombre} tiene ${edad} años.`);
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        < HolaMundo />
        < Saludar userInfo={user} name="Isabel" saludarFn={saludarFn}/>
        < AdiosMundo />
      </header>
    </div>
  );
}

export default App;
