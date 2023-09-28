import React from 'react';
import useInstructions  from '../../hooks/useInstructions';

interface DeleteButtonProps {
  instructionId: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ instructionId }) => {
  const { deleteInstruction } = useInstructions();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this instruction?")) {
      deleteInstruction(instructionId);
    }
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteButton;