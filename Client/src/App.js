import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import DispositivosEnBodega from './components/DispositivosEnBodega';
import IngresarDispositivo from './components/IngresarDispositivo';
import IngresarNuevoDispositivo from './components/IngresarNuevoDispositivo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DispositivosEnBodega />} />
          <Route path="/ingresar" element={<IngresarDispositivo />} />
          <Route path="/ingresar-dispositivo" element={<IngresarNuevoDispositivo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
