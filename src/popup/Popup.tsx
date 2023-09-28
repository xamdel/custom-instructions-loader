import React from 'react';
import { Link } from 'react-router-dom';
import InstructionsList from '../components/InstructionsList';
import useInstructions from '../hooks/useInstructions';

const Popup = () => {
    const { instructions } = useInstructions();
    return (
      <div>
        <Link to="/instructions/new">New</Link>
        <InstructionsList instructions={instructions} />
      </div>
    );
  };

export default Popup;