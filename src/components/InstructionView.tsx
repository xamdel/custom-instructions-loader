import React from 'react';
import { useLocation } from 'react-router-dom';
import { Instruction } from '../types';
import EditButton from './buttons/EditButton';
import DeleteButton from './buttons/DeleteButton';

const InstructionView: React.FC = () => {
    const location = useLocation();
    const instruction: Instruction = location.state;

    if (!instruction) {
        return (
        <p>Instruction not found.</p>
        );
    }

    return (
        <div>
            <h2>{instruction.title}</h2>
            <p>{instruction.description}</p>
            <h3>1. What would you like ChatGPT to know about you to provide better responses?</h3>
            <p>{instruction.instructionOne}</p>
            <h3>2. How would you like ChatGPT to respond?</h3>
            <p>{instruction.instructionTwo}</p>
            <EditButton instruction={instruction} />
            <DeleteButton instructionId={instruction.id} />
        </div>
    );
};

export default InstructionView;