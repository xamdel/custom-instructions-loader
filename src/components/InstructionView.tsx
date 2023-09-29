import React from 'react';
import { useLocation } from 'react-router-dom';
import { Instruction } from '../types';
import EditButton from './buttons/EditButton';
import DeleteButton from './buttons/DeleteButton';
import BackButton from './buttons/BackButton';
import InsertButton from './buttons/InsertButton';

const InstructionView: React.FC = () => {
    const location = useLocation();
    const instruction: Instruction = location.state;

    if (!instruction) {
        return (
            <>
                <BackButton />
                <p>Instruction not found.</p>
            </>
        );
    }

    return (
        <>
            <div className='sticky-buttons-container'>
                <div>
                    <BackButton />
                </div>
                <div className="buttons-container">
                    <InsertButton instructionOne={instruction.instructionOne} instructionTwo={instruction.instructionTwo} />
                    <EditButton instruction={instruction} />
                    <DeleteButton instructionId={instruction.id} />
                </div>
            </div>
            <div className='instruction-view'>
                <h2>{instruction.title}</h2>
                <p>{instruction.description}</p>
                <h3>1. What would you like ChatGPT to know about you to provide better responses?</h3>
                <p>{instruction.instructionOne}</p>
                <h3>2. How would you like ChatGPT to respond?</h3>
                <p>{instruction.instructionTwo}</p>
            </div>
        </>
    );
};

export default InstructionView;