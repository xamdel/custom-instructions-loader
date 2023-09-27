import React from 'react';
import { Instruction } from '../types';
import InsertButton from './buttons/InsertButton';
import DeleteButton from './buttons/DeleteButton';

type Props = {
  instructions: Instruction[];
  deleteInstructions: (id: string) => void;
};

const InstructionList: React.FC<Props> = ({ instructions, deleteInstructions }) => {
  return (
    <div>
      {instructions.length === 0 ? (
        <p>No instructions saved yet.</p>
      ) : (
        instructions.map((instruction) => (
          <div key={instruction.id}>
            <h3>{instruction.title}</h3>
            <p>{instruction.description.substring(0, 50)}...</p>
            <button>Edit</button>
            <DeleteButton instructionId={instruction.id} onDelete={deleteInstructions} />
            <InsertButton instructionOne={instruction.instructionOne} instructionTwo={instruction.instructionTwo} />
          </div>
        ))
      )}
    </div>
  );
};

export default InstructionList;