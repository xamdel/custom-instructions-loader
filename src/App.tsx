import { Route, Routes } from 'react-router-dom';
import './App.css';
import Popup from './popup/Popup';
import NewInstruction from './popup/NewInstruction';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Popup />} />
      <Route path="/NewInstruction" element={<NewInstruction />} />
    </Routes>

  );
}

export default App;