import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Instruction } from '../types';
import InstructionsList from '../components/InstructionsList';

const Popup = () => {
    const [instructions, setInstructions] = useState<Instruction[]>([]);

    function deleteInstruction (id: string) {
        if (window.confirm("Are you sure you want to delete this instruction?")) {
        const updatedInstructions = instructions.filter(instruction => instruction.id !== id);
      
        localStorage.setItem('instructions', JSON.stringify(updatedInstructions));
      
        setInstructions(updatedInstructions);
        }
      };
      

    useEffect(() => {
        const savedInstructions: Instruction[] = JSON.parse(localStorage.getItem('instructions') || '[]');
        setInstructions(savedInstructions);
    }, []);

    return (
        <div>
            <p>Hello, world!</p>
            <Link to="/NewInstruction">New</Link>
            <InstructionsList instructions={instructions} deleteInstructions={deleteInstruction} />
        </div>
    );
};

export default Popup;