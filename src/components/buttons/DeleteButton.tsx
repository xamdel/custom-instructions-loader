import React from 'react';

interface DeleteButtonProps {
  instructionId: string;
  onDelete: (id: string) => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ instructionId, onDelete }) => {

  return (
    <button onClick={() => onDelete(instructionId)}>Delete</button>
  );
};

export default DeleteButton;