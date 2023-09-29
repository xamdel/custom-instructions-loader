import React, { useEffect, useState } from 'react';
import InsertButton from './buttons/InsertButton';
import EditButton from './buttons/EditButton';
import { Link } from 'react-router-dom';
import useInstructions from '../hooks/useInstructions';
import { BsTrash3 } from 'react-icons/bs';
import ConfirmationModal from './ConfirmationModal';

const InstructionsList = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentInstructionId, setCurrentInstructionId] = useState('');

  const { instructions, deleteInstruction } = useInstructions();

  useEffect(() => {
    console.log("InstructionsList re-rendered.", instructions);
  }, [instructions]);

  const handleDelete = (id: string) => {
    setCurrentInstructionId(id);
    setShowModal(true);
  };

  const cancelDelete = () => {
    setShowModal(false);
  }

  const confirmDelete = () => {
    deleteInstruction(currentInstructionId);
    setShowModal(false);
  }

  return (
    <div>
      {instructions.length === 0 ? (
        <p>No instructions saved yet.</p>
      ) : (
        instructions.map((instruction) => (
          <div className='instruction-entry ' key={instruction.id}>
            <Link to={`/instructions/view/${instruction.id}`} state={instruction} title='See Details'>
              <h3>{instruction.title}</h3>
              <p>{instruction.description.substring(0, 60)}{instruction.description.length >= 60 && '...'}</p>
            </Link>
            <div className='buttons-container'>
              <InsertButton instructionOne={instruction.instructionOne} instructionTwo={instruction.instructionTwo} />
              <EditButton instruction={instruction} />
              <button className='delete-button' onClick={() => handleDelete(instruction.id)} title='Delete'><BsTrash3 /></button>
            </div>
          </div>
        ))
      )}
      {showModal && (
        <ConfirmationModal
          message="Are you sure you want to delete this instruction? Unless saved elsewhere, data will not be recoverable."
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
};

export default InstructionsList;