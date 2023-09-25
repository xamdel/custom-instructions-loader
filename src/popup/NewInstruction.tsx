import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { Instruction } from '../types';

const NewInstruction = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [instructionOne, setInstructionOne] = useState('');
    const [instructionTwo, setInstructionTwo] = useState('');

    const navigate = useNavigate();

    const handleSave = () => {
        const newInstruction: Instruction = {
            id: uuid(),
            title,
            description,
            instructionOne,
            instructionTwo,
        };

        const existingInstructions: Instruction[] = JSON.parse(localStorage.getItem('instructions') || '[]');

        existingInstructions.push(newInstruction);

        localStorage.setItem('instructions', JSON.stringify(existingInstructions));

        navigate("/");
    };

    const handleCancel = () => {
        navigate("/");
    };

    return (
        <div>
            <label htmlFor="title">Title:</label>
            <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />

            <label htmlFor="description">Description:</label>
            <input id="description" value={description} onChange={(e) => setDescription(e.target.value)} />

            <label htmlFor="instructionOne">Instruction One:</label>
            <textarea id="instructionOne" value={instructionOne} onChange={(e) => setInstructionOne(e.target.value)} />

            <label htmlFor="instructionTwo">Instruction Two:</label>
            <textarea id="instructionTwo" value={instructionTwo} onChange={(e) => setInstructionTwo(e.target.value)} />

            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    );
};

export default NewInstruction;