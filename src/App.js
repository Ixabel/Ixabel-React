import logo from './logo.svg';
import './App.css';
import HolaMundo from "./componentes/HolaMundo";
import AdiosMundo from "./componentes/AdiosMundo";
import Saludar from "./componentes/Saludar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        < HolaMundo />
        < Saludar name="Ixabel Larrinoa" edad="46"/>
        < Saludar name="Carlos Agutin" edad="25"/>
        < AdiosMundo />
      </header>
    </div>
  );
}

export default App;
