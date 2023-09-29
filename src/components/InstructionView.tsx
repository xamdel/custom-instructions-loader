import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Instruction } from '../types';
import EditButton from './buttons/EditButton';
import BackButton from './buttons/BackButton';
import InsertButton from './buttons/InsertButton';
import ConfirmationModal from './ConfirmationModal';
import useInstructions from '../hooks/useInstructions';
import { BsTrash3 } from 'react-icons/bs';

const InstructionView: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    const { deleteInstruction } = useInstructions();

    const navigate = useNavigate();
    const location = useLocation();
    const instruction: Instruction = location.state;

    const handleDelete = () => {
        setShowModal(true);
    }

    const cancelDelete = () => {
        setShowModal(false);
    }

    const confirmDelete = () => {
        deleteInstruction(instruction.id);
        setShowModal(false);
        navigate('/');
    }

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
                    <button className='delete-button' onClick={() => handleDelete()} title='Delete'><BsTrash3 /></button>
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
            {showModal && (
                <ConfirmationModal
                    message="Are you sure you want to delete this instruction? Unless saved elsewhere, data will not be recoverable."
                    onConfirm={confirmDelete}
                    onCancel={cancelDelete}
                />
            )}
        </>
    );
};

export default InstructionView;