import React from 'react';
import { Link } from 'react-router-dom';
import InstructionsList from '../components/InstructionsList';
import useInstructions from '../hooks/useInstructions';

const Popup = () => {
    const { instructions, deleteInstruction } = useInstructions();
    return (
      <div>
        <Link to="/instructions/new">New</Link>
        <InstructionsList instructions={instructions} deleteInstructions={deleteInstruction} />
      </div>
    );
  };

export default Popup;