import React from 'react';
import { Link } from 'react-router-dom';
import { Instruction } from '../../types';
import { BsPencil } from 'react-icons/bs';

interface EditButtonProps {
    instruction: Instruction;
}

const EditButton: React.FC<EditButtonProps> = ({ instruction }) => {
    return (
        <Link
            to={`/instructions/edit/${instruction.id}`}
            state={{ mode: 'edit', instruction }}
        >
            <button className='edit-button' title='Edit'>
                <BsPencil />
            </button>
        </Link>
    );
};

export default EditButton;