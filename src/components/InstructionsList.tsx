import React from 'react';
import { Instruction } from '../types';
import InsertButton from './buttons/InsertButton';

type Props = {
  instructions: Instruction[];
};

const InstructionList: React.FC<Props> = ({ instructions }) => {
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
            <button>Delete</button>
            <InsertButton instructionOne={instruction.instructionOne} instructionTwo={instruction.instructionTwo} />
          </div>
        ))
      )}
    </div>
  );
};

export default InstructionList;