import React from 'react';

interface InsertButtonProps {
  instructionOne: string;
  instructionTwo: string;
}

const InsertButton: React.FC<InsertButtonProps> = ({ instructionOne, instructionTwo }) => {
  const insertInstructions = () => {
    const message = {
      type: "INSERT_INSTRUCTIONS",
      instructionOne,
      instructionTwo,
    };
    chrome.runtime.sendMessage(message);
  };

  return (
    <button onClick={insertInstructions}>
      Insert Instructions
    </button>
  );
};

export default InsertButton;