import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { Instruction } from '../types';
import useInstructions from '../hooks/useInstructions';

const InstructionForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [instructionOne, setInstructionOne] = useState('');
  const [instructionTwo, setInstructionTwo] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const { addInstruction, updateInstruction } = useInstructions();

  const mode = location.state?.mode || 'create';
  const existingInstruction = location.state?.instruction || null;

  useEffect(() => {
    if (mode === 'edit' && existingInstruction) {
      setTitle(existingInstruction.title);
      setDescription(existingInstruction.description);
      setInstructionOne(existingInstruction.instructionOne);
      setInstructionTwo(existingInstruction.instructionTwo);
    }
  }, [mode, existingInstruction]);

  const handleSave = () => {
    const newInstruction: Instruction = {
      id: mode === 'create' ? uuid() : existingInstruction?.id || '',
      title,
      description,
      instructionOne,
      instructionTwo,
    };

    if (mode === 'create') {
      addInstruction(newInstruction);
    } else {
      updateInstruction(newInstruction);
    }

    navigate('/');
  };

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel? Changes will not be saved.")) {
      setTitle('');
      setDescription('');
      setInstructionOne('');
      setInstructionTwo('');
      navigate('/');
    }
  };

  return (
    <div className="form-container">
      <div className="input-group">
        <label htmlFor="title">Title:</label>
        <input className="form-input" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div className="input-group">
        <label htmlFor="description">Description:</label>
        <input className="form-input" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>

      <div className="input-group">
        <label htmlFor="instructionOne">1. What would you like ChatGPT to know about you to provide better responses?</label>
        <textarea className="form-textarea" id="instructionOne" rows={5} value={instructionOne} onChange={(e) => setInstructionOne(e.target.value)} />
      </div>

      <div className="input-group">
        <label htmlFor="instructionTwo">2. How would you like ChatGPT to respond?</label>
        <textarea className="form-textarea" id="instructionTwo" rows={5} value={instructionTwo} onChange={(e) => setInstructionTwo(e.target.value)} />
      </div>

      <div className="button-group">
        <button className="form-button save-button" onClick={handleSave}>Save</button>
        <button className="form-button cancel-button" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default InstructionForm;