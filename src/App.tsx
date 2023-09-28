import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Popup from './popup/Popup';
import InstructionForm from './components/InstructionsForm';
import InstructionView from './components/InstructionView';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Popup />} />
      <Route path="/instructions/new" element={<InstructionForm />} />
      <Route path="/instructions/edit/:id" element={<InstructionForm />} />
      <Route path="/instructions/view/:id" element={<InstructionView />} />
    </Routes>
  );
}
export default App;