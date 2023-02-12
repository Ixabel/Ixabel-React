import logo from './logo.svg';
import './App.css';
import HolaMundo from "./componentes/HolaMundo";
import AdiosMundo from "./componentes/AdiosMundo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        < HolaMundo />
        < AdiosMundo />
      </header>
    </div>
  );
}

export default App;