import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Instruction } from '../types';
import InstructionsList from '../components/InstructionsList';

const Popup = () => {
    const [instructions, setInstructions] = useState<Instruction[]>([]);

    useEffect(() => {
        const savedInstructions: Instruction[] = JSON.parse(localStorage.getItem('instructions') || '[]');
        setInstructions(savedInstructions);
    }, []);


    return (
        <div>
            <p>Hello, world!</p>
            <Link to="/NewInstruction">New</Link>
            <InstructionsList instructions={instructions} />
        </div>
    );
};

export default Popup;