import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import VerDispositivos from './components/VerDispositivos';
import AgregarDispositivo from './components/AgregarDispositivo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VerDispositivos />} />
          <Route path="/create" element={<AgregarDispositivo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
