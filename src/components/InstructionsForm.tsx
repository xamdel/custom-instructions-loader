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
    <div>
      <label htmlFor="title">Title:</label>
      <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />

      <label htmlFor="description">Description:</label>
      <input id="description" value={description} onChange={(e) => setDescription(e.target.value)} />

      <label htmlFor="instructionOne">1. What would you like ChatGPT to know about you to provide better responses?</label>
      <textarea id="instructionOne" value={instructionOne} onChange={(e) => setInstructionOne(e.target.value)} />

      <label htmlFor="instructionTwo">2. How would you like ChatGPT to respond?</label>
      <textarea id="instructionTwo" value={instructionTwo} onChange={(e) => setInstructionTwo(e.target.value)} />

      <button onClick={handleSave}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default InstructionForm;