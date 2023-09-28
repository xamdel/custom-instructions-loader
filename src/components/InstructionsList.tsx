import React from 'react';
import { Instruction } from '../types';
import InsertButton from './buttons/InsertButton';
import DeleteButton from './buttons/DeleteButton';
import EditButton from './buttons/EditButton';
import { Link } from 'react-router-dom';

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
            <Link to={ `/instructions/view/${instruction.id}`} state={ instruction }>
              <h3>{instruction.title}</h3>
              <p>{instruction.description.substring(0, 50)}...</p>
            </Link>
            <EditButton instruction={instruction} />
            <DeleteButton instructionId={instruction.id} />
            <InsertButton instructionOne={instruction.instructionOne} instructionTwo={instruction.instructionTwo} />
          </div>
        ))
      )}
    </div>
  );
};

export default InstructionList;