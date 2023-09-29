import React from 'react';
import useInstructions  from '../../hooks/useInstructions';
import { useNavigate } from 'react-router-dom';
import { BsTrash3 } from 'react-icons/bs';

interface DeleteButtonProps {
  instructionId: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ instructionId }) => {
  const { deleteInstruction } = useInstructions();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this instruction?")) {
      deleteInstruction(instructionId);
      navigate('/');
    }
  };

  return (
    <button className='delete-button' onClick={handleDelete} title='Delete'>
      <BsTrash3 />
    </button>
  );
};

export default DeleteButton;