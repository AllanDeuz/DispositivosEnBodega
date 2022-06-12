import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import DispositivosEnBodega from './components/DispositivosEnBodega';
import AgregarDispositivo from './components/AgregarDispositivo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DispositivosEnBodega />} />
          <Route path="/create" element={<AgregarDispositivo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
