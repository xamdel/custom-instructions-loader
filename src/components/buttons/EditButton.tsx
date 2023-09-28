import React from 'react';
import { Link } from 'react-router-dom';
import { Instruction } from '../../types';

interface EditButtonProps {
    instruction: Instruction;
}

const EditButton: React.FC<EditButtonProps> = ({ instruction }) => {
    return (
        <Link
            to={`/instructions/edit/${instruction.id}`}
            state={{ mode: 'edit', instruction }}
        >
            <button>Edit</button>
        </Link>
    );
};

export default EditButton;