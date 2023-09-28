import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Popup from './popup/Popup';
import InstructionForm from './components/InstructionsForm';

function App() {
  return (
    <>
    <Popup />
    <Routes>
      <Route path="/" element={<Popup />} />
      <Route path="/instructions/new" element={<InstructionForm mode='create' existingInstruction={null} />} />
    </Routes>
    </>
  );
}

export default App;