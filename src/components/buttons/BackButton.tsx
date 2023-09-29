import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate();

    const goBack = () => navigate('/');

    return (
        <button className="back-button" onClick={goBack} title="Back">
            <BsArrowLeftShort />
        </button>
    );
}

export default BackButton;