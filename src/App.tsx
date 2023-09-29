import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Popup from './popup/Popup';
import InstructionForm from './components/InstructionsForm';
import InstructionView from './components/InstructionView';
import Header from './components/Header';

function App() {
  return (
    <div className='outer-wrapper'>
      <Header />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Popup />} />
          <Route path="/instructions/new" element={<InstructionForm />} />
          <Route path="/instructions/edit/:id" element={<InstructionForm />} />
          <Route path="/instructions/view/:id" element={<InstructionView />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;