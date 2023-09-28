import React, { useEffect } from 'react';
import InsertButton from './buttons/InsertButton';
import EditButton from './buttons/EditButton';
import { Link } from 'react-router-dom';
import useInstructions from '../hooks/useInstructions';

const InstructionsList = () => {
  const { instructions, deleteInstruction } = useInstructions();

  useEffect(() => {
    console.log("InstructionsList re-rendered.", instructions);
  }, [instructions]);  

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this instruction?")) {
      deleteInstruction(id);
    }
  };

  return (
    <div>
      {instructions.length === 0 ? (
        <p>No instructions saved yet.</p>
      ) : (
        instructions.map((instruction) => (
          <div key={instruction.id}>
            <Link to={ `/instructions/view/${instruction.id}`} state={ instruction }>
              <h3>{instruction.title}</h3>
              <p>{instruction.description.substring(0, 50)}...</p>
            </Link>
            <EditButton instruction={instruction} />
            <button onClick={() => handleDelete(instruction.id)}>Delete</button>
            <InsertButton instructionOne={instruction.instructionOne} instructionTwo={instruction.instructionTwo} />
          </div>
        ))
      )}
    </div>
  );
};

export default InstructionsList;